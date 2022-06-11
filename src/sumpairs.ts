/**
 * sumpairs.ts
 */

/**
 * Finds the pair of sums that are equal to the expected sum.
 *
 * @param integers - array of integers
 * @param sum - expected sum
 * @returns an array of pairs of sums that are equal to the expected sum
 *
 * @example
 * For an unsorted array `[5, 4, -3, 1, 2, 9]` with sum 6,
 * it should return `[[5,1],[4,2],[-3,9]] because these pairs
 * add up to 6.
 */
const sumPair = (integers: Array<number>, sum: number): Array<Array<number>> => {
  let output: Array<Array<number>> = []

  for(let i = 0; i < integers.length; i++){
    for(let j = i + 1; j < integers.length; j++){
      if(integers[i] + integers[j] === sum){
        output.push([integers[i], integers[j]])
      }
    }
  }

  return output
}

export default sumPair
