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


function ArrayChallenge(strArr) {
  let strOne = strArr[0]
  let strTwo = strArr[1]

  let singleStrings = strTwo.split(',')
  let answerWords = " "
  singleStrings.map((firstWords) => {
    let splitMainWordArray = strOne.split(firstWords)
    if (splitMainWordArray.length > 0) {
      splitMainWordArray.map(word => {
        let joinedWord = firstWords + word
        let reverseWord = [joinedWord].reverse().toString()
        if (joinedWord === strOne || reverseWord === strOne) {
          answerWords = "" + firstWords + "," + word + ""
        } else {
          return;
        }
      })
    }
  })

  return answerWords
}

// keep this function call here 
console.log(ArrayChallenge(readline()));


function StringChallenge(str) {
  let reqex = /[^\w+$+]/
  return str.split(reqex).map((item, index) => index !== 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item).join('')

}

// keep this function call here 
//console.log(StringChallenge(readline()));



function StringChallenge(str) {  //three numbers
  const words=str.split(' ');
  let isFinish =false;
  let index=0;
  let response=false;

  while((index<words.length && !isFinish)){
    //3 sayÄ± bir aradamÄ± kontrolÃ¼
    const areThreeNum=!!words[index].match(/\d{3}/g);
    const digits=words[index].replace(/\D/g, "");

    const hasThreeDigits=digits.length===3;

    const hasUniqueDigits=digits.replace(/(.)(?=.*\1)/g, "").length===3;

    if(areThreeNum || !hasThreeDigits || !hasUniqueDigits){
      isFinish=true;
    }
    index++;
  }

  if(!isFinish){
    response=true;
  }

  // code goes here  
  return response; 

}
   
// keep this function call here 
//console.log(StringChallenge(readline()));  

function MathChallenge(num1,num2) { 
  for(let i = num1 ; i>0; i--){
    if(num1%i== 0 && num2%i==0){
      return i
    }
  }
}

// keep this function call here 
//console.log(MathChallenge(readline()));


function ArrayChallenge(arr) {     //[1 , 2  , 3  , 4 , 5 , 6]
  let arrLength = arr.length
  let temp = new Array(arrLength);
  let k = 0
  let index = arr[0]
  for (let i = index; i < arrLength; i++) {
    temp[k] = arr[i]
    k++
  }
  for (let i = 0; i < index; i++) {
    temp[k] = arr[i]
    k++
  }

  for (let i = 0; i <arrLength; i++) {
    temp[i]
  }
  return temp.join('')
}

// keep this function call here 
//console.log(ArrayChallenge(readline()));