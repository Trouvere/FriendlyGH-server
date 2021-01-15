const express = require('express');
const cors = require('cors');
const apiRouter = require('./app/routes');
const db = require('./app/models');
const initial = require('./app/data');

const app = express();

const corsOptions = {
  // origin: 'http://localhost:3000'
  origin: 'https://friendlygh.netlify.app'
  // https://friendlygh.netlify.app/
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/api/', apiRouter());

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync Db');
  initial();
});
