import React from 'react';

export const Spinner = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="60"
      height="60"
      style={{ shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)', margin: 'auto auto' }}
      xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <circle strokeDasharray="164.93361431346415 56.97787143782138" r="35" strokeWidth="10" stroke="#5be1cf" fill="none" cy="50" cx="50">
          <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
        </circle>
        <g></g>
      </g>
    </svg>
  );
};
