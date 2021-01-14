module.exports = (sequelize, Sequelize) => {
  const Chat = sequelize.define(
    'chats',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      link: {
        type: Sequelize.STRING,
        allowNull: false
      },
      messenger: {
        type: Sequelize.STRING,
        allowNull: false
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

  return Chat;
};
