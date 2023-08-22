/* eslint new-cap: ["error", { "capIsNewExceptions": ["Router"] }] */
const router = require('express').Router();
const meetingRouter = require('./meetingRoutes');
const authRouter = require('./authRoutes');

router.use('/', meetingRouter);
router.use('/auth', authRouter);

module.exports = router;
