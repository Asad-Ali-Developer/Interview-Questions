const arr = [-10, 15, -20, 25, 30, -5, 40];

const findPositiveNumbers = (arr) => {
  let positiveNumbers = [];

  for (let num of arr) {
    if(num > 0){
        positiveNumbers.push(num)
    }
  }

  return positiveNumbers;
};

console.log(findPositiveNumbers(arr));
