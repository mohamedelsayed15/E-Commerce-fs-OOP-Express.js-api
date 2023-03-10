const fs = require('fs')
const rootDir = require('../util/path') 
const path = require('path')
const pth = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart { 

    static async addProduct(id,productPrice) { 

        try {
            let carts = await fs.promises.readFile(pth)

            if (carts) { carts = JSON.parse(carts) }

            let cart = { products: [], totalPrice: 0 }

            const existingProduct = cart.products.findIndex(product => prod.id === id)

            let updatedProduct;

            if (existingProduct) {

                updatedProduct = { ...existingProduct }

                updatedProduct.quantity += 1

            } else { 
                updatedProduct = { id, quantity: 1 }
                
                cart.products = [...cart.products , updatedProduct] 
            }

            cart.totalPrice += productPrice

        } catch (e) {console.log(e) }
    }
}
