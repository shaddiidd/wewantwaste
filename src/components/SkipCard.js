import React from 'react';
import { FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

const SkipCard = ({ skip, selected, onSelect }) => {

  const handleSelect = () => {
    if (selected) onSelect(null);
    else onSelect(skip)
  }

  return (
    <div className="flex flex-col items-center relative cursor-pointer" onClick={handleSelect}>
      <div
        className={`
          w-full h-44 bg-black rounded-lg overflow-hidden shadow-lg transition-all duration-200 relative
          ${selected ? 'ring-4 ring-blue-700 ring-offset-2 shadow-2xl scale-105 z-10' : 'hover:ring-2 hover:ring-blue-500'}
        `}
      >
        <img
          src={require(`../assets/${skip.size}-yarder-skip.jpg`)}
          alt={`${skip.size} Yard Skip`}
          className="object-cover h-full w-full"
        />
        {!skip.allowed_on_road && (
          <span className="absolute top-3 right-3 bg-yellow-800 text-yellow-300 text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <FaExclamationTriangle className="w-4 h-4 inline" />
            Not Allowed On The Road
          </span>
        )}
      </div>
      <h2 className="text-lg font-bold m-0 mt-3 w-full text-left">{skip.size} Yard Skip</h2>
      <p className="text-xs text-gray-400 m-0 mb-2 w-full text-left flex items-center gap-1">
        <FaCalendarAlt className="w-4 h-4 inline" />
        {skip.hire_period_days} day hire period
      </p>
      <div className="text-blue-700 font-bold text-md w-full text-left">£{Math.round(skip.price_before_vat)}</div>
    </div>
  );
};

export default SkipCard; 