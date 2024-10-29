// src/components/Step2.js
import React from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <form>
      <h2>Step 2: Account Security</h2>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
        />
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={nextStep}>Next</button>
    </form>
  );
};

export default Step2;
