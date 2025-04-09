import React, { useContext, createContext } from "react";

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import {createCampaign} from '../assets/index'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xb52d0fb62431e3ba90ec2ecde8c183044f4adac1');
    const { mutateAsync: createCampaign} = useContractWrite(contract, "createCampaign");

    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])

            console.log("Contract call success", data)
        } catch (error) {
            console.log("Contract call failure", error)

        }
    }
    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign, publishCampaign,
             }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);