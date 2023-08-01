function solution(note) {
  return note.replace(/\d|[a-j]/g, char => {
    return char >= 'a' && char <= 'j'
      ? String.fromCharCode(char.charCodeAt() - 'a'.charCodeAt() + '0'.charCodeAt())
      : String.fromCharCode(char.charCodeAt() - '0'.charCodeAt() + 'a'.charCodeAt());
  });
}

solution('you\'ll n4v4r 6u4ss 8t: cdja');

// (╯°□°)╯︵ ┻━┻
