module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define(
    'location',
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

  return Location;
};
