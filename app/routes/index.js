const express = require('express');

const authRouter = require('./auth.route');
const usersRouter = require('./users.route');
const roleInCompany = require('./roleInCompany.route');
const interest = require('./interest.route');
const tag = require('./tag.route');
const chats = require('./chats.route');
const locations = require('./location.route.js');
const test = require('./test.route.js');

const apiRouter = () => {
  const router = express
    .Router()

    .use((req, res, next) => {
      res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept'
      );
      next();
    })
    .use('/auth', authRouter())
    .use('/users', usersRouter())
    .use('/roles', roleInCompany())
    .use('/interest', interest())
    .use('/tag', tag())
    .use('/chats', chats())
    .use('/location', locations())
    .use('/test', test());

  return router;
};
module.exports = apiRouter;
