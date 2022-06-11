import sumPairs from '@src/sumpairs'
import testCases, { TestCase } from '@tests/testcases'

const TIMEOUT: number = 1000

describe(`sumPairs function is correct`, () => {
  testCases.forEach((test: TestCase, index: number) => {
    describe(`Test Case ${index + 1}: sum ${test.sum}, array ${test.input}`, () => {
      let result: Array<Array<number>>
      beforeAll(() => {
        result = sumPairs(test.input, test.sum)
      }, TIMEOUT)

      it(`all elements should be a pair`, () => {
        const arrayLengths: Array<number> = result.map(expectedPair => expectedPair.length)
        const isPair = (length: number): boolean => length == 2
        const arePairs: boolean = arrayLengths.every(isPair)

        expect(arePairs).toBe(true)
      })

      it(`all elements in the pair should be present in original array`, () => {
        result.forEach(pair => {
          expect(test.input).toEqual(expect.arrayContaining(pair))
        })
      })

      it(`all elements in each array sum to ${test.sum}`, () => {
        const arraySums: Array<number> = result.map(x => x[0] + x[1])
        const isSame = (n: number): boolean => n == test.sum
        const areSameSum: boolean = arraySums.every(isSame)

        expect(areSameSum).toBe(true)
      })
    })
  })
})
