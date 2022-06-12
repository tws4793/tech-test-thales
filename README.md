# Thales Interview - Software Engineer (NPI)

This repository contains the response to the technical interview question.

## Question

To find all the pairs of two integers in an unsorted array that sum up to a given S. Write a program using any programming language. Please specify in comments inside your program the language used (Eg. Java, C++, C#, etc).

For example, if the array is `[5, 4, -3, 1, 2, 9]` and the sum is 6. Your program should return `[[5,1], [4,2], [-3,9]]` because $5+1=6$, $4+2=6$ and $-3+9=6$.

## Answer

Response in TypeScript:

```typescript
const sumPair = (integers: Array<number>, sum: number): Array<Array<number>> => {
  let output: Array<Array<number>> = []
  const map: any = {}

  integers.forEach((item: number, index: number) => {
    const difference: number = sum - item

    if(map.hasOwnProperty(difference)){
      output.push([difference,item])
    }

    map[item] = index
  })

  return output
}
```

The algorithm uses the hashing method. It checks in the map whether the difference of the sum and the current item exists; if it does, it pushes to the output, otherwise it is recorded in the map of integers that have been observed by the loop.

The algorithm has $O(n)$ time complexity, as we are looping through the array of integers.
