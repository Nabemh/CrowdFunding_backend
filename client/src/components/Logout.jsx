import React from 'react';
import { useStateContext } from '../context';
import { useDisconnect } from "@thirdweb-dev/react";

const Logout = ({ isOpen, onClose }) => {
  const  disconnect  = useDisconnect();

  if (!isOpen) return null;

  const handleDisconnect = () => {
    disconnect();
    alert('You have disconnected your wallet.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#2c2f32] p-6 rounded-lg shadow-lg w-[90%] max-w-[400px]">
        <h2 className="text-lg font-bold mb-4 text-center">Disconnect Wallet?</h2>
        <p className="text-sm text-center mb-6">Are you sure you want to disconnect your wallet?</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>

          <button
            onClick={handleDisconnect}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-all"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
