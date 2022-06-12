import testCases from './sumpairs.json'

export type TestCase = {
  input: Array<number>;
  sum: number;
};

const noMockTestCases = 15
const sizeMockTestCases = 10000
const minNumber = -100
const maxNumber = 100

/**
 * Returns an array of integers that are randomised
 *
 * @param min - minimum value of the integer
 * @param max - maximum value of the integer
 * @returns a random number
 */
const generateRandomNumber = (min: number = 0, max: number = 10): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const randomNumber: number = Math.random() * (max - min + 1) + min
  return Math.floor(randomNumber)
}

/**
 * Returns an array of integers that are randomised
 *
 * @param size - the size of the array
 * @param min - minimum value of the integer
 * @param max - maximum value of the integer
 * @returns an array of integers
 */
const generateIntegers = (size: number, min: number, max: number): Array<number> => Array.from({length: size}, () => generateRandomNumber(min, max))

/**
 * Returns a new mock test case
 *
 * @param size - the size of the array
 * @param min - minimum value of the integer
 * @param max - maximum value of the integer
 * @returns a mock test case
 */
const generateTestCase = (size: number, min: number, max: number): TestCase => ({
  'input': generateIntegers(size, min, max),
  'sum': generateRandomNumber(min, max)
})

const generateMockTestCases: Array<TestCase> = Array.from({length: noMockTestCases}, () => generateTestCase(sizeMockTestCases, minNumber, maxNumber))
testCases.push(...generateMockTestCases)

export default testCases
