const router = require('express').Router();
const userController = require('../controllers/user_controller');
const user_middleware  = require('../middlewares/userMiddleware')

router.post('/register', userController.create);
router.post('/login', userController.index);
router.post('/logout', user_middleware, userController.logout);

router.put('/profile', userController.updateDetails)


module.exports = router;