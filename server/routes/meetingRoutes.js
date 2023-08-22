/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const router = require('express').Router();
const meetingController = require('../controllers/meetingController');

router.get('/new-meeting', meetingController.createNewMeeting);
router.delete('/delete-meeting', meetingController.deleteMeeting);
router.get('/:meetingid', meetingController.joinMeeting);

module.exports = router;
