const categoryService = require('../categoryService');
const userService = require('../../user/userService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const { _id } = req.user;

  const category = await categoryService.getCategoryByName(name);
  if (category) {
    const result = await userService.updateUserCategoriesById(_id, category.id);
    res.status(200).json({ result });
  }
  const newCategory = await categoryService.addCategory({ ...req.body });
  const data = await userService.updateUserCategoriesById(_id, newCategory.id);
  res.status(200).json({ data });
};

module.exports = addCategory;
