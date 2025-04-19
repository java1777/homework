function spelling(word) {
  let result = [];
  let current = "";

  for (let i = 0; i < word.length; i++) {
    current += word[i];
    result.push(current);
  }

  return result;
}

console.log(spelling("bee"));
console.log(spelling("happy"));
console.log(spelling("eagerly"));