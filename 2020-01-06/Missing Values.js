// const missingValues = (arr) => {
//   const result = arr.reduce(
//     (acc, num) =>
//       num in acc ? { ...acc, [num]: acc[num] + 1 } : { ...acc, [num]: 1 },
//     {}
//   );

//   const sum = Object.keys(result).reduce(
//     (acc, val) =>{
  //      return result[val] === 1
  //         ? acc * Number(val) * Number(val)
//         : result[val] === 2
//         ? acc * Number(val)
//         : acc,}
//     1
//   );
//   return sum;
// };

const missingValues = (arr) => {
  const set = [...new Set(arr)];
  const sum = set.reduce((acc, val) => console.log(acc, val), 0);
};

missingValues([1, 1, 1, 2, 2, 3]); //18
