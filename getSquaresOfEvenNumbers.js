let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----------- (Method 1) Using flatMap -----------

// const squaredEvenNumbers = arr.flatMap((num) => {
//   return num % 2 === 0 ? num * num : [];
// });

// console.log(squaredEvenNumbers);

// ----------- (Method 2) Using for...of loop -----------

const getSquaresOfEvenNumbers = (arr) => {
  let squaredEvenNumbers = [];

  for(let num of arr){
    if(num % 2 === 0){
      squaredEvenNumbers.push(num * num);
    }
  }
  return squaredEvenNumbers;
}

console.log(getSquaresOfEvenNumbers(arr));

//  ------------ (Method 3) Using the map() and filter() methods -----------

// const squaredEvenNumbers = arr
//   .filter((num) => num % 2 === 0)
//   .map((evenNum) => evenNum * evenNum);

// console.log(squaredEvenNumbers);
