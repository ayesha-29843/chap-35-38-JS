// write a function that display current time and date in your browser
function displayCurrentTime() {
            var date = new Date();
            var time = date.toLocaleTimeString();
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var dateString = date.toLocaleDateString(undefined, options);

            document.write('clock-display').innerHTML = dateString + ' - ' + time;
        }
        function startClock() {
            displayCurrentTime(); 
            setInterval(displayCurrentTime, 1000);
        }


//write a function that takes first and last name and then it greets the user using his full name in javascript

function greetUser(firstName, lastName) {
  var fullName = `${firstName} ${lastName}`;
  console.log (`Hello, ${fullName}!`);
}

//write a function that adds two numbers (input by user ) and return the sum of two numbers in javascript
 function addNumbers(num1, num2) {
            return num1 + num2;
        }
        function calculateSum() {
            var input1 = prompt("Enter the first number:");
            var input2 = prompt("Enter the second number:");
            var number1 = parseFloat(input1);
            var number2 = parseFloat(input2);
            if (!isNaN(number1) && !isNaN(number2)) {
                var sum = addNumbers(number1, number2);
                document.write("result").textContent = "The sum is: " + sum;
            } 
        }

//write a function that takes three argument num1 , num2 and operator and compute the desired operation. show the desired result in your browser in javascript

function computeOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

//write a function that takes three argument num1 , num2 and operator and compute the desired operation. show the desired result in your browser in javascript

function displayResult() {
    var num1 = parseFloat(document.write('num1').value);
    var num2 = parseFloat(document.write('num2').value);
    var operator = document.write('operator').value;
    if (isNaN(num1) || isNaN(num2)) {
        document.write('result').textContent = "Please enter valid numbers";
        return;
    }
    const result = computeOperation(num1, num2, operator);
    document.write('result').textContent = result;
}

//write a function that square its argument

function square(number) {
  return number * number;
}
// Example
// let result = square(3);
// console.log(`The square of 3 is ${result}`);

// write a function that computes factorial of a number in javascript
function factorialIterative(n) {
  if (n < 0) {
    return "Invalid input: Number must be non-negative.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
// Example
console.log(factorialIterative(5)); // Output: 120
console.log(factorialIterative(0)); // Output: 1
console.log(factorialIterative(-1)); // Output: Invalid input: Number must be non-negative.


//write a function that takes start and end numbers as in input and display counting in your browser
function displayCounting(start, end) {
    
    if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
        document.write("Invalid input: Please provide valid start and end numbers where start is less than or equal to end.");
        return;
    }
    document.write("<h2>Counting from " + start + " to " + end + ":</h2>");
    for (let i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

// Example 
displayCounting(1, 10);



//write a nested function that computes hypotenuse of a right angle triangle in javascript

function calculateHypotenuse() {
    function compute(perpendicular, base) {
        var p = Number(perpendicular);
        var b = Number(base);
        var hypotenuseSquared = Math.pow(p, 2) + Math.pow(b, 2);
        var hypotenuse = Math.sqrt(hypotenuseSquared);
        return hypotenuse.toFixed(2);
    }
    var perpendicularInput = prompt("Enter the length of the perpendicular:");
    var baseInput = prompt("Enter the length of the base:");
    if (!perpendicularInput || !baseInput || isNaN(perpendicularInput) || isNaN(baseInput)) {
        alert("Invalid input. Please enter valid numbers for both perpendicular and base.");
        return; // Exit the function if input is invalid
    }
    var result = compute(perpendicularInput, baseInput);
    alert(`The hypotenuse of the right-angle triangle is: ${result}`);
    console.log(`Perpendicular: ${perpendicularInput}, Base: ${baseInput}, Hypotenuse: ${result}`);
}


//write a function that calculates the area of a rectangle a=width * height pass width and height in following manner argument as variable arguments as variables in javascript

function calculateArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number' || width <= 0 || height <= 0) {
    console.error("Invalid input: width and height must be positive numbers.");
    return NaN; // Return 'Not a Number' for invalid input
  }
  return width * height;
}

// const area1 = calculateArea(10, 5);
// console.log(`Area of rectangle 1 (10x5): ${area1}`); // Output: Area of rectangle 1 (10x5): 50
// const rectWidth = 8;
// const rectHeight = 4;
// const area2 = calculateArea(rectWidth, rectHeight);
// console.log(`Area of rectangle 2 (8x4): ${area2}`); // Output: Area of rectangle 2 (8x4): 32
// const area3 = calculateArea("invalid", 10);
// console.log(`Area of rectangle 3: ${area3}`); // Output: Area of rectangle 3: NaN


//write a javascript function that checks whether a passed string is palindrome or not
function isPalindrome(str) {
  const sanitizedStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversedStr = sanitizedStr.split('').reverse().join('');
  return sanitizedStr === reversedStr;
}


//write a javascript function that accepts a string as a parameter and converts the first letter of each words of the string uppercase

function capitalizeWords(str) {
  var words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 0) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
  return words.join(' ');
}


//write a javascript function that accepts a string as a parameter and find the longest word with in the string
function findLongestWord(str) {
  var words = str.split(/\s+/);
  var longestWord = "";
  for (let i = 0; i < words.length; i++) {
    var currentWord = words[i];
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
  }
  return longestWord;
}


//write a javascript function that accepts two argument, a string and a letter and the function will count the number

function countLetter(inputString, letter) {
  var count = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === letter) {
      count++;
    }
  }

  return count;
}







