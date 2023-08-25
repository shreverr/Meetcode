import axios from 'axios';

const ROOT_URL = process.env.API_URI || 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
axios.defaults.withCredentials = true;

export const newMeeting = () => {
  axios.get('/new-meeting', {
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = `/${res.data.meetingid}`;
      } else if (res.status === 401) {
        window.location = '/login';
      } else {
        console.log('user already has a meeting open');
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const joinMeeting = (meetingId) => {
  axios.get(`/${meetingId}`, {
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        window.location = `/${meetingId}`;
      } else if (res.status === 401) {
        window.location = '/login';
      } else {
        console.log('meeting does not exists');
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};

export const deleteMeeting = () => {
  axios.delete('/delete-meeting', {
    withCredentials: true,
  })
    .then((res) => {
      if (res.status === 200) {
        console.log('meeting deleted successfuly');
      } else if (res.status === 401) {
        window.location = '/login';
      } else if (res.status === 404) {
        console.log('you don\'t have any active meeting');
      }
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
};
