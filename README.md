# js-for-react-native-11299043

STUDENT ID: 11299043

TASK 1: A file arrayManipulation.js was created.
A function processArray() is created that takes an array of number as an argument and it returns 
a new array where an even number is squared and an odd number is tripled.I used element as a parameter 
for the function.

 Using an if statement, I gave a condition that if an element in the array is divisible by 2 ,
 it is squared using the Math.pow(element , 2), squaring the element.
 If the element is not divisible by 2 , the element is tripled using the Math.pow(element, 3) tripling
 the number.


 TASK 2: Another function formatArrayStrings() is created with parameters strings and numbers.
 This functions takes two arrays as arguments(an array of numbers processed by processArray and 
 an array of strings with the same length). This function modifies each stri based on its
 corresponding number; it capitalise the string if the number is even and converts string to
 lowercase if the number is odd.
 Using a return statement into an arrow function and using the map function with parameter
 (str, index), we create an if statement with the condition that if the index of the number 
 is divisible by 2, string is capitalized using str.toUpperCase, else if the index is not 
 divisible by 2, string is converted to lowercase using str.tolowercase.


 TASK 3:A file userInfo.js was created. A function createUserProfiles that takes an array of modified 
 names froem task 2 and returnss an array of objectss , each containing originalName, modifiedName, and
 id (auto-incremented starting from 1).
 Using the map function into an arrow function