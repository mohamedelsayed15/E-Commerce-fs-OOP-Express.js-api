const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
/*
 In Node.js, the static keyword is used to create methods or properties that belong to the class itself,

 rather than to its instances. These methods can be called directly on the class,

 without having to create an instance of the class first.
*/ 

module.exports = class Product {

    constructor(tittle) { 

        this.tittle = tittle
    }

    save() { 
        const pth = path.join(rootDir, 'data', 'product.json')

        //
        fs.readFile(pth, (error, content) => {

            //first we make an array to have our read data from the file
            let products = []

            if (!error) { 

                //here if we find the file  we make products = the retrieved data so we can manipulate it

                products = JSON.parse(content) //parse json data to javascript object

            } 
            console.log(products)// logs data read from the file

            //we concat the instance of the class to the data stored in products array
            products.push(this)

            console.log(products)//logs data from the (file + instance) of the class

            //here we write the data back to the json
            fs.writeFile(pth, JSON.stringify(products), (err) => { 
                console.log(err)
            })
        })
    }

    static fetchAll() { 
        return products
    }
}
