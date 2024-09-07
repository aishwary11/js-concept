const input = 'teeeessssssts';
const output = 'tts';
let result = '', prev = '';
for (const char of input) {
    if (char !== prev) result += char;
    prev = char;
}
console.log(result);