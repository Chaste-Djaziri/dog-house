import React from 'react';

const PawDivider = () => {
  return (
    <div className="flex justify-center py-8">
      <div className="flex items-center space-x-4">
        <div className="w-2 h-2 bg-gold rounded-full"></div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brown"
        >
          <path
            d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z"
            fill="currentColor"
          />
          <path
            d="M8 5C6.9 5 6 5.9 6 7C6 8.1 6.9 9 8 9C9.1 9 10 8.1 10 7C10 5.9 9.1 5 8 5Z"
            fill="currentColor"
          />
          <path
            d="M16 5C14.9 5 14 5.9 14 7C14 8.1 14.9 9 16 9C17.1 9 18 8.1 18 7C18 5.9 17.1 5 16 5Z"
            fill="currentColor"
          />
          <path
            d="M5 8C3.9 8 3 8.9 3 10C3 11.1 3.9 12 5 12C6.1 12 7 11.1 7 10C7 8.9 6.1 8 5 8Z"
            fill="currentColor"
          />
          <path
            d="M19 8C17.9 8 17 8.9 17 10C17 11.1 17.9 12 19 12C20.1 12 21 11.1 21 10C21 8.9 20.1 8 19 8Z"
            fill="currentColor"
          />
          <path
            d="M12 14C8.7 14 6 16.7 6 20V22H18V20C18 16.7 15.3 14 12 14Z"
            fill="currentColor"
          />
        </svg>
        <div className="w-2 h-2 bg-gold rounded-full"></div>
      </div>
    </div>
  );
};

export default PawDivider;