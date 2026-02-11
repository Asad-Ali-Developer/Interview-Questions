let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9];

// const getLargestNumber = (arr) => {
//   let largeNum = 0;

//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] > largeNum) {
//       largeNum = arr[i];
//     }
//   }

//   return largeNum;
// }



const getLargestNumber = (arr) => {
  let largestNum = 0;

  for(let num of arr){
    if(num > largestNum){
      largestNum = num
    }
  }

  return largestNum;
}

console.log("Largest Num: ", getLargestNumber(arr))
