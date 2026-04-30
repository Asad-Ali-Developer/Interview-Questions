const str = "hello world";

const removeDuplicateString = (str) => {
  let filtered = [];

  const arr = str.split("");

  for (let word of arr) {
    if (!filtered.includes(word)) {
      filtered.push(word);
    }
  }

  // return filtered.join("").replace(" ", "");
  return filtered.join("");
};

console.log("Filtered String", removeDuplicateString(str));
