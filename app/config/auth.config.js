const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind('../../');
dotenv.config({ path: root('.env.local') });

module.exports = {
  secret: process.env.SECRET
};
