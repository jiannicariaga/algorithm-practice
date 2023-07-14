function solution(maxLength, text) {
  const words = text.match(/[a-zA-Z]+/g);
  return !words ? 0 : words.filter(word => word.length <= maxLength).length;
}

solution('The Fox asked the stork, \'How is the soup ?\'');
