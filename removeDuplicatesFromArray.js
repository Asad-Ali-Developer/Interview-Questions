const arr = [1, 2, 2, 3, 4, 4, 5];

// By New Set
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray);

// By Filter Method
const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
console.log(removeDuplicates(arr));

// By Reduce Method
const removeDuplicatesUsingReduce = (arr) => {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
};
console.log(removeDuplicatesUsingReduce(arr));

const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniqueArr.includes(arr[i])) {
    uniqueArr.push(arr[i]);
  }
}

console.log(uniqueArr);

const removeDuplicated = (arr) => {
  let filteredArray = [];

  for (let num of arr) {
    if (!filteredArray.includes(num)) {
      filteredArray.push(num);
    }
  }

  console.log("Filtered Array: ", filteredArray);
};

removeDuplicated(arr);

const removeSeen = (arr) => {
  const seen = {};
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (!seen[elem]) {
      seen[elem] = true;
      filtered.push(elem);
    }
  }

  console.log("Filtered: ", filtered);
};

removeSeen(arr);


//  Again Practice for Life time
const removeDuplicatesFromArray = (arr) => {

  const removedDuplicates = []

  for(let i = 0; i < arr.length; i ++) {
    let num = arr[i]

    if(!removedDuplicates.includes(num)){
      removedDuplicates.push(num)
    }
  }

  console.log("Last filtered array: ", removedDuplicates)

}

removeDuplicatesFromArray(arr)