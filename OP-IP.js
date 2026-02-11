// -------  Closure -------

const outerFn = () => {
  let count = 5;

  return (innerFn = () => {
    count++;
    console.log("Count: ", count);
  });
};

const closure = outerFn();
closure();
closure();
closure();
closure();

// ------ Find is even or odd with conditional statements

const number = 2;
console.log(["even", "odd"][number % 2]);
// ["even", "odd"][if it return 0] then it means it's value will be "even".

//  Important Logice
const isLoggedIn = true;
console.log(["Guest", "User"][+isLoggedIn]);
console.log(["Guest", "User"][+true]); // +true === 1 and here in this "User" is on the index 1.

// Bitwise: It will conver the number & 1 into binary like 101 & 001 if (truthy)
// 1 it will be odd then even here
console.log(number & 1 ? "Odd number" : "Even number");

//  -------- Logical Operators ---------
console.log(1 < 2 < 3);
console.log(1 > 2 > 3);
console.log(1 < 2 && 2 < 3);

// --------- Debounce ---------

const debounce = (fn, delay) => {
  let timer;

  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...arg), delay);
  };
};

//  Get squares of Even Numbers
const arr = [1, 2, 3, 4, 5, 6, 6, -1, -2];

const squaredEvenNumbers = arr.flatMap((num) =>
  num % 2 === 0 ? num * num : [],
);

const squaredEvenNumbersSecond = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * num);

console.log("Squared Even Numbers: ", squaredEvenNumbers);
console.log("Squared Even Numbers 2: ", squaredEvenNumbersSecond);

// To find most repetitive number.
const toGetMostRepeatedNumber = (arr) => {
  let count = {};
  let maxNum = arr[0];
  let maxCount;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxNum) {
      maxNum = num;
      maxCount = count[num];
    }
  }

  console.log("Max Number: ", maxNum);
  console.log("Max Count: ", maxCount);
};

toGetMostRepeatedNumber(arr);

//  Find Postive Numbers from Array
const positiveNumbers = arr.flatMap((num) => (num > 0 ? num : []));
console.log("Positive Numbers: ", positiveNumbers);

// Remove duplicates from Array
const removedDuplicatedArray = arr
  .filter((num, index) => arr.indexOf(num) === index)
  .flatMap((num) => (num > 0 ? num : []));
console.log("Removed Duplicate Numbers: ", removedDuplicatedArray);

//  Flatter the Array
const arrayToFlat = [1, [2, [3, 4]], 5];

const flattenArray = (arr) => arr.flat(Infinity);

const flattedArray = flattenArray(arrayToFlat);

console.log("Flatten Array: ", flattedArray);

//  Find Second Largest Number Using Set which is most perfect.
const findSecondLargestNum = (arr) => {
  const unqiue = [...new Set(arr)].sort((a, b) => b - a);

  console.log(unqiue[1]);
};

findSecondLargestNum(arr);

// Remove Duplicates From Array after Optima Geeks Selection

const removeDuplicates = (arr) => {
  const filtered = [];

  // Perfect
  // for(let num of arr) {
  //   if(!filtered.includes(num)) {
  //     filtered.push(num)
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!filtered.includes(num)) {
      filtered.push(num);
    }
  }

  console.log("Filtered Array: ", filtered);
};

removeDuplicates(arr);
