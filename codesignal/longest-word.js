function solution(text) {
  const words = text.match(/[a-zA-Z]+/g);
  const maxLength = Math.max(...words.map(word => word.length));
  for (const w of words) if (w.length === maxLength) return w;
}

solution('Ready, steady, go!');
