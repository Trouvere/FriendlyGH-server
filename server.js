const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const apiRouter = require('./app/routes');
// const db = require('./app/models');
// const initial = require('./app/data');

const root = path.join.bind('');
dotenv.config({ path: root('.env.local') });
// console.log(process.env);
const corsOptions = {
  // origin: 'http://localhost:3000'
  // origin: 'https://friendlygh.netlify.app'
  origin: process.env.CORS_OPTIONS_ORIGIN
};

const app = express();

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/api/', apiRouter());

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}.`);
});

// Add initial MySQL in script
// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });
