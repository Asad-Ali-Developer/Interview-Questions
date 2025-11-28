const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8];

const toGetOddNumbers = (arr) => {
  let oddNumbers = [];

  for (let num of arr) {
    if (num % 2 !== 0) {
      oddNumbers.push(num);
    }
  }

  return oddNumbers;
};

console.log(toGetOddNumbers(arr));
