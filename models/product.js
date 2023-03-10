const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const mongoose = require('mongoose') // for id generation
const generateUniqueId = require('generate-unique-id')// or this package
const pth = path.join(rootDir, 'data', 'product.json')
/*
 In Node.js, the static keyword is used to create methods or properties that belong to the class itself,

 rather than to its instances. These methods can be called directly on the class,

 without having to create an instance of the class first.
*/ 

module.exports = class Product {

    constructor(tittle, description, price, quantity) {
        //this.id = new mongoose.Types.ObjectId()
        this.id = generateUniqueId({
                length: 8,    //either way
                useLetters: false
            })
        this.tittle = tittle;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    save() {
        try {
            fs.readFile(pth, (error, content) => {

                //first we make an array to have our read data from the file
                let products = []

                if (!error) {

                    //here if we find the file  we make products = the retrieved data so we can manipulate it

                    products = JSON.parse(content) //parse json data to javascript object

                }

                console.log(this)// logs data read from the file


                //we concat the instance of the class to the data stored in products array
                products.push(this)

                //console.log(products)//logs data from the (file + instance) of the class

                //here we write the data back to the json
                fs.writeFile(pth, JSON.stringify(products), (err) => {
                    console.log(err)
                })
            })
        } catch (e) { }
    }

    static async fetchAll() {
        try {

            const products = await fs.promises.readFile(pth)

            return JSON.parse(products)

        } catch (e) { 
            return []
        }
    }

    static changePrice(id,price) { 
        try {
            fs.readFile(pth, (error, content) => {

                let products = []

                if (!error) {
                    products = JSON.parse(content)
                }

                let product;

                products.forEach(element => {
                    if (element.id === id) { 

                        element.price = price
                        product = element

                    }
                })

                fs.writeFile(pth, JSON.stringify(products), (err) => {
                    console.log(err)
                })
            })
        } catch (e) { }
    }

    static deleteProduct(id) { 
        try {
            fs.readFile(pth, (error, content) => {

                let products = []

                if (!error) {
                    products = JSON.parse(content)
                }

                let product;

                const filteredProducts = products.filter(element => {

                    if (element.id !== id) { return element }

                })

                fs.writeFile(pth, JSON.stringify(filteredProducts), (err) => {
                    console.log(err)
                })
            })
        } catch (e) { }
    }

    static async findById(id) { 
        try {
            let products = await fs.promises.readFile(pth)

            products =  JSON.parse(products)

            let product;

            products.forEach(element => {

                if (element.id === id) { product = element }

            })

            return product

            } catch (e) { }
    }
}
