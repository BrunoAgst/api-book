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
})