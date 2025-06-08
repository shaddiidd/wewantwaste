import React, { useState, useEffect } from 'react';
import { get } from '../utils/fetch';
import StepHeader from '../components/StepHeader';
import SkipCard from '../components/SkipCard';
import SkipCardSkeleton from '../components/SkipCardSkeleton';
import BottomBar from '../components/BottomBar';

const SkipSize = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSkipSizes = async () => {
    setLoading(true);
    try {
      setError(null);
      const response = await get('skips/by-location?postcode=NR32&area=Lowestoft');
      setSkips(response);
    } catch (error) {
      console.error('Error fetching skips:', error);
      setError(error.message || 'Failed to fetch skips. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkipSizes();
  }, []);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const renderContent = () => {
    if (error) {
      return (
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <p className="text-red-600 font-medium mb-2">Something went wrong</p>
            <p className="text-red-500 text-sm">{error}</p>
          </div>
          <button
            className="cursor-pointer border border-solid border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white px-4 py-2 rounded-lg transition"
            onClick={fetchSkipSizes}
          >
            Try Again
          </button>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {Array(6).fill(null).map((_, index) => (
            <SkipCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (skips.length === 0) {
      return (
        <div className="flex flex-col items-center gap-4 py-8">
          <p className="text-gray-600 text-center">No skips available for your location.</p>
          <button
            className="cursor-pointer border border-solid border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white px-4 py-2 rounded-lg transition"
            onClick={fetchSkipSizes}
          >
            Refresh Content
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard 
            key={skip.id} 
            skip={skip} 
            onSelect={handleSelect} 
            selected={selectedSkip?.id === skip.id} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className={`min-h-screen overflow-x-hidden pt-4 ${selectedSkip ? 'pb-40' : 'pb-12'}`}>
      <StepHeader currentStep={2} />
      <div className="max-w-6xl mx-auto px-4 mt-4">
        <h1 className="text-2xl md:text-3xl font-bold text-left mb-1 mt-2">Choose Your Skip Size</h1>
        <p className="text-gray-400 text-left mt-0 mb-10">Select the skip size that best suits your needs</p>
        {renderContent()}
      </div>
      <BottomBar skip={selectedSkip} onContinue={() => alert('Continue!')} />
    </div>
  );
};

export default SkipSize; 