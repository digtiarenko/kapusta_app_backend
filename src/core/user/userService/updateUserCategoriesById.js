const { User } = require('../userModel');

const updateUserCategoriesById = async (userId, categoryId) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $push: { categories: categoryId } },
    { new: true },
  );

  // PersonModel.update({ _id: person._id }, { $push: { friends: friend } });

  // const user = await User.findById(userId);
  // user.categories.push(categoryId);
  // await user.save({ new: true });
  return user;
};

module.exports = updateUserCategoriesById;
