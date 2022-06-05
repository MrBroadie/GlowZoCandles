const router = require('express').Router();
const orderController = require('../controllers/orders_controller');

router.post('/ordersUser', orderController.findUserOrders);

router.get('/orders', orderController.index);
router.post('/orders', orderController.generate);
router.put('/orders', orderController.update);

module.exports = router;