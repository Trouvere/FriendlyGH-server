module.exports = (sequelize, Sequelize) => {
  const Interest = sequelize.define(
    'interest',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );
  return Interest;
};
