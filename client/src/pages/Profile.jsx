import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <DisplayCampaigns
    title= "All Campaigns"
    isLoading = {isLoading}
    campaigns = {campaigns}
    source="profile"
    />
  )
}

export default Profile