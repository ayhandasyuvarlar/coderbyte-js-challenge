function NumberSearch(str) {
  let numberArr = /[0-9]/;
  let letterArr = /[a-zA-Z]/;
  let number = 0;
  let letter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(numberArr)) {
      number += parseInt(str[i]);
    } // number = 3+2+3+1...
    if (str[i].match(letterArr)) {
      letter++;
    } // letter = 10
  } // number / letter = 1.6545646..
  return Math.round(number / letter); //1
}

console.log(NumberSearch("Hello Wo3231rld13"));
