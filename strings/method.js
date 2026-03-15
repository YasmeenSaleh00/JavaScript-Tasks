//Create two variables containing the strings `"Hello"` and `"World"`.
// Write code that combines them into one string with a space between them.
document.write("Task 1");
document.write('<br>');
let variableOne = "Hello";
let variableTwo ="Word";
document.write(variableOne.concat(" "+variableTwo));
document.write('<br>');
// Create a variable with the value `"JavaScript"`.
// Write code to find how many characters are inside the string.
document.write("Task 2");
document.write('<br>');
let variable = "JavaScript";
document.write(`The length for variable is ${variable.length}`);
document.write('<br>');
// Given the string "Programming", print only the first character.
document.write("Task 3");
document.write('<br>');
let text = "Programming" ;
document.write(text[0]);
document.write('<br>');
// From the string "coding is fun" extract the word "coding".g", print only the first character.
document.write("Task 4");
document.write('<br>');
let textTwo ="coding is fun";
document.write(textTwo.slice(0,6));
document.write('<br>');
// Given the string "cat", replace the letter "a" with "e".
document.write("Task 5");
document.write('<br>');
let cat = "cat";
document.write(cat.replace("a","e"));
document.write('<br>');
// Convert the string "javascript" to uppercase letters.
document.write("Task 6");
document.write('<br>');
let a = "javascript";
document.write(a.toUpperCase());
document.write('<br>');
// Convert the string "apple,banana,orange" into an array of fruits.
document.write("Task 7");
document.write('<br>');
let fruits = "apple,banana,orange";
let fruitsArray = fruits.split(",");
document.write(fruitsArray);
console.log(fruitsArray);
//Join Array into String Given the array:
// ```
// ["hello", "world"]
// ```
document.write("Task 8");
document.write('<br>');
let array= ["hello", "world"];
document.write(array.join(" "));
document.write('<br>');
//Join Array into String Given the array:
//Remove the extra spaces at the beginning and end of the following string:`
document.write("Task 9");
document.write('<br>');
let b= " hello world ";
document.write(b.trim());
document.write('<br>');
//Check if the word "world" exists inside the string "hello world".
document.write("Task 10");
document.write('<br>');
let c= "hello world";
document.write(c.includes("world"));
document.write('<br>');
//Reverse the following string:.
document.write("Task 11");
document.write('<br>');
let d= "hello";
document.write(d.split("").reverse().join(""));
document.write('<br>');
//Count how many times the letter "e" appears in the string "elephant".
document.write("Task 12");
document.write('<br>');
let f= "elephant";
let matchArray = f.matchAll("e");
document.write( f.matchAll("e"));
document.write('<br>');
//Palindrome Check
document.write("Task 13");
document.write('<br>');
let g= "racecar";
let m = g.split("").reverse().join("");
if(g === m){
    document.write("Yes its Palindrome");
  
}else{
      document.write(" its not Palindrome")
}

document.write('<br>');
//Capitalize Each Word
document.write("Task 14");
document.write('<br>');
let sentence = "hello world";
let words = sentence.split(" "); 
let result = [];
for (let word of words) {
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
}
document.write(result.join(" ")); 
document.write('<br>');
//Convert the number 1234.5678 so it shows only two decimal places.
document.write("Task 15");
document.write('<br>');
let number = 1234.5678;
document.write(number.toFixed(2));
document.write('<br>');
//Extract Numbers from String
document.write("Task 16");
document.write('<br>');
let mixed = "There are 3 apples and 2 oranges";
let numbers = mixed.match(/\d+/g);
document.write(numbers);
document.write('<br>');
//Check if the following string is a valid email format.
document.write("Task 17");
document.write('<br>');
let email = "example@email.com";
document.write(email.toLowerCase().endsWith("@email.com"));
document.write('<br>');
//Check if the following string is a valid email format.
document.write("Task 18");
document.write('<br>');
let sentenceTwo="This is a bad word";
document.writeln(sentenceTwo.replace("bad","good"));
document.write('<br>');
//Remove Duplicate Characters
document.write("Task 19");
document.write('<br>');
let sentenceThree="aabbc";
document.writeln(sentenceTwo);
document.write('<br>');