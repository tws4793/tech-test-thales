import sumPairs from '@src/sumpairs'
import testCases, { TestCase } from '@tests/testcases'

const TIMEOUT: number = 1000
const shouldShowOutput: boolean = false

describe(`sumPairs function is correct`, () => {
  testCases.forEach((test: TestCase, index: number) => {
    const testCaseDescription: string
        = `Test Case ${index + 1}: sum ${test.sum}` +
          (shouldShowOutput ? `, array ${test.input}` : '')
    describe(testCaseDescription, () => {
      let result: Array<Array<number>>
      beforeAll(() => {
        const start = performance.now()
        result = sumPairs(test.input, test.sum)
        console.log('Time taken: ' + (performance.now() - start) + 'ms')
      }, TIMEOUT)

      it(`all elements should be a pair`, () => {
        const arrayLengths: Array<number> = result.map(expectedPair => expectedPair.length)

        arrayLengths.forEach(answer => {
          expect(answer).toEqual(2)
        })
      })

      it(`all elements in the pair should be present in original array`, () => {
        result.forEach(pair => {
          expect(test.input).toEqual(expect.arrayContaining(pair))
        })
      })

      it(`all elements in each array sum to ${test.sum}`, () => {
        const arraySums: Array<number> = result.map(x => x.reduce((a,b) => a + b, 0))

        arraySums.forEach(answer => {
          expect(answer).toEqual(test.sum)
        })
      })
    })
  })
})
