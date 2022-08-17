/*var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';
  } 
  else
  { 
  hour=12;
  prepand=' PM';
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);*/



//let $ = 1 ;
//let _ = 2 ;
//console.log($ + _);


//const MyBirthDay  =  '03-1-1998'; 
//console.log(MyBirthDay);

/* COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00

let message = `hello`;

console.log(message);*/

/*let name = "John";

// embed a variable
console.log( `Hello, ${name}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3*/
//let age = prompt('How old are you?', 100);

//console.log(`You are ${age} years old!`); // You are 100 years old!


/*let isBoss = confirm("Are you the boss?");

console.log( isBoss ); // true if OK is pressed*/

//let x = 100

//console.log(x= -x );
/*let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

 
console.log( 16** (1/2));

let s = "my " + "string";
console.log(s);


console.log( '2' + 1);

console.log( '1' + 1 + 1 );

console.log(1 + 1 + '2');*/


// No effect on numbers
/*let x = 1;
console.log( +x ); // 1

let y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0


let apple = '2';
let banana = '3';

console.log(apple + banana);*/


/*let n = 5;

n *= 3 + 5;

alert( n ); // 40  (right part evaluated first, same as n *= 8)*/

/*let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
console.log( counter ); // 1*/

/*let counter = 1;
let a = ++counter; // (*) changed ++counter to counter++

alert(a); // 1*/

/*let year = ('2015?');

if (year == 2015) {
  console.log( 'You guessed it right!' );
} else {
  console.log( 'How can you be so wrong?' ); // any value except 2015
}*/

/*let year = prompt(' publishe in', '');

if (year < 2015) {
  console.log( 'Too early...' );
} else if (year > 2015) {
  console.log( 'Too late' );
} else {
  console.log( 'Exactly!' );
}*/

/*let accessAllowed;
let age = ('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);
*/

/*let age = ('age?', 18);

let message = prompt(age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log( message );*/

/*let age = ('age' , 100) ;
 if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}*/

/*function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

// program to format the date
// get current  date
let currentDate = new Date();

// get the day from the date
let day = currentDate.getDate();

// get the month from the date
// + 1 because month starts from 0
let month = currentDate.getMonth() + 1;

// get the year from the date
let year = currentDate.getFullYear();

// if day is less than 10, add 0 to make consistent format
if (day < 10) {
    day = '0' + day;
}

// if month is less than 10, add 0
if (month < 10) {
    month = '0' + month;
}

// display in various formats
const formattedDate1 = month + '/' + day + '/' + year;
console.log(formattedDate1);

const formattedDate2 = month + '-' + day + '-' + year;
console.log(formattedDate2);

const formattedDate3 = day + '-' + month + '-' + year;
console.log(formattedDate3);

const formattedDate4 = day + '/' + month + '/' + year;
console.log(formattedDate4);

const date = new Date(2017, 2, 12, 9, 25, 30);
console.log(date);



let fruitlist = ['apple','banana','cherry'];*/


/*let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

//console.log( sum('apple', 2) ); // 3*/

/*


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <h1>User interface</h1>
    </header>

    <section class="container">
      <form id="my-form">
        <h1>Add User</h1>
        <div class="msg"></div>
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name">
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email">
        </div>
        <input class="btn" type="submit" value="Submit">
      </form>

      <ul id="users"></ul>

      <!-- <ul class="items">
        <li class="item">Item 1</li>
        <li class="item">Item 2</li>
        <li class="item">Item 3</li>
      </ul>
    </section> -->
    

    <script src="index.js"></script>
  </body>
</html>
*/














