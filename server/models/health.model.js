const mongoose = require('mongoose');

const HealthDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bloodSugar: {
        type: Number,
        required: true
    },
    bloodPressure: {
        systolic: { type: Number, required: true },
        diastolic: { type: Number, required: true }
    },
    heartRate: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('HealthData', HealthDataSchema);
