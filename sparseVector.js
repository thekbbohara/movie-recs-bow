const vocabulary = ['i', 'love', 'pizza', 'and', 'pasta', 'burgers', 'but', 'don\'t', 'like'];

const vocabMap = {};
vocabulary.forEach((word, index) => {
  vocabMap[word] = index;
});

const comments = [
  "I love pizza and i love pasta",
  "I love burgers, but i don't like pasta"
];

const sparseVectors = [];

comments.forEach((comment) => {
  const words = comment.toLowerCase().split(" ");
  const sparseVector = {};

  words.forEach(word => {
    if (word in vocabMap) {
      sparseVector[vocabMap[word]] = (sparseVector[vocabMap[word]] || 0) + 1;
    }
  });

  sparseVectors.push(sparseVector);
});

console.log(sparseVectors);
