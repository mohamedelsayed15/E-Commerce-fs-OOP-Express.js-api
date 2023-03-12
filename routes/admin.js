const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')

router.post('/add-product', productsController.addProduct)

router.post('/change-price/:id', productsController.changePrice)

router.delete('/delete-product/:id', productsController.deleteProduct)

router.get('/find-by-id/:id', productsController.findById)

module.exports = router