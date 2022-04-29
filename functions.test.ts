const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('correct array length', () => {
        expect(shuffleArray([0, 1, 2]).length).toBe(3)
    });

    test('array includes same elements', () => {
        expect(shuffleArray([0, 1, 2]).includes(0)).toBeTruthy()
        expect(shuffleArray([0, 1, 2]).includes(1)).toBeTruthy()
        expect(shuffleArray([0, 1, 2]).includes(2)).toBeTruthy()
    });
})