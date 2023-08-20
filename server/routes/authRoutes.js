const express = require('express');
const UserController = require('../controllers/userController');
const passport = require('passport');
const router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/login',passport.authenticate('local'), UserController.loginUser);
router.post('/logout', UserController.logoutUser);

module.exports = router;