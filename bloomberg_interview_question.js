function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let freqMap = {};
  for (let letter of s) freqMap[letter] = (freqMap[letter] || 0) + 1;
  for (let tLetter of t) {
    if (!freqMap[tLetter] || freqMap[tLetter] === 0) return false;
    else freqMap[tLetter]--;
  }
  return true;
}

function isAnagramMap(s, t) {
  if (s.length !== t.length) return false;
  const freqMap = new Map();
  for (let letter of s) freqMap.set(letter, (freqMap.get(letter) || 0) + 1);
  for (let tLetter of t) {
    if (!freqMap.has(tLetter) || freqMap.get(tLetter) === 0) return false;
    else freqMap.set(tLetter, freqMap.get(tLetter) - 1);
  }
  return true;
}

console.time("Object");
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("anagram", "nagaramt"));
console.timeEnd("Object");

console.time("Map");
console.log(isAnagramMap("anagram", "nagaram"));
console.log(isAnagramMap("anagram", "nagaramt"));
console.timeEnd("Map");