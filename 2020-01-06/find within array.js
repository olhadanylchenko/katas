const trueIfEven = function (v, i) {
  return v % 2 === 0;
};
const neverTrue = function (v, i) {
  return false;
};
const trueIfValueEqualsIndex = function (v, i) {
  return v === i;
};
const trueIfLengthEqualsIndex = function (v, i) {
  return v.length === i;
};

const findInArray = function (array, iterator) {
  let result = -1;
  for (let i = 0; i < array.length; i++) {
    if (iterator(array[i], i)) {
      return (result = i);
    }
  }
  return result;
};

console.log(findInArray([1, 3, 5, 6, 7], trueIfEven));
