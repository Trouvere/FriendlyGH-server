module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      photo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      aboutMe: {
        type: Sequelize.STRING(1000),
        allowNull: true
      }
    },
    {
      updatedAt: false
    }
  );

  return User;
};
