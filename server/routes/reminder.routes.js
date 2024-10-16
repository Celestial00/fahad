const express = require('express');
const { addReminder, getReminders } = require('../controllers/reminder.controller');
const verifyToken = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/reminder', verifyToken, addReminder);
router.get('/reminder', verifyToken, getReminders);

module.exports = router;
