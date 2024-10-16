// src/components/Reminder.js
import React, { useState } from 'react';
import { addReminder } from '../api';

const Reminder = ({ reminders }) => {
  const [reminderText, setReminderText] = useState('');

  const handleChange = (e) => {
    setReminderText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReminder({ text: reminderText });
      alert('Reminder added successfully!');
      setReminderText(''); // Clear input after adding
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h3>Your Reminders</h3>
      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>{reminder.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={reminderText} onChange={handleChange} placeholder="Add a reminder" required />
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  );
};

export default Reminder;
