
//FreeCodeCamp Intermediate Algorithm Scripting


/*Sum All Numbers in a Range Complete 

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Math.max()
Math.min()
Array.prototype.reduce() */

function sumAll(arr) {
    var total = arr.reduce(function(a, b) {
      var addition = 0;
      var min = Math.min(a, b);
      var max = Math.max(a, b);
      for(var i = min + 1; i < max; i++) {
        addition += i;
      }
      return addition + min + max;
    });
    
    return total;
  }
  
  sumAll([1, 4]);



/*Diff Two Arrays Complete 

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
  
Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()  */

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    var arr1Filtered = arr1.filter(function (value){
       return arr2.indexOf(value) === -1;
     });
   
     var arr2Filtered = arr2.filter(function (value){
       return arr1.indexOf(value) === -1;
     });
   
   return arr1Filtered.concat(arr2Filtered);
  
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  

/*Roman Numeral Converter Complete 

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
  
Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join() */

function convertToRoman(num) {
    var result = [];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    
    numbers.map(function(number, i) { 
       while (num >= number) {
          result += roman[i];
          num -= number;
       }
    });
    
    return result;
}
  
convertToRoman(36);



/*Wherefore art thou Complete

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Global Object
Object.prototype.hasOwnProperty()
Object.keys() */

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    arr = collection.filter(function(obj) {
      for(var prop in source) {
        if(!obj.hasOwnProperty(prop) || obj[prop] !== source[prop]) {
          return false;
        }
      }
      return true;
    });
    
    // Only change code above this line
    return arr;
  }
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



/*Search and Replace Complete

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Array.prototype.splice()
String.prototype.replace()
Array.prototype.join() */

function myReplace(str, before, after) {
    
      if(before.substr(0, 1).toUpperCase() == before.substr(0, 1)) {
        after = after.substr(0, 1).toUpperCase() + after.substr(1);
      }
    
    var newStr = str.replace(before, after);
    
    return newStr;
}
  
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");



/*Pig Latin Complete 

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split() */

function translatePigLatin(str) {
    var strSplit = str.split("");
    var vowel = /[aeiou]/;
    
    if(str.substr(0, 1).match(vowel)) {
       return str  + "way";
    } 
    
    while(!strSplit[0].match(vowel)) {
       var letter = strSplit.shift();
       strSplit.push(letter);
    }    
    return strSplit.join("") + "ay";
  }
  
translatePigLatin("glove");



/*DNA Pairing Complete

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Array.prototype.push()
String.prototype.split() */

function pairElement(str) {
    var strArr = str.split("");
    var arr = [];
    
    for(var i = 0; i < strArr.length; i++) {
      switch(strArr[i]) {
        case "G":
          arr.push(["G","C"]);
          break;
        case "C":
          arr.push(["C","G"]);
          break;
        case "T":
          arr.push(["T","A"]);
          break;
        case "A":
          arr.push(["A","T"]);
          break;
      }
    }
    
    return arr;
}
  
pairElement("GCG");



/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

String.prototype.charCodeAt()
String.fromCharCode() */

/* var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charCode = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]; */

function fearNotLetter(str) {
  var strArr = str.split("");
  var letter;
  
  for(var i = 0; i < strArr.length - 1; i++) {
    if(str.charCodeAt(i + 1) !==  str.charCodeAt(i) + 1) {
       letter = str.charCodeAt(i) + 1;
       return String.fromCharCode(letter);
    }
  }
  
  return letter;
}

fearNotLetter("abce");



/* Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Boolean Objects */

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof bool == "boolean") {
    return true;
  }
  
  return false;
}

booWho(null);



/* Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Arguments object
Array.prototype.reduce() */

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var newArr = args.reduce(function(a, b) {
    return a.concat(b);
  });
  
  var unique = newArr.filter(function(el, index, self) {
    return index == self.indexOf(el);
  });
   
  return unique;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);



/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

RegExp
HTML Entities
String.prototype.replace() */

function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  
}

convertHTML("Dolce & Gabbana");



/* Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace() */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  return str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/\s+|_/g, "-").toLowerCase();
  
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");



/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remainder */

function sumFibs(num) {
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
          result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
      console.log(prevNumber, currNumber, result);
  }
  return result;
}

sumFibs(4);



/* Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

For Loops
Array.prototype.push() */

function sumPrimes(num) {
  var arr = [2];
  for(var i = 2; i <= num; i++) {
    if(i%2 !== 0) {
      arr.push(i);
    }
    for(var j = 0; j < arr.length - 1; j++) {
      if(arr[arr.length - 1]%arr[j] == 0) {
        arr.pop(arr);
      }
    }
  }
  
  return arr.reduce(function(a, b) {
    return a + b;
  });
  
}

sumPrimes(10);
sumPrimes(977);



/* Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Smallest Common Multiple */

function smallestCommons(arr) {
  var newArr = [];
  var min = arr.reduce(function(a, b) {
      return Math.min(a, b);
  });
  
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  
  for (var i = max; i >= min; i--){
    newArr.push(i);
  }
  
  var c = 0;
  function gcd(a, b){
      if(a%b!==0){
        gcd(b, a%b);
      }
      else {
        c = b;
      }
      return c;
  }
  
  var result = newArr[0];
  for(var j = 1; j < newArr.length; j++) {
    console.log(result, newArr[j]);
    result = (result * newArr[j]) / gcd(result, newArr[j]);
  }
  
  console.log(newArr, c);
  
  return result;

}

smallestCommons([1,5]);
    


/* Finders Keepers

Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Array.prototype.filter() */

function findElement(arr, func) {
  
  var el = arr.filter(function(el) {
    if(func(el)) {
      return el;
    }
  });
  
  return el[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });



/* Drop it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Arguments object
Array.prototype.shift()
Array.prototype.slice() */

function dropElements(arr, func) {
  // Drop them elements.
  while(!func(arr[0]) && arr.length > 0) {
    arr.shift();
  }
  
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
dropElements([1, 2, 3, 4], function(n) {return n > 5;});



/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Array.isArray() */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  
  (function roller(arr) {
    arr.forEach(function(item) {
      if(!Array.isArray(item)) {
        newArr.push(item);
      } else {
        roller(item);
      }
    });
  })(arr);
  
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);



/* Binary Agents

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

String.prototype.charCodeAt()
String.fromCharCode() */

function binaryAgent(str) {
  
  var strSplit = str.split(" ");
  
  return strSplit.map(function(num) {
    return String.fromCharCode(parseInt(num, 2));
  }).join("");
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



/* Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(obj) {
      return obj.hasOwnProperty(pre) && obj[pre];
  });
  
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");



/* Arguments Optional

Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Closures
Arguments object */

function addTogether() {
  
  var firstArg = arguments[0];
  
  if(arguments.length == 2) {
    
    if(typeof arguments[0] == "number" && typeof arguments[1] == "number") {
       return arguments[0] + arguments[1];
    }
    
  } else if (arguments.length == 1 && typeof arguments[0] == "number") {
    
    return function sumTwoAnd(num) {
      if(typeof num == "number") {
        return firstArg + num;
      }
    };
    
  }
  
}

addTogether(2,3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");

