const arr = [-10, 15, -20, 25, 30, -5, 40];

const getNegativeNumbers = (arr) => {
  let negativeNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < arr[i] < 0) {
      negativeNumbers.push(arr[i]);
    }
  }

  return negativeNumbers;
};

console.log(getNegativeNumbers(arr));
