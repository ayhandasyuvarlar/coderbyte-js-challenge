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

// console.log(LetterCapitalize("my name is ayhan"));

function PrimeTime(num) {
  if (num < 2) return false;
  if (num !== Math.ceil(num)) return false;
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

//  console.log(PrimeTime(4))

function BitwiseOne(strArr) {
  let str1 = strArr[0];
  let str2 = strArr[1];
  let newStr = "";
  len = str1.length;
  for (let i = 0; i < len; i++) {
    if (!str1.charAt(i) === "1" || str2.charAt(i) === "1") {
      newStr = newStr += "1";
    } else {
      newStr = newStr += "0";
    }
  }
  return newStr;
}

// console.log(BitwiseOne(["100", "000"]));
function CheckNums(num1, num2) {
  if (num2 > num1) {
    return true;
  } else if (num1 == num2) {
    return -1;
  } else {
    return false;
  }
}
//console.log(CheckNums(3, 122))
