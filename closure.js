// const outerFn = () => {
//     var a = 100;

//     const innerFn = () => {
//         console.log("hoisting: ", a)
//     }

//     return innerFn;
// }

function outerFn() {
  var a = 100;
  function innerFn() {
    a++;
    console.log("Hoisting: ", a);
  }
  return innerFn;
}

var fn = outerFn();
var fn1 = outerFn();
fn1();
fn();
fn();
fn();
fn();
fn();
fn1();
fn1();
fn1();
