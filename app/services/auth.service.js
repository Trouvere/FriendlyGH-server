const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');
const config = require('../config/auth.config');

const User = db.user;

const authService = {
  signUp: async (req, res) => {
    try {
      // Save User to Database
      const user = await User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      });

      user.setRole(1);
      user.setRoleincompany('employee');

      res.send({ message: 'User was registered successfully!' });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  signIn: async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }

      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        });
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      const role = await user.getRole();

      res.status(200).send({
        id: user.id,
        email: user.email,
        role: role.name,
        accessToken: token
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};
module.exports = authService;
