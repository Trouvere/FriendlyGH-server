module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define(
    'contacts',
    {
      telegram: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      linkedIn: {
        type: Sequelize.STRING,
        allowNull: true
      },
      skype: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
    {
      createdAt: false,
      updatedAt: false
    }
  );

  return Contact;
};
