const { describe, test, jest: _jest, beforeEach, beforeAll, expect } = require('@jest/globals')
const Controller = require('../../src/controller/index')
const BookRepository = require('../../src/service/repository/bookRepository')
describe('#Controller', () => {
    describe('bookCreate', () => {
        beforeEach(() => {
            _jest.clearAllMocks()
        })

        test('should return book successfully created', async () => {
            const request = {
                body: {
                    "sbn": "1236565udafadd444d",
                    "name": "mario bros volume 3",
                    "description": "game",
                    "author": "nintendo",
                    "inventory": 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'createBook'
            ).mockResolvedValue([])
            

            const result = await Controller.bookCreate(request, response)
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })

        test('should return book return error', async () => {
            const request = {
                body: {
                    "sbn": "1236565udafadd444d",
                    "name": "mario bros volume 3",
                    "description": "game",
                    "author": "nintendo",
                    "inventory": 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'createBook'
            ).mockReturnValue({ error: true, status: '401'})
            

            const result = await Controller.bookCreate(request, response)
            expect(response.status).toHaveBeenCalled()
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })
    })

    describe('bookGetDetails', () => {
        beforeEach(() => {
            _jest.clearAllMocks()
        })

        test('should return one book', async () => {
            const request = {
                sbn: "123"
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'getBookDetails'
            ).mockResolvedValue([])
            

            const result = await Controller.bookGetDetails(request, response)
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })

        test('should return book return error', async () => {
            const request = {
                sbn: "123"
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'getBookDetails'
            ).mockRejectedValue()
            

            const result = await Controller.bookGetDetails(request, response)
            expect(response.status).toHaveBeenCalled()
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })
    })

    describe('bookPatch', () => {
        beforeEach(() => {
            _jest.clearAllMocks()
        })

        test('should update book', async () => {
            const request = {
                sbn: "123",
                body: {
                    "sbn": "1236565udafadd444d",
                    "name": "mario bros volume 3",
                    "description": "game",
                    "author": "nintendo",
                    "inventory": 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'patchBook'
            ).mockResolvedValue([])
            

            const result = await Controller.bookPatch(request, response)
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })

        test('should return update error', async () => {
            const request = {
                sbn: "123",
                body: {
                    "sbn": "1236565udafadd444d",
                    "name": "mario bros volume 3",
                    "description": "game",
                    "author": "nintendo",
                    "inventory": 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'patchBook'
            ).mockRejectedValue()
            

            const result = await Controller.bookPatch(request, response)
            expect(response.status).toHaveBeenCalled()
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })
    })

    describe('bookGetAll', () => {
        beforeEach(() => {
            _jest.clearAllMocks()
        })

        test('should return all books', async () => {
            const request = {
                query: {
                    page: 1,
                    limit: 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'getBook'
            ).mockResolvedValue([])
            

            const result = await Controller.bookGetAll(request, response)
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })

        test('should return books return error', async () => {
            const request = {
                query: {
                    page: 1,
                    limit: 10
                }
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'getBook'
            ).mockRejectedValue()
            

            const result = await Controller.bookGetAll(request, response)
            expect(response.status).toHaveBeenCalled()
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })
    })

    describe('bookDelete', () => {
        beforeEach(() => {
            _jest.clearAllMocks()
        })

        test('should delete book', async () => {
            const request = {
                sbn: "123"
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'deleteBook'
            ).mockResolvedValue([])
            

            const result = await Controller.bookDelete(request, response)
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })

        test('should return book error', async () => {
            const request = {
                sbn: "123"
            }

            const response = {
                status: _jest.fn(),
                json: _jest.fn()
            }


            _jest.spyOn(
                BookRepository.prototype,
                'deleteBook'
            ).mockRejectedValue()
            

            const result = await Controller.bookDelete(request, response)
            expect(response.status).toHaveBeenCalled()
            expect(response.json).toHaveBeenCalled()
            expect(result).toBeUndefined()
        })
    })
    
})