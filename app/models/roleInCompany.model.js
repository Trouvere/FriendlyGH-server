module.exports = (sequelize, Sequelize) => {
  const RoleInCompany = sequelize.define(
    'roleincompany',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: true,
        primaryKey: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );

  return RoleInCompany;
};
