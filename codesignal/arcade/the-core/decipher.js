function solution(cipher) {
  let char = '';
  let deciphered = '';
  for (const i in cipher) {
    char += cipher[i];
    if (Number(char) >= 97 && Number(char) <= 122) {
      deciphered += String.fromCharCode(Number(char));
      char = '';
    }
  }
  return deciphered;
}

solution('10197115121');
