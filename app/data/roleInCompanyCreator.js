const db = require('../models');

const RoleInCompany = db.roleincompany;

const roleInCompanyCreate = async () => {
  // eslint-disable-next-line node/no-unsupported-features/es-builtins
  return Promise.allSettled([
    RoleInCompany.create({
      name: 'employee'
    }),
    RoleInCompany.create({
      name: 'junior'
    }),
    RoleInCompany.create({
      name: 'middle'
    }),
    RoleInCompany.create({
      name: 'senior'
    })
  ]);
};
module.exports = roleInCompanyCreate;
