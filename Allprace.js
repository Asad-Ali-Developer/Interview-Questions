// Reverse a string
const str = "facebook";

console.log("Reversed: ", str.split("").reverse().join(""));

// Remove Duplicates:
const arr = [1, 2, 3, 3, 5, 6, 9, 7];

const uniques = [...new Set(arr)];

console.log("Uniques: ", uniques);

// Flaten Array
const flatten = (arr) => arr.flat(Infinity);
console.log("Flatten: ", flatten(arr));

const obj = {
  name: "asad ali najaf",
};

// Deep Clone
const deepClone = (obj) => structuredClone(obj);
console.log("Deep Clone: ", deepClone(obj));

// To get most repeated number
const toGetMostRepeatedNumber = (arr) => {
  let count = {};
  let maxCount = arr[0];
  let maxNum = 0;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return { maxCount, maxNum };
};

console.log(toGetMostRepeatedNumber(arr));

// Get square of even numbers
const squaredEvenNumber = arr.flatMap((num) => {
  return num % 2 === 0 ? num * num : [];
});

// With map and filter

const squaredEvenNumbers = arr
  .filter((num) => num % 2 === 0)
  .map((num) => num * num);

console.log("Squared Even numbers: ", squaredEvenNumbers);

let number = 7;
console.log(["even", "odd"][number % 2]);

console.log(number & 1 ? "Odd number" : "Even number");

if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

console.log(1 < 2 < 3);
console.log(1 > 2 > 3);
console.log(1 < 2 && 2 < 3);
