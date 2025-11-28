let arr = [1, 2, 3, 4, 5];

const linearSearch = (arr, target) => {
  let searchedFor;
  let searchedForIndex;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      searchedFor = arr[i];
      searchedForIndex = i;
    }
  }

  return { searchedFor, searchedForIndex };
};

console.log(linearSearch(arr, 5));
