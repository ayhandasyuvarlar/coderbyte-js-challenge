function longestWord(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
      //step one =>  word =1 longest = 0  = true
      //step two =>  word =4 longest = 1 = true
      //step three =>  word =2 longest = 4  = false
      //step four =>  word =5 longest = 4  = true
      //step five =>  word =5 longest = 5  = false
      //out => early
    }
  }
  return longestWord;
}

console.log(longestWord("I woke up early today"));
