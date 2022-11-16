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

function fizzBuzz(num) {
  let res = "";
  let i = 1;
  for (i; i <= num; i++) {
    if (i % 15 == 0) {
      res += " FizzBuzz ";
    } else if (i % 3 == 0) {
      res += " Fizz ";
    } else if (i % 5 == 0) {
      res += " Buzz ";
    } else {
      res += i + " ";
    }
  }
  return res;
}
console.log(fizzBuzz(15));

function FirstReverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
  // code goes here
}
// console.log('HelloWorld')

function LetterCapitalize(str) {
  let newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] =
      newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1).toLowerCase();
  }
  return newStr.join(" ");
}

console.log(LetterCapitalize("my name is ayhan"));
