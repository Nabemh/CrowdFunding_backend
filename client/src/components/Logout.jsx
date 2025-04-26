import React from 'react';

const Logout = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-[#1c1c24] p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">Are you sure you want to logout?</h2>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              console.log('Logout confirmed');
              onClose();
            }}
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
