'use strict'

class BookFactory {
    
    constructor({sbn, name, description, author, inventory}){
        this.sbn = sbn
        this.name = name
        this.description = description
        this.author = author
        this.inventory = inventory
    }

    factory(){
        return {
            sbn: this.sbn,
            name: this.name,
            description: this.description,
            author: this.author,
            inventory: this.inventory
        }
    }

    factoryListAll() {
        return {
            name: this.name,
        }
    }
}

module.exports = BookFactory