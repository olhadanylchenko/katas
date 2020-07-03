//Data Transformations

//Sometimes we need to transform an array into an object.
//The following example uses reduce to transform an array that contains colors into a hash:

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  },
  {
    id: "ryhbhsl",
    title: "banana",
    rating: 1,
  },
];

const hashColors = colors.reduce(
  (hash, { id, title, rating }) => ({ ...hash, [id]: { title, rating } }),
  {}
);

console.log(hashColors);

//RECURSION

// const countdown = (value, fn) => {
//     fn(value);
//     return value > 0 ? countdown(value - 1, fn) : value;
//   };

//   countdown(10, value => console.log(value));

const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(() => countdown(value - 1, fn, delay), delay)
    : value;
};

const log = (value) => console.log(value);
countdown(10, log);

//Recursion is a good technique for searching data structures.
//You can use recursion to iterate through subfolders until a folder that contains only files is identified.
//You can also use recursion to iterate though the HTML DOM until you find an element that does not contain any children.
//In the next example, we’ll use recursion to iterate deeply into an object to retrieve a nested value:

const dan = {
  type: "person",
  data: {
    gender: "male",
    info: {
      id: 22,
      fullname: {
        first: "Dan",
        last: "Deacon",
      },
    },
  },
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split(".");
  console.log(remaining.join("."), first, ":", object[first]);
  return remaining.length
    ? deepPick(remaining.join("."), object[first])
    : object[first];
};

deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"
