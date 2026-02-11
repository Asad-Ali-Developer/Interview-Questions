let arr = [1, 2, 3, 4, 5, 6, 7];

// const linearSearch = (arr, target) => {
//   let searchedFor;
//   let searchedForIndex;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       searchedFor = arr[i];
//       searchedForIndex = i;
//     }
//   }

//   return { searchedFor, searchedForIndex };
// };

const linearSearch = (arr, target) => {
  let searchedFor;
  let indexOfSearchedFor;

  // for(let num of arr) {
  //   if(num === target) {
  //     searchedFor = num
  //     indexOfSearchedFor = arr[num]
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num === target) {
      searchedFor = num;
      indexOfSearchedFor = i;
    }
  }

  return { searchedFor, indexOfSearchedFor };
};

console.log(linearSearch(arr, 7));
