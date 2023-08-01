function solution(ver1, ver2) {
  ver1 = ver1.split('.').map(Number);
  ver2 = ver2.split('.').map(Number);
  for (const i in ver1) {
    if (ver1[i] > ver2[i]) return true;
    if (ver1[i] < ver2[i]) return false;
  }
  return false;
}

solution('1.2.2', '1.2.0');
