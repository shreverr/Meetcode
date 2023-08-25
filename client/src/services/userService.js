import axios from 'axios';

const ROOT_URL = process.env.API_URI || 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
axios.defaults.withCredentials = true;

export const logUserIn = (userData) => {
  axios.post('/auth/login', {
    ...userData,
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = '/';
      } else {
        window.location = '/login';
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const registerUser = (userData) => {
  axios.post('/auth/register', {
    ...userData,
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = '/';
      } else {
        window.location = '/register';
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const logUserOut = () => {
  axios.post('/auth/logout', {
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = '/';
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
