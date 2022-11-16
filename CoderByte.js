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

//console.log(NumberSearch("Hello Wo3231rld13"));

function userValidation(str) {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.charAt(0)) &&
    /^\w+$/.test(str) &&
    /[a-zA-Z0-9]/.test(str.charAt(str.length - 1))
  ) {
    return true;
  } else {
    return false;
  }
}
//console.log(userValidation("u_hello_world123"));
