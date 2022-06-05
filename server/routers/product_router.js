const router = require('express').Router();
const { index, create, singleProduct} = require('../controllers/products_controller')

router.get('/', index);

router.get('/product/:id', singleProduct)

router.post('/newProduct', create)

module.exports = router;