function meanderingArray(unsorted) {
  // Write your code here
  unsorted.sort((a, b) => a - b);
  return unsorted
    .reduce(
      (acc, val, i) => [...acc, unsorted[unsorted.length - i - 1], val],
      []
    )
    .splice(0, unsorted.length);
}

function meanderingArray(unsorted) {
  // Write your code here
  unsorted.sort((a, b) => a - b);
  const meandering = [];
  for (let i = 0; i < unsorted.length / 2; i++) {
    if (i === unsorted.length - 1 - i) {
      meandering.push(unsorted[i]);
    } else meandering.push(unsorted[i], unsorted[unsorted.length - 1 - i]);
  }
  return meandering;
}

meanderingArray([5, 2, 7, 8, -2, 25, 25]);

function getMin(s) {
  while (s.indexOf("()") !== -1) {
    s = s.replace("()", "");
  }
  return s.length;
}

getMin("())(()");
