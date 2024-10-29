// src/components/WizardForm.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const WizardForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Final Data: ', formData);
    alert('Form Submitted!'); // Confirm submission
    // You can send data to a server or handle it as needed here
  };

  switch (currentStep) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          formData={formData}
        />
      );
    case 3:
      return (
        <Step3
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      );
    default:
      return null;
  }
};

export default WizardForm;
