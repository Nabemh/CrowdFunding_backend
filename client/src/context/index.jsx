import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useContractWrite,
  useConnect,
  metamaskWallet,
  EditionMetadataWithOwnerOutputSchema,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0xD88131aE17Da2f15c8C7268a6cDe35bd47F15f4f");
  const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign");
  const { mutateAsync: withdrawToTeam } = useContractWrite(contract, "withdrawToTeam");

  const address = useAddress();
  const connectWithMetamask = useConnect();

  const connect = () => connectWithMetamask(metamaskWallet());

  const publishCampaign = async (form) => {
    if (!createCampaign) {
      console.error("Contract method not ready");
      return;
    }

    try {
      const data = await createCampaign({
        args: [
          address,
          form.title,
          form.email,
          form.description,
          form.category,
          form.target,
          new Date(form.deadline).getTime(),
          form.image,
        ],
      });
      console.log("Contract call success", data);
    } catch (error) {
      console.log("Contract call failure", error);
    }
  };


  const getCampaigns = async () => {
    const campaigns = await contract.call('getCampaigns');

    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      email: campaign.email,
      description: campaign.description,
      category: campaign.category,
      target: ethers.utils.formatUnits(campaign.target.toString(), 18),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaigns;

  }

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter((campaign) =>
    campaign.owner === address);

    return filteredCampaigns;
  }

  const donate = async (pId, amount) => {
    const data = await contract.call('donate', [pId], { value: ethers.utils.parseEther(amount)});

    return data;
  }

  const getDonations = async (pId) => {
    const donations = await contract.call('getDonators', [pId]);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for(let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString())
      })
    }

    return parsedDonations;
  }



  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        withdrawToTeam,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
