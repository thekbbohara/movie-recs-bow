# BAG OF WORDS

## Recommendation System using bag of words.
## Movie Recommendation System.

---
### **MVP To-Do List**

- [ ] Create a small dataset of movies (title, genres, or descriptions).  
- [ ] Tokenize text data (split into words).  
- [ ] Build a vocabulary of unique words.  
- [ ] Represent each movie as a Bag of Words vector (word frequency or binary presence).  
- [ ] Implement cosine similarity to compare vectors.  
- [ ] Input: A single liked movie.  
- [ ] Compute similarity scores between the input movie and all others.  
- [ ] Sort and return the top N similar movies.  
- [ ] Test the recommendations on your dataset.  

---

```bash
mkdir data && curl -L -o ./data.zip https://www.kaggle.com/api/v1/datasets/download/rounakbanik/the-movies-dataset && unzip -d data ./data.zip && rm data.zip
```
