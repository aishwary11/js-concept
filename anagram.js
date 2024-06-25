function anagram(words) {
  const anagrams = new Map();
  for (const word of words) {
    const sortedWord = word.split('').sort().join('');
    if (anagrams.has(sortedWord)) {
      anagrams.get(sortedWord).push(word);
    } else {
      anagrams.set(sortedWord, [word]);
    }
  }
  return Array.from(anagrams.values());
}
console.log(anagram(["eat", "ate", "done", "tea", "soup", "node"]));