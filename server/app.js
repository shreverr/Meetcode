const http = require('http');
const {Server: SocketIoServer} = require('socket.io');
const express = require('express');
const router = require('./routes/index');
const passport = require('passport');
const expressSession = require('express-session');
const {passportInit} = require('./config/passport');
const MongoDBStore = require('connect-mongodb-session')(expressSession);
const cors = require('cors');
const socketListners = require('./sockets/socketListeners');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new SocketIoServer(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

socketListners(io);

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'sessions',
});

// initialize passport
passportInit(passport);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(expressSession({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: false,
  store: store,
}));
app.use(cors({
  origin: ['http://localhost:3000', '*'],
  credentials: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', router);

/* all the models should be interprated at
start of the app to avoid missing schema error */
require('./model/User');
require('./model/Meeting');

module.exports = {server, io};
