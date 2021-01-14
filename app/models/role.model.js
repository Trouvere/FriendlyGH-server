module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    'roles',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );

  return Role;
};
