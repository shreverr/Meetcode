const express = require('express');
const router = require('./routes/index');
const authRouter = require('./routes/authRoutes');
const passport = require('passport');
const expressSession = require('express-session');
const {passportInit} = require('./config/passport');
require('dotenv').config();

const app = express();

// initialize passport
passportInit(passport);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressSession({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);
app.use('/auth', authRouter);

/* all the models should be interprated at
start of the app to avoid missing schema error */
require('./model/User');
require('./model/Meeting');

module.exports = app;
