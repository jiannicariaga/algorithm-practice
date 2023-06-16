function solution(startTag) {
  return `</${startTag.slice(1, startTag.indexOf(' '))}>`;
}

solution('<button type=\'button\' disabled>');
