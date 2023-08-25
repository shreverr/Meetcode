const {nanoid} = require('nanoid');
const Meeting = require('../model/Meeting');

exports.createNewMeeting = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('unauthorized');
    };

    if (await Meeting.findOne({host: req.user.email})) {
      return res.status(208).send('user already has a meeting');
    };

    const newMeetingData = {
      meetingid: nanoid(),
      host: req.user.email,
    };
    await new Meeting(newMeetingData).save();

    return res.status(200).json({
      status: 'success',
      ...newMeetingData,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMeeting = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('unauthorized');
    };

    const meetingToDelete = await Meeting.findOne({
      host: req.user.email,
    });
    if (!meetingToDelete) {
      return res.status(404).send('Requested meeting not found');
    }

    meetingToDelete.deleteOne();

    return res.status(200).send('Meeting deleted successfully');
  } catch (error) {
    console.log(error);
  }
};

exports.joinMeeting = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('unauthorized');
    };

    const meeting = await Meeting.findOne({meetingid: req.params.meetingid});
    if (meeting) {
      return res.status(200).send('Meeting id exists');
    }

    return res.status(404).send('Meeting Id does not exists');
  } catch (error) {
    console.log(error);
  }
};
