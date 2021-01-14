module.exports = (sequelize, Sequelize) => {
  const Gender = sequelize.define(
    // editing to gender
    'gender',
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

  return Gender;
};
