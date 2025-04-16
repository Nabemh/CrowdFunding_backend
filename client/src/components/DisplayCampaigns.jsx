import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loader } from '../assets';

const DisplayCampaigns = ({ title, isLoading, campaigns}) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default CampaignDetails