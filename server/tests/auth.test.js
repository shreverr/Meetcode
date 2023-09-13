const supertest = require('supertest');
const mongoose = require('mongoose');
const {server: app} = require('../app');
const User = require('../model/User');
require('dotenv').config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

test('POST /auth/register', async () => {
  const user = {
    name: 'user1',
    email: 'user@mail.com',
    password: 'password',
  };

  await supertest(app)
    .post('/auth/register')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(user)
    .expect(200);

  const regUser = await User.findOne({email: user.email});
  expect(regUser).toBeTruthy();
  expect(regUser.name).toBe(user.name);
  expect(regUser.email).toBe(user.email);
  expect(regUser.password).toBe(user.password);
});

test('POST /auth/login', async () => {
  const user = {
    name: 'user1',
    email: 'user@mail.com',
    password: 'password',
  };

  await supertest(app)
    .post('/auth/register')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(user);

  await supertest(app)
    .post('/auth/login')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(user)
    .expect(200)
    .expect((res) => {
      if (!res.headers['set-cookie']) throw new Error('Missing session cookie');
    });
});

test('POST /auth/login', async () => {
  const user = {
    name: 'user1',
    email: 'user@mail.com',
    password: 'password',
  };

  await supertest(app)
    .post('/auth/register')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(user);

  await supertest(app)
    .post('/auth/login')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(user);

  await supertest(app)
    .post('/auth/logout')
    .expect(200)
    .expect((res) => {
      if (res.headers['set-cookie']) {
        throw new Error('Session cookie not deleted');
      }
    });
});
