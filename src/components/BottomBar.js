import React from "react";

const BottomBar = ({ skip, onContinue, onBack }) => {
  return (
    <div className={`fixed bottom-0 left-0 w-full z-50 flex flex-col pointer-events-none transition-all duration-300 ease-in-out transform ${skip ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="w-full bg-gray-100/80 backdrop-blur-sm text-center">
        <p className="text-xs text-gray-600 max-w-6xl mx-auto px-4 py-0">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </p>
      </div>
      <div className="backdrop-blur-md bg-white/80 border-t border-gray-200 shadow-2xl w-full flex justify-center pointer-events-auto">
        <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-center justify-between px-4 md:px-8 py-4 md:py-5 gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 text-lg font-bold">{skip?.size} Yard Skip</span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-gray-500 text-sm">{skip?.hire_period_days} day hire</span>
            <span className="text-gray-400 text-sm">|</span>
            <span className="text-blue-600 text-xl md:text-lg font-bold">£{skip ? Math.round(skip.price_before_vat) : 0}</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="flex-1 md:flex-none cursor-pointer bg-transparent border border-solid border-blue-600 hover:bg-blue-50 text-blue-600 font-semibold px-6 md:px-8 py-3 rounded-lg transition text-sm md:text-base"
              onClick={onBack}
            >
              Back
            </button>
            <button
              className="flex-1 md:flex-none cursor-pointer border border-solid border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition text-sm md:text-base"
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;