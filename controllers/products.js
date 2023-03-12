const Product = require('../models/product')

const Cart = require('../models/cart')

exports.getProducts = async (req, res) => {

    const products = await Product.fetchAll()

    res.send(products)
}

exports.changePrice = (req, res) => {

    const products = Product.changePrice(req.params.id,req.body.price)

    res.send({})
}

exports.findById = async (req, res) => {

    const products = await Product.findById(req.params.id)

    res.send(products)
}

exports.deleteProduct = (req, res) => {

    const products = Product.deleteProduct(req.params.id)

    res.send({})
}

//note here if passing req.body first element will have the request body value
    /*
    Product {
  id: {
    id: 1,
    tittle: 'meat balls',
    description: 'minced meat',
    price: 15,
    quantity: 20
  },
  tittle: undefined,
  description: undefined,
  price: undefined,
  quantity: undefined
}
    */ 

exports.addProduct = (req, res) => {

    if (!req.body.tittle || !req.body.description || !req.body.price || !req.body.quantity) {
        
        return res.send("invalid")
    }
    
    const product =  new Product(req.body.tittle,req.body.description,req.body.price,req.body.quantity)

    product.save()

    res.send(product)
}