const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');

const User = db.user;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const verifyAdminToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(token, config.secret, async (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    req.userId = decoded.id;
    const user = await User.findOne({
      where: {
        id: req.userId
      }
    });
    const userRole = await user.getRole();
    if (userRole.name === 'admin') {
      next();
    } else {
      return res.status(401).send({
        message: 'NO ADMIN'
      });
    }
  });
};
const authJwt = {
  verifyToken,
  verifyAdminToken
};
module.exports = authJwt;
