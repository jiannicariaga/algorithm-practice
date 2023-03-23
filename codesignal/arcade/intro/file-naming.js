function solution(names) {
  const newNames = [];
  names.forEach(name => {
    let count = 1;
    let uniqueName = name;
    while (newNames.includes(uniqueName)) uniqueName = `${name}(${count++})`;
    newNames.push(uniqueName);
  });
  return newNames;
}

solution(['doc', 'doc', 'image', 'doc(1)', 'doc']);
