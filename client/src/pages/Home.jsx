import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components'
import { useStateContext } from '../context'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
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
    source="home"
    />
  )
}

export default Home