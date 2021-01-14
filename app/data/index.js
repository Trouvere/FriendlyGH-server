/* eslint-disable node/no-unsupported-features/es-builtins */
const bcrypt = require('bcryptjs');
const db = require('../models');
const chatsCreator = require('./chatsCreator');
const interestsCreator = require('./interestsCreator');
const tagCreator = require('./tagCreator');
const roleInCompanyCreator = require('./roleInCompanyCreator');
const roleCreator = require('./roleCreator');
const chatInterestCreator = require('./chatInterestCreator');
const locationCreator = require('./locationCreator');
const genderCreator = require('./genderCreator');

const usersHelper = require('../helpers/users.helper');

const User = db.user;
const Contact = db.contact;

const initial = async () => {
  await roleCreator();

  await roleInCompanyCreator();

  await locationCreator();

  await genderCreator();

  // make interests
  await tagCreator();
  await interestsCreator();

  // make chats
  await Promise.allSettled([
    chatsCreator.sport(),
    chatsCreator.gender(),
    chatsCreator.travels(),
    chatsCreator.gambling(),
    chatsCreator.companyChats(),
    chatsCreator.technologies(),
    chatsCreator.homeAndFamily(),
    chatsCreator.eSportAndComputerGame(),
    chatsCreator.recreationActiveAndInactive()
  ]);
  // make chatInterest
  await chatInterestCreator();

  const adminContact = await Contact.create({
    telegram: '@mr.tit',
    phone: '+375443332244',
    linkedIn: 'Eugene T',
    skype: '@mr.titov'
  });

  const user = await User.create({
    email: 'admin@mail.ru',
    id: 1,
    password: bcrypt.hashSync('asdasdasd'),
    firstName: 'Admin',
    lastName: 'Admin',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfFakFgC4hRdOOI9jngJFx3EbvXVFV5Xij6Q&usqp=CAU'
  });
  user.setRole(2);

  const newInterestsIds = ['fifa'];
  const newLocationId = 'Brest';
  const newGenderId = 'female';
  usersHelper.setInterestLocationsGender(user, {
    newInterestsIds,
    newLocationId,
    newGenderId
  });

  user.setRoleincompany('middle');
  user.setContact(adminContact);
};

module.exports = initial;
