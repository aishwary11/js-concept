function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let result = '';
  for (let char of str) {
    if (vowels.includes(char)) {
      const nextVowel = (vowels.indexOf(char) + 1) % vowels.length;
      result += vowels[nextVowel];
    } else {
      result += char;
    }
  }
  return result;
}

console.log(replaceVowels("you are a senior software developer"));