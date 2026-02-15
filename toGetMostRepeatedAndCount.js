// Array of most repeated number and its count
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9];

// const toGetMostRepeatedAndCount = (arr) => {
//   console.time("Parallel");
//   let count = {};
//   let maxCount = arr[0];
//   let maxNum = 0;

//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = num;
//     }
//   }

//   console.timeEnd("Parallel");

//   return { maxNum: maxNum, maxCount: maxCount };
// };


const toGetMostRepeatedNo = (arr) => {
  let count = {};
  let maxCount = arr[0];
  let maxNum = 0;

  for(let num of arr) { 
    count[num] = (count[num] || 0) + 1;

    if(count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return { maxNum: maxNum, maxCount: maxCount };
}

console.log(toGetMostRepeatedNo(arr));


// To Get most repeated number and its count
const toGetBigAndRepeatedNumber = (arr) => {
  let count = {};
  let maxCount = arr[0]
  let maxNum;
  
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    
    if(num > maxCount) {
      maxCount = count[num]
      maxNum = num
    }
  }
  
  
  console.log("Max Number: ", maxNum, "Max Count: ", maxCount)
}

toGetBigAndRepeatedNumber(arr)
