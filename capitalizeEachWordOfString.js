const str = "my name is asad";

const capitalizedEachWord = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Capitalized Each word: ", capitalizedEachWord);


// Output: Capitalized Each word: My Name Is Asad