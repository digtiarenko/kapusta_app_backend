const jwt = require('jsonwebtoken');
const serviceUsers = require('../core/user/userService');
const { createError } = require('../helpers');

const auth = async (req, _, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') {
    next(createError(401), 'Not authorized');
  }
  try {
    const { id } = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await serviceUsers.getUserById(id);
    if (!user || !user.token) {
      next(createError(401), 'Not authorized');
    }
    req.user = user;
    next();
  } catch (error) {
    next(createError(401, error.message));
  }
};

module.exports = auth;
