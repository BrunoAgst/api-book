const { describe, test, jest: _jest, beforeEach, beforeAll, expect } = require('@jest/globals')
const BookRepository = require('../../../src/service/repository/bookRepository')
const BookSchema = require('../../../src/schema/Book')

describe('#BookRepository', () => {

    describe('#createBook', () => {
        beforeEach(() => {
    
            _jest.clearAllMocks()
            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockResolvedValue()
    
            _jest.spyOn(
                BookSchema,
                'create'
            ).mockResolvedValue({})
    
        })
    
        beforeAll(() => _jest.clearAllMocks())
    
        test('should create a new book', async () => {
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }
    
            const bookRepository = new BookRepository()
            const result = await bookRepository.createBook(payload)
            expect(result).toEqual('ok')
        })
    
        test('should create error because book exists', async () => {
        
            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockResolvedValue({})
    
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }
    
            const bookRepository = new BookRepository()
            const result = await bookRepository.createBook(payload)
            expect(result).toEqual({ status: 401, error: 'Book exists' })
        })
    
        test('should create return error', async () => {
        
            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockImplementation(() => { throw new Error('error') })
    
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }
    
            const bookRepository = new BookRepository()
            const result = await bookRepository.createBook(payload)
    
            expect(result).toBeTruthy()
        })
    })

})