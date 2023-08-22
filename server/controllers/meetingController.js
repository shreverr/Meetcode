const {nanoid} = require('nanoid');
const Meeting = require('../model/Meeting');

exports.createNewMeeting = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send('unauthorized');
    };

    if (await Meeting.findOne({host: req.user.email})) {
      return res.send('user already has a meeting');
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
      meetingid: req.body.meetingid,
    });
    if (!meetingToDelete) {
      return res.status(404).send('Requested meeting not found');
    }
    console.log(meetingToDelete.host, req.user.email);
    if (meetingToDelete.host !== req.user.email) {
      return res.status(401).send('Only host can delete the meeting');
    }

    await Meeting.deleteOne();

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

    return res.send(req.params.meetingid);
  } catch (error) {
    console.log(error);
  }
};
