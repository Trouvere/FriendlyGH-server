const express = require('express');
const roleInCompanyService = require('../services/roleInCompany.service');

const roleInCompany = () => {
  const router = express.Router();

  router.get('/', roleInCompanyService.getRolesInCompany);

  return router;
};

module.exports = roleInCompany;
