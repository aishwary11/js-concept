// repeated
// reppeated

function maxOccurChar(str) {
  const charFreq = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) return str[i];
    charFreq[str[i]] = (charFreq[str[i]] || 0) + 1;
  }
  let maxChar = '';
  let maxFreq = 0;
  for (const [char, freq] of Object.entries(charFreq)) {
    if (freq > maxFreq) {
      maxChar = char;
      maxFreq = freq;
    }
  }
  return maxChar;
}
console.log(maxOccurChar('reppeated'));
console.log(maxOccurChar('repeated'));


// Sum = 10
// {1,2,3,8,9,0,7,12,15}

function sum(arr) {
  let arrSum = 10;
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === arrSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
}

console.log(sum([1, 2, 3, 8, 9, 0, 7, 12, 15]))









