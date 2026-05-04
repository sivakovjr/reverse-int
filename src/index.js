module.exports = function reverse(n) {
  const positiveNumber = Math.abs(n);
  const reversedString = positiveNumber.toString().split('').reverse().join('');
  return Number(reversedString);
};
