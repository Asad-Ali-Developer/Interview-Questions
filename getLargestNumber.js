let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7, 8, 9];

const getLargestNumber = (arr) => {
  let large = 0;
  let largeNumIndex = 0

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < large){
        large = arr[i];
        largeNumIndex = i
    }
  }

  return {largeNum: large, largeNumIndex: largeNumIndex};
};

console.log(getLargestNumber(arr));
