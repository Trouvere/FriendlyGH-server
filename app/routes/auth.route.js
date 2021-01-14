const { body, validationResult } = require('express-validator');
const express = require('express');
const authService = require('../services/auth.service');

const bodyValidation = [
  body('email').isEmail(),
  // password must be at least 8 chars long
  body('password').isLength({ min: 8 })
];

const authRouter = () => {
  const router = express.Router();

  router.post('/signup', bodyValidation, (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    authService.signUp(req, res);
  });

  router.post('/signin', bodyValidation, (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    authService.signIn(req, res);
  });

  return router;
};

module.exports = authRouter;
