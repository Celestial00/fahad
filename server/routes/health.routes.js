const express = require('express');
const { addHealthData, getHealthStats } = require('../controllers/health.controller');
const verifyToken = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/health', verifyToken, addHealthData);
router.get('/health/stats/:period', verifyToken, getHealthStats);

module.exports = router;
