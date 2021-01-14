const express = require('express');
const usersService = require('../services/users.service');
const { authJwt } = require('../middleware');

const usersRouter = () => {
  const router = express.Router();

  router.put('/', [authJwt.verifyToken], usersService.updateUser);
  router.get('/me', [authJwt.verifyToken], usersService.getMe);
  router.get('/:userId', [authJwt.verifyToken], usersService.getUser);
  router.get('/', [authJwt.verifyToken], usersService.getAllUsers);

  return router;
};
module.exports = usersRouter;
