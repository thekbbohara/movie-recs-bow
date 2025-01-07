const vocabulary = ['i', 'love', 'pizza', 'and', 'pasta', 'burgers', 'but', 'don\'t', 'like'];

const vocabMap = {};
vocabulary.forEach((word, index) => {
  vocabMap[word] = index;
});

const skeleton_vector = new Array(vocabulary.length).fill(0);

const comments = [
  "I love pizza and i love pasta",
  "I love burgers, but i don't like pasta"
];

const vectors = [];

comments.forEach((comment, i) => {
  vectors[i] = [...skeleton_vector];
  const words = comment.toLowerCase().split(" ");
  
  words.forEach(word => {
    if (word in vocabMap) {
      vectors[i][vocabMap[word]]++;
    }
  });
});

console.log(vectors);
