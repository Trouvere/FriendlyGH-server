const chatsHelper = require('./chats.helper');

const updateUser = async (user) => {
  const userInterests = await user.getInterests();

  const userLocation = await user.getLocation();
  const userGender = await user.getGender();

  const idRecommendedChats = await chatsHelper.getRecommendedChatsByInterestsAndLocationAndGender(
    userInterests,
    userLocation,
    userGender
  );
  await user.setChats(idRecommendedChats);
};

const setInterestLocationsGender = async (
  user,
  { newInterestsIds, newLocationId, newGenderId }
) => {
  if (newInterestsIds) {
    await user.setInterests(newInterestsIds);
  }
  if (newLocationId) {
    await user.setLocation(newLocationId);
  }
  if (newGenderId) {
    await user.setGender(newGenderId);
  }

  updateUser(user);
};

module.exports.setInterestLocationsGender = setInterestLocationsGender;
module.exports.updateUser = updateUser;
