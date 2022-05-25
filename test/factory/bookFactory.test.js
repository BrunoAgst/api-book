const { describe, test, expect } = require('@jest/globals')
const BookFactory = require('../../src/factory/bookFactory')

describe('#BookFactory', () => {
    test('should return book factory', () => {
        const payload = {  
            "_id": "628d4c332f558bf5bf0c4e55",  
            "sbn": "123",  
            "name": "clean code",  
            "description": "best seller",
            "author": "robert cecils",  
            "inventory": 10,  
            "createdAt": "1653427251831",  
            "updatedAt": "1653429455586" 
        }

        //const bookFactory = new BookFactory()
        const result = new BookFactory(payload).factory()

        const expected = {
            "sbn": "123",  
            "name": "clean code",  
            "description": "best seller",
            "author": "robert cecils",  
            "inventory": 10,  
        }

        expect(result).toEqual(expected)
    })
  
})