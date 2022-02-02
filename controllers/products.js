const products = require('../data/products')

function getProducts(req, res){
    res.status(200).json(products);
}
module.exports = getProducts;