function solution(name) {
  const invalidChars = /[`!@#$%^&*()+\-=[\]{};':"\\|,.<>/?~\s]/;
  return isNaN(name[0]) && !invalidChars.test(name);
}

solution('var_1__Int');
