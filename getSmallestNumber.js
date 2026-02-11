// Get Smallest Numbers

const arr = [3, 1, 9, 4, 5];

const getSmallestNumber = (arr) => {
  let smallestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) {
      smallestNumber = arr[i];
    }
  }

  return smallestNumber;
};

console.log(getSmallestNumber(arr));
