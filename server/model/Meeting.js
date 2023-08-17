const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  meetingid: String,
  host: String,
});

const Meeting = mongoose.model('Meeting', meetingSchema);