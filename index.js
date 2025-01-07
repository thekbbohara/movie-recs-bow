const vocabulary = ['i', 'love', 'pizza', 'and', 'pasta', 'burgers', 'but', 'don\'t', 'like']
const skeleton_vector = new Array(vocabulary.length).fill(0) 

const comments = [
  "I love pizza and i love pasta",
  "I love burgers but i don't like pasta"
]
const vectors = [];

comments.forEach((comment,i)=>{
  vectors[i] = [...skeleton_vector];
  const words = comment.toLowerCase().split(" ");
  words.forEach(word=>{
    const wordIndex = vocabulary.indexOf(word);
    if(wordIndex !== -1){
      vectors[i][wordIndex]++; 
      //vectors[i][wordIndex]=Number(Boolean(vectors[i][wordIndex]))+1; 
    }
  })
})
console.log(vectors)
