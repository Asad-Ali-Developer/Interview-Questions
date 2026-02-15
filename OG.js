const arr = [1, 2, 3, 4, 5, 4, 5, 6, 7];

// To filter the Unique numbers.
// Method 1
const removedRepeated = (arr) => {
  let unique = [];

  //   for (let num of arr) {
  //     if (!unique.includes(num)) {
  //       unique.push(num);
  //     }
  //   }

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  console.log("Unique Numbers: ", unique);
};

removedRepeated(arr);

// Method 2
const filteredRemovedDuplicates = [...new Set(arr)];
console.log("Filtered Removed Duplicates: ", filteredRemovedDuplicates);

// Method 3
const filteredDuplicates = (arr) => {
  return arr.filter((num, index) => arr.indexOf(num) === index);
};

console.log("Filtered Array: ", filteredDuplicates)

// -------------------------------------------------
//  To get most repeated numbers.
const toGetMostRepeatedNumber = (arr) => {
  let count = {};
  let maxCount = arr[0];
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    count[num] = (count[num] || 0) + 1;

    if (count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return { maxCount, maxNum };
};

console.log(toGetMostRepeatedNumber(arr));
