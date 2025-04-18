import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useContractWrite,
  useConnect,
  metamaskWallet,
} from "@thirdweb-dev/react";
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract("0xb52D0FB62431e3ba90Ec2Ecde8C183044F4aDAC1");
  const { mutateAsync: createCampaign } = useContractWrite(contract, "createCampaign");

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
          form.description,
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
      description: campaign.description,
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


  return (
    <StateContext.Provider
      value={{
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaigns,
        getUserCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
