import React from 'react';

const InputIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginRight: '10px' }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89001 21 3 20.1 3 19V15H5V19H19V5H5V9H3V5C3 3.9 3.89001 3 5 3ZM11.5 17L10.09 15.59L12.67 13H3V11H12.67L10.09 8.41L11.5 7L16.5 12L11.5 17Z"
        fill="#fff"
        fillOpacity="1"
      />
    </svg>
  );
};

export default InputIcon;
