import React from 'react';

const CircularPercentageBar = ({ percentage, label }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 border-4 border-blue-500 rounded-full flex items-center justify-center">
        <span className="text-lg font-semibold">{percentage}%</span>
      </div>
      <p className="mt-2">{label}</p>
    </div>
  );
};

export default CircularPercentageBar;
