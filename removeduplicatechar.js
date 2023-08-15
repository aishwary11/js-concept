const input = 'teeeessssssts';
const output = 'tts';
let result = '';
let temp = '';
for (let i = 0; i < input.length; i++) {
    if (input[i] !== temp && input[i + 1] !== input[i]) {
        result += input[i];
        temp = input[i];
    } else temp = input[i];
}
console.log(result);
