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

    describe('#getBook', () => {
        beforeEach(() => {
    
            _jest.clearAllMocks()
            _jest.spyOn(
                BookSchema,
                'find',
            ).mockResolvedValue([
                {
                  _id: "628d4c332f558bf5bf0c4e55",
                  sbn: '123',
                  name: 'clean code',
                  description: 'best seller',
                  author: 'robert cecils',
                  inventory: 10,
                  createdAt: '2022-05-24T21:20:51.831Z',
                  updatedAt: '2022-05-24T21:57:35.586Z',
                  __v: 0
                },
                {
                  _id: "628d7ae179a52aef599e149d",
                  sbn: '123444',
                  name: 'programacao baixo nivel',
                  description: 'programacao em assembly e c',
                  author: 'igor zhirkov',
                  inventory: 15,
                  createdAt: '2022-05-25T00:40:01.823Z',
                  updatedAt: '2022-05-25T00:40:01.823Z',
                  __v: 0
                },
                {
                  _id: "628d7b0279a52aef599e14a1",
                  sbn: '1236565',
                  name: 'programacao baixo nivel volume 2',
                  description: 'programacao em assembly e c continuacaqo',
                  author: 'igor zhirkov',
                  inventory: 15,
                  createdAt: '2022-05-25T00:40:34.634Z',
                  updatedAt: '2022-05-25T00:40:34.634Z',
                  __v: 0
                }
            ])
    
        })
    
        beforeAll(() => _jest.clearAllMocks())

        test('should getBook return error', async () => {
            const bookRepository = new BookRepository()
            const result = await bookRepository.getBook(1, 3)
    
            expect(result).toBeTruthy()
        })
    })

    describe('getBookDetails', () => {

        beforeEach(() => {
            _jest.clearAllMocks()
            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockResolvedValue({
                _id: "628d7ae179a52aef599e149d",
                sbn: '123444',
                name: 'programacao baixo nivel',
                description: 'programacao em assembly e c',
                author: 'igor zhirkov',
                inventory: 15,
                createdAt: '2022-05-25T00:40:01.823Z',
                updatedAt: '2022-05-25T00:40:01.823Z',
                __v: 0
            })
        })

        beforeAll(() => _jest.clearAllMocks())


        test('should getBookDetails return book details', async () => {
            const bookRepository = new BookRepository()
            const sbn = "123444"
            const result = await bookRepository.getBookDetails(sbn)
            const expected = {
                book: {
                  _id: '628d7ae179a52aef599e149d',
                  sbn: '123444',
                  name: 'programacao baixo nivel',
                  description: 'programacao em assembly e c',
                  author: 'igor zhirkov',
                  inventory: 15,
                  createdAt: '2022-05-25T00:40:01.823Z',
                  updatedAt: '2022-05-25T00:40:01.823Z',
                  __v: 0
                }
            }
            expect(result).toEqual(expected)
        })

        test('should getBookDetails return not found', async () => {
            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockResolvedValue()

            const bookRepository = new BookRepository()
            const sbn = "1234445"
            const result = await bookRepository.getBookDetails(sbn)
            const expected = { status: 404, error: 'Book not found' }
            expect(result).toEqual(expected)
        })

        test('should getBook return error', async () => {

            _jest.spyOn(
                BookSchema,
                'findOne'
            ).mockImplementation(() => { throw new Error('error') })

            const bookRepository = new BookRepository()
            const sbn = "1234445"
            const result = await bookRepository.getBookDetails(sbn)
    
            expect(result).toBeTruthy()
        })
    })

    describe('patchBook', () => {

        beforeEach(() => {
            _jest.clearAllMocks()
            _jest.spyOn(
                BookSchema,
                'findOneAndUpdate'
            ).mockResolvedValue({})
        })

        beforeAll(() => _jest.clearAllMocks())

        test('should patchBook update book', async () => {
            const sbn = "123"
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }

            const bookRepository = new BookRepository()
            const result = await bookRepository.patchBook(sbn, payload)

            expect(result).toEqual('ok')
        })

        test('should patchBook not found', async () => {

            _jest.spyOn(
                BookSchema,
                'findOneAndUpdate'
            ).mockResolvedValue()

            const sbn = "1234"
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }

            const bookRepository = new BookRepository()
            const result = await bookRepository.patchBook(sbn, payload)

            expect(result).toEqual({status: 404, error: 'Book not found'})
        })

        test('should patchBook return error', async () => {

            _jest.spyOn(
                BookSchema,
                'findOneAndUpdate'
            ).mockImplementation(() => { throw new Error('error') })

            const bookRepository = new BookRepository()
            const sbn = "1234445"
            const payload = {
                "sbn": "1236565udafadd444d",
                "name": "mario bros volume 3",
                "description": "game",
                "author": "nintendo",
                "inventory": 10
            }
            const result = await bookRepository.patchBook(sbn, payload)
    
            expect(result).toBeTruthy()
        })
    })

    describe("deleteBook", () => {

        _jest.spyOn(
            BookSchema,
            'findOneAndDelete'
        ).mockResolvedValue()

        test('should deleteBook return ok', async () => {
            const bookRepository = new BookRepository()
            const sbn = "123"
            const result = await bookRepository.deleteBook(sbn)

            expect(result).toEqual('ok')
        })

        test('should deleteBook return error', async () => {

            _jest.spyOn(
                BookSchema,
                'findOneAndDelete'
            ).mockImplementation(() => { throw new Error('error') })

            const bookRepository = new BookRepository()
            const sbn = "1234445"
            const result = await bookRepository.deleteBook(sbn)
    
            expect(result).toBeTruthy()
        })
    })

})