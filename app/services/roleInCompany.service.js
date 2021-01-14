const db = require('../models');

const RoleInCompany = db.roleincompany;

const roleInCompanyService = {
  getRolesInCompany: async (req, res) => {
    try {
      // get all roles in company
      const rolesInCompany = await RoleInCompany.findAll();
      // const position = rolesInCompany.map((el) => {
      //   return el.name;
      // });
      res.send(rolesInCompany);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};
module.exports = roleInCompanyService;
