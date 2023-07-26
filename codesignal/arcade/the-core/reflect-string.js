function solution(inputString) {
  return inputString.split('').map(c => String.fromCharCode('z'.charCodeAt() - c.charCodeAt() + 'a'.charCodeAt())).join('');
}

solution('name');
