const Product = require('../models/product')

exports.getProducts = (req, res) => {

    const products = Product.fetchAll()

    res.send(products)
}

exports.addProduct = (req, res) => {

    const product = new Product(req.body.tittle)

    product.save()

    res.send(product)
}
