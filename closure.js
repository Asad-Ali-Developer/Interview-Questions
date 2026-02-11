// const outerFn = () => {
//     var a = 100;

//     const innerFn = () => {
//         console.log("hoisting: ", a)
//     }

//     return innerFn;
// }

function outerFn(){
  let a = 1;

  function innerFn(){
    a++
    console.log("Value: ", a)
  }

  return innerFn
}


const closure = outerFn();

closure();
closure();
closure();
closure();
closure();