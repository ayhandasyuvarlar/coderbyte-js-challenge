function FirstReverse(str) {
  let answer = "";
  let strLength = str.length;
  let i;

  for (i = strLength; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}

console.log(FirstReverse("Hello, My name is Ayhan"));
