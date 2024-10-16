// src/components/HealthForm.js
import React, { useState } from 'react';
import { addHealthData } from '../api';

const HealthForm = () => {
  const [formData, setFormData] = useState({ sugar: '', bloodPressure: '', heartRate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addHealthData(formData);
      alert('Health data added successfully!');
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Health Data</h2>
      <input type="number" name="sugar" placeholder="Sugar Level" onChange={handleChange} required />
      <input type="text" name="bloodPressure" placeholder="Blood Pressure" onChange={handleChange} required />
      <input type="number" name="heartRate" placeholder="Heart Rate" onChange={handleChange} required />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default HealthForm;
