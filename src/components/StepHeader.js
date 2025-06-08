import React from 'react';
import { FaMapMarkerAlt, FaTrash, FaShoppingCart, FaCheckCircle, FaCalendarAlt, FaCreditCard } from 'react-icons/fa';

const StepType = {
  POSTCODE: 'Postcode',
  WASTE_TYPE: 'Waste Type',
  SELECT_SKIP: 'Select Skip',
  PERMIT_CHECK: 'Permit Check',
  CHOOSE_DATE: 'Choose Date',
  PAYMENT: 'Payment',
};

const STEPS = [
  { id: StepType.POSTCODE, label: StepType.POSTCODE, icon: FaMapMarkerAlt },
  { id: StepType.WASTE_TYPE, label: StepType.WASTE_TYPE, icon: FaTrash },
  { id: StepType.SELECT_SKIP, label: StepType.SELECT_SKIP, icon: FaShoppingCart },
  { id: StepType.PERMIT_CHECK, label: StepType.PERMIT_CHECK, icon: FaCheckCircle },
  { id: StepType.CHOOSE_DATE, label: StepType.CHOOSE_DATE, icon: FaCalendarAlt },
  { id: StepType.PAYMENT, label: StepType.PAYMENT, icon: FaCreditCard },
];

const StepCircle = ({ Icon, isActive, isCompleted }) => (
  <div
    className={`relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mb-2 transition-all duration-300 ${
      isActive
        ? 'bg-blue-600 text-white shadow-lg scale-110 ring-4 ring-blue-100 hover:ring-blue-200'
        : isCompleted
        ? 'bg-blue-600 text-white shadow-md hover:shadow-lg hover:scale-105 cursor-pointer'
        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
    }`}
  >
    <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
    {isCompleted && (
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
        <FaCheckCircle className="w-2 h-2 md:w-3 md:h-3 text-white" />
      </div>
    )}
  </div>
);

const StepLabel = ({ label, isActive, isCompleted }) => (
  <div className="text-center">
    <span
      className={`block text-xs md:text-sm font-medium transition-all duration-300 ${
        isActive
          ? 'text-black font-semibold scale-105'
          : isCompleted
          ? 'text-black hover:text-blue-700'
          : 'text-gray-400 hover:text-gray-500'
      }`}
    >
      {label}
    </span>
  </div>
);

const StepConnector = ({ isCompleted }) => (
  <div className="flex-1 h-1 relative -mt-6 min-w-[48px] md:min-w-[64px]">
    <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
    <div 
      className={`absolute inset-0 rounded-full transition-all duration-500 ease-in-out ${
        isCompleted ? 'bg-blue-600' : 'bg-gray-200'
      }`}
      style={{ width: isCompleted ? '100%' : '0%' }}
    />
  </div>
);

const StepHeader = ({ currentStep = 2 }) => {
  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-2 md:px-8">
        <div className="flex overflow-x-auto md:overflow-visible gap-2 md:gap-4 scrollbar-hide items-center py-2">
          {STEPS.map((step, idx) => {
            const isActive = idx === currentStep;
            const isCompleted = idx < currentStep;
            const showConnector = idx < STEPS.length - 1;

            return (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center flex-none w-[100px] md:w-auto md:flex-1">
                  <StepCircle 
                    Icon={step.icon}
                    isActive={isActive}
                    isCompleted={isCompleted}
                  />
                  <StepLabel 
                    label={step.label}
                    isActive={isActive}
                    isCompleted={isCompleted}
                  />
                </div>
                {showConnector && <StepConnector isCompleted={isCompleted} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepHeader; 