import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { CustomButton } from '../components';
import { calculateBarPercentage, daysLeft } from '../utils';
import { thirdweb } from '../assets';

const CampaignDetails = () => {
  const { state } = useLocation();
  const { getDonations, contract, address } = useStateContext();

  const [isLoading, setIsLoading] = useState(false);
  cont [amount, setAmount] = useState('');
  const [donations, setDonators] = useState([]);

  const remainingDays = daysLeft(state.deadline);

  return (
    <div>
      {isLoading && 'Loading...'}

      <div className='w-full flex md:flex-row flex-col mt-10 gap-[30px]'>
        <div className='flex-1 flex-col'>
          <img src={state.image} alt="campaign" className='w-full h-[410px] object-cover rounded-xl' />
          <div className='relative w-full h-[5px] bg-[#3a3a43] mt-2 '>
            <div className='absolute h-full bg-[#4acd8d]' style={{ width: `${calculateBarPercentage(state.target, state.amountCollected)}%`, maxWidth:'100%'}} >

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CampaignDetails