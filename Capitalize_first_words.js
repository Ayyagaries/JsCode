function titleCase(str) {
 var arr = str.toLowerCase().split(" ");
  arr.forEach(function(item,i){

    item = item.replace(item.charAt(0),item.charAt(0).toUpperCase());
    arr[i] = item;

  });
  console.log(arr);
  return (str=arr.join(" "));
}

titleCase("I'm a little tea pot");


/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/
