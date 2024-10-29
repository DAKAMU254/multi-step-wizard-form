// src/components/Step3.js
import React from 'react';

const Step3 = ({ prevStep, handleSubmit, formData }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 3: Review Your Information</h2>
      <div>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <p>Confirm Password: {formData.confirmPassword}</p>
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step3;
