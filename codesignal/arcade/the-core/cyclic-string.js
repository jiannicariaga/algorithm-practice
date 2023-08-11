function solution(s) {
  const isSubstring = (a, b) => {
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== a[i % a.length]) return false;
    }
    return true;
  };
  s = s.split('');
  for (let j = 1; j < s.length; j++) {
    if (isSubstring(s.slice(0, j), s.slice(j))) return j;
  }
  return s.length;
}

solution('cabca');
