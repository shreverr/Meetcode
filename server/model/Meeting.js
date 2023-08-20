const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  meetingid: {
    type: String,
    required: true,
    unique: true,
  },
  host: {
    type: String,
    required: true,
  },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;