// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
//Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  const arr = text.toLowerCase().split("");
  const result = arr.reduce(
    (acc, val) =>
      acc[val] ? { ...acc, [val]: acc[val] + 1 } : { ...acc, [val]: 1 },
    {}
  );
  return Object.values(result).filter((num) => num > 1).length;
}
