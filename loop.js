var arr = [1, 1, 1, 2, 3, 4, 2, 3, 1, 4, 5, 4];

// We know numbers are from 1 to 5, so check each one
// for (var num = 1; num <= 5; num++) {
//   var count = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     console.log(num + " => " + count);
//   }
// }

for (var num = 1; num <= 5; num++) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === num) {
      count++;
    }
  }

  if (count > 0) {
    console.log(num + "=>" + count);
  }
}

let arr2=[1,2,3,4,5,5,6,7,7,7,8,9]

console.log("Array length: ", arr2.length)

function mostRepeated(arr) {
  let count = {};
  let maxNum = arr[0];
  let maxCount = 0;

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    console.log("Count: ", count)
    if (count[num] > maxCount) {
      console.log("Counted: ", count[num])
      maxCount = count[num];
      maxNum = num;
    }
  }

  return { number: maxNum, count: maxCount };
}



function nostRepeated(arr) {

  let count = {};
  let maxCount = arr[0];
  let maxNum = 0;

  for (let num of arr){
    
  }

}


console.log(mostRepeated(arr2));
