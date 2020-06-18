//https://www.codewars.com/kata/51e056fe544cf36c410000fb

// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
// Assumptions:

//     A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
//     Matches should be case-insensitive, and the words in the result should be lowercased.
//     Ties may be broken arbitrarily.
//     If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

const topThreeWords = (s) => {
  const cleanText = s
    .toLowerCase()
    .replace(/'\B|[^a-z'? ]/g, ` `)
    .split(" ");
  const count = cleanText
    .filter((e) => e)
    .reduce(
      (acc, val) =>
        acc[val] ? { ...acc, [val]: acc[val] + 1 } : { ...acc, [val]: 1 },
      {}
    );
  return Object.keys(count)
    .sort((a, b) => count[b] - count[a])
    .splice(0, 3);
};

topThreeWords("won't", "wont");
