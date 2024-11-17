function reverseNumber(num) {
  let reversedString = num.toString().split('').reverse().join('');
  let reversedNumber = parseInt(reversedString);
  console.log(reversedNumber);
}
reverseNumber(12345);
