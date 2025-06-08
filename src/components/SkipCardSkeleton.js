import React from 'react';

const SkipCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full h-44 bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="w-full mt-3">
        <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2 mt-2"></div>
        <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3 mt-2"></div>
      </div>
    </div>
  );
};

export default SkipCardSkeleton; 