const router = require('express').Router();

router.get('/fakestoreapi.com/products', require('../controllers/products')); 

module.exports = router;