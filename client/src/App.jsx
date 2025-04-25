import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, CampaignDetails, CreateCampaign, Profile } from './pages';
import { Navbar, Sidebar } from './components';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark'){
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="relative sm:-8 p-4 bg-white text-black dark:bg-[#13131a] dark:text-text min-h-screen flex flex-row transition-all">

      <div className="sm:flex hidden mr-10 relative">
        <Sidebar theme={theme} setTheme={setTheme} />
      </div>

      <div className="flex-1 max:sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-campaign' element={<CreateCampaign />} />
          <Route path='/campaign-details/:id' element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;