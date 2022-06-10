import sumPairs from '@src/sumpairs'
import testCases from './sumpairs.json'

type TestCase = {
  input: Array<number>;
  sum: number;
};

describe('sumPairs function is correct', () => {
  testCases.forEach((test: TestCase) => {
    const result: Array<Array<number>> = sumPairs(test.input, test.sum)

    it.todo('elements should be a pair')
    it.todo('elements in the pair should be present in original array')
    it.todo('elements in each array sum to n')
  })
})
