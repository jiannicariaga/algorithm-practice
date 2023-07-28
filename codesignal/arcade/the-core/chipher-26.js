function solution(message) {
  const decryptedMessage = [];
  let sum = 0;
  for (let i = 0; i < message.length; i++) {
    const nextChar = (message[i].charCodeAt() - 'a'.charCodeAt() + 26 - sum) % 26;
    decryptedMessage.push(nextChar);
    sum = (sum + nextChar) % 26;
  }
  return decryptedMessage.map(char => String.fromCharCode(char + 'a'.charCodeAt())).join('');
}

solution('taiaiaertkixquxjnfxxdh');
