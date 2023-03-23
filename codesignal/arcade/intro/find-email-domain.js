function solution(address) {
  const domain = address.slice(address.indexOf('@') + 1);
  return domain.includes('@') ? solution(domain) : domain;
}

solution('prettyandsimple@example.com');
