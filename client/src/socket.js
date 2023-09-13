import { io } from 'socket.io-client';

const ROOT_URL = process.env.API_URI || 'http://localhost:8000';
const socket = io(ROOT_URL);

export default socket;
