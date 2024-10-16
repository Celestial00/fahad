// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getHealthData } from '../api';
import { getReminders } from '../api';
import HealthForm from './HealthForm';
import Reminder from './Reminder';

const Dashboard = () => {
  const [healthData, setHealthData] = useState([]);
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const healthResponse = await getHealthData();
      setHealthData(healthResponse.data);
      const reminderResponse = await getReminders();
      setReminders(reminderResponse.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <HealthForm />
      <h3>Your Health Data</h3>
      <ul>
        {healthData.map((data) => (
          <li key={data._id}>{`Sugar: ${data.sugar}, BP: ${data.bloodPressure}, Heart Rate: ${data.heartRate}`}</li>
        ))}
      </ul>
      <Reminder reminders={reminders} />
    </div>
  );
};

export default Dashboard;
