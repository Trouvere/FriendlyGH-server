module.exports = (sequelize, Sequelize) => {
  const Interest = sequelize.define(
    'tag',
    {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );
  return Interest;
};
