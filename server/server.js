const app = require('./app');
const connectDatabase = require('./config/database');
require('dotenv').config();

const port = process.env.PORT || 3000;

connectDatabase();

app.listen(port, () => {
  console.log(`Meetcode server is listening on port ${port}`);
});
