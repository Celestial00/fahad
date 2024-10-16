const Reminder = require('../models/reminder.model');

// Add a Reminder
exports.addReminder = async (req, res) => {
    const { message, date, type } = req.body;

    try {
        const reminder = new Reminder({
            userId: req.user.id,
            message,
            date,
            type
        });

        await reminder.save();
        res.json({ reminder, msg: 'Reminder added successfully' });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// Get Reminders for a User
exports.getReminders = async (req, res) => {
    try {
        const reminders = await Reminder.find({ userId: req.user.id });
        res.json(reminders);
    } catch (error) {
        res.status(500).send('Server error');
    }
};
