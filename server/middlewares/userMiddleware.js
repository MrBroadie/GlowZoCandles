const { User } = require('../models/users');

const user_middleware = async (req, res, next) => {
  try {
    const { uid } = req.session;
    const user = await User.findOne( { _id: uid } );
    if (!user) req.user = undefined;
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
}

 
module.exports = user_middleware ;