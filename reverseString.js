
 function reverseString(str) {
   var arr = str.split(" ");
  arr.forEach(function(item,index){
     arr[index] = arr[index].split("").reverse().join("");
  });

    if(arr.length>1){
     str = arr.reverse().join(" ");
   }
   str = arr.join(" ");

   return str;

}

console.log(reverseString("Greetings from Earth"));
