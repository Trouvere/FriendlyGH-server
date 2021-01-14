const db = require('../models');

const usersHelper = require('../helpers/users.helper');

const User = db.user;
const Contact = db.contact;

const findContact = (userId) => {
  Contact.findOne({
    where: {
      id: { userId }
    }
  });
};

const findUser = async (res, userId) => {
  const user = await User.findOne({
    where: {
      id: userId
    }
  });

  const role = await user.getRole();
  const roleInCompany = await user.getRoleincompany();
  const contacts = await user.getContact();
  const interest = await user.getInterests();
  const interests = interest.map((el) => {
    return el;
  });

  return res.send({
    id: user.id,
    email: user.email,
    role: role.name,
    firstName: user.firstName,
    lastName: user.lastName,
    location: user.userLocation,
    gender: user.genderId,
    roleInCompany: roleInCompany.name,
    photo: user.photo,
    aboutMe: user.aboutMe,
    contacts,
    interests
  });
};

const usersService = {
  updateUser: async (req, res) => {
    try {
      // Edit User to Database
      await User.update(
        {
          firstName: req.body.data.firstName,
          lastName: req.body.data.lastName,
          photo: req.body.data.photo,
          aboutMe: req.body.data.aboutMe
        },
        {
          where: { id: req.userId }
        }
      );
      const user = await User.findOne({
        where: {
          id: req.userId
        }
      });

      const newInterestsIds = req.body.data.interests;
      const newLocationId = req.body.data.location;
      // const newLocationId = 'brest';
      const newGenderId = req.body.data.gender;
      usersHelper.setInterestLocationsGender(user, {
        newInterestsIds,
        newLocationId,
        newGenderId
      });

      if (findContact(user.id)) {
        await Contact.update(
          {
            telegram: req.body.data.telegram,
            phone: req.body.data.phone,
            linkedIn: req.body.data.linkedIn,
            skype: req.body.data.skype
          },
          {
            where: { id: user.id }
          }
        );
      } else {
        const userContacts = await Contact.create({
          telegram: req.body.data.telegram,
          phone: req.body.data.phone,
          linkedIn: req.body.data.linkedIn,
          skype: req.body.data.skype
        });
        user.setContact(userContacts);
      }
      if (req.body.data.roleInCompany) {
        await user.setRoleincompany(req.body.data.roleInCompany);
      }

      const roleInCompany = await user.getRoleincompany();
      const contacts = await user.getContact();
      const interests = await user.getInterests();
      // const location = await user.getLocation();
      // const gender = await user.getGender();
      res.send({
        id: req.userId,
        firstName: user.firstName,
        lastName: user.lastName,
        roleInCompany: roleInCompany.name,
        photo: user.photo,
        aboutMe: user.aboutMe,
        // location: location.name,
        // gender: gender.name,
        location: user.userLocation,
        gender: user.genderId,
        contacts,
        interests
      });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      // Get User with params.id
      await findUser(res, req.params.userId);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getMe: async (req, res) => {
    try {
      // Get User with token
      await findUser(res, req.userId);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      // Get all Users
      const users = await User.findAll();

      const usersAndInterests = await Promise.all(
        users.map(async (user) => {
          const getInterests = await user.getInterests();
          const interests = await Promise.all(
            getInterests.map((el) => {
              return el.name;
            })
          );
          const roleInCompany = await user.getRoleincompany();
          return {
            id: user.id,
            roleInCompany: roleInCompany.name,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.userLocation,
            gender: user.genderId,
            photo: user.photo,
            interests
          };
        })
      );
      res.send(usersAndInterests);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
};
module.exports = usersService;
