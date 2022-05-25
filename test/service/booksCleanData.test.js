const { describe, test, expect } = require('@jest/globals')
const booksCleanData = require('../../src/service/booksCleanData')

describe('#BookCleanData', () => {
    test('should bookCleanData return array formated', () => {

        const payload = [
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
        ]

        const result = booksCleanData(payload)
        
        const expected = [
            {
              sbn: '123',
              name: 'clean code',
              description: 'best seller',
              author: 'robert cecils',
              inventory: 10
            },
            {
              sbn: '123444',
              name: 'programacao baixo nivel',
              description: 'programacao em assembly e c',
              author: 'igor zhirkov',
              inventory: 15
            },
            {
              sbn: '1236565',
              name: 'programacao baixo nivel volume 2',
              description: 'programacao em assembly e c continuacaqo',
              author: 'igor zhirkov',
              inventory: 15
            }
        ]

        expect(result).toEqual(expected)
    })
}) 