const fs = require('fs')
const rootDir = require('../util/path') 
const path = require('path')
const e = require('express')
const { deleteProduct } = require('./product')
const pth = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart {

    static async addProduct(id, productPrice) {

        try {
            let cart = await fs.promises.readFile(pth)

            cart = JSON.parse(cart)

            if (e) {
                let cart = { products: [], totalPrice: 0 }
            }
                const existingProductIndex = cart.products.findIndex(product => product.id === id)

                const existingProduct = cart.products[existingProductIndex]

                let updatedProduct;

                if (existingProduct) {

                    updatedProduct = { ...existingProduct }

                    updatedProduct.quantity += 1

                    // Create a new copy of the products array with the updated product
                    cart.products = [...cart.products]

                    cart.products[existingProductIndex] = updatedProduct

                } else {
                    updatedProduct = { id, quantity: 1 }
                
                    cart.products = [...cart.products, updatedProduct]
                }

                cart.totalPrice += productPrice

                fs.writeFile(pth, JSON.stringify(cart), err => { console.log(err) })

            } catch (e) { console.log(e) }
    }
    static async deleteProduct(id, price) { 
        let cart = await fs.promises.readFile(pth)

        cart = JSON.parse(cart)

        let productQuantity;

        cart.products = cart.products.filter(product => { 

            if (product.id !== id) { return product }
            if (product.id === id) {productQuantity=product.quantity }
        })
        cart.totalPrice -= (price * productQuantity)
        fs.writeFile(pth, JSON.stringify(cart), err => { console.log(err) })
    }
}
