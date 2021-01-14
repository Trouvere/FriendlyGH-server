const { Sequelize } = require('sequelize');
const config = require('../config/db.config.js');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require('./contact.model.js')(sequelize, Sequelize);
db.interest = require('./interest.model.js')(sequelize, Sequelize);
db.tag = require('./tag.model.js')(sequelize, Sequelize);
db.role = require('./role.model.js')(sequelize, Sequelize);
db.chat = require('./chat.model.js')(sequelize, Sequelize);
db.user = require('./user.model.js')(sequelize, Sequelize);
db.roleincompany = require('./roleInCompany.model.js')(sequelize, Sequelize);
db.location = require('./location.model.js')(sequelize, Sequelize);
db.gender = require('./gender.model.js')(sequelize, Sequelize);
// user_roles
db.role.hasMany(db.user, {
  foreignKey: {
    name: 'roleId',
    allowNull: true
  }
});
db.user.belongsTo(db.role, {
  foreignKey: {
    name: 'roleId',
    allowNull: true
  }
});

// user_interest
db.interest.belongsToMany(db.user, {
  through: 'user_interest'
});
db.user.belongsToMany(db.interest, {
  through: 'user_interest'
});

// user_contact
db.user.belongsTo(db.contact, {
  foreignKey: {
    name: 'userId',
    allowNull: true
  },
  onDelete: 'CASCADE'
});
// roleincompany_user
db.user.belongsTo(db.roleincompany, {
  foreignKey: {
    name: 'positionId',
    allowNull: true
  }
});
db.roleincompany.hasMany(db.user, {
  foreignKey: {
    name: 'positionId',
    allowNull: true
  }
});

// location_user
db.user.belongsTo(db.location, {
  foreignKey: {
    name: 'userLocation',
    allowNull: true
  }
});
db.location.hasMany(db.user, {
  foreignKey: {
    name: 'userLocation',
    allowNull: true
  }
});

// location_chat
db.chat.belongsTo(db.location, {
  foreignKey: {
    name: 'locationId',
    allowNull: false,
    defaultValue: 'all'
  }
});
db.location.hasMany(db.chat, {
  foreignKey: {
    name: 'locationId',
    allowNull: false,
    defaultValue: 'all'
  }
});
// gender_user;
db.user.belongsTo(db.gender, {
  foreignKey: {
    name: 'genderId',
    allowNull: true,
    defaultValue: 'male'
  }
});

db.gender.hasMany(db.user, {
  foreignKey: {
    name: 'genderId',
    allowNull: true,
    defaultValue: 'male'
  }
});

// chat_interest
db.interest.belongsToMany(db.chat, {
  through: 'chat_interest'
});
db.chat.belongsToMany(db.interest, {
  through: 'chat_interest'
});

// chat_user
db.user.belongsToMany(db.chat, {
  through: 'chat_user'
});
db.chat.belongsToMany(db.user, {
  through: 'chat_user'
});

// Interest_tag
db.interest.belongsTo(db.tag, {
  foreignKey: {
    name: 'tagId',
    allowNull: false,
    defaultValue: 'all'
  }
});
db.tag.hasMany(db.interest, {
  foreignKey: {
    name: 'tagId',
    allowNull: false,
    defaultValue: 'other'
  }
});

module.exports = db;
