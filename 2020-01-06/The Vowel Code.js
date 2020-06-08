function encode(string) {
  switch (string) {
    case a:
      return 1;
    case o:
      return 2;
    case i:
      return 3;
    case o:
      return 4;
    case u:
      return 5;
    default:
      return;
  }
}

function decode(string) {
  return;
}
k;

const decode = (str) => {
  const arr = str.split("");

  let result = str;
  for (let elem of arr) {
    if (Object.values(vowels).includes(Number(elem))) {
      result = result.split(elem).join(Object.keys(vowels)[Number(elem) - 1]);
    }
  }
  return result;
};
