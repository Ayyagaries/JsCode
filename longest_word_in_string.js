function findLongestWord(str) {

  var arr = str.split(" ");
  var longest_word = 0;
  arr.forEach(function(item,index){
       if(item.length > longest_word){
         longest_word = item.length;
       }

  });
   return longest_word;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
findLongestWord("May the force be with you") should return 5.
findLongestWord("Google do a barrel roll") should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.
