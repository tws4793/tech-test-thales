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
