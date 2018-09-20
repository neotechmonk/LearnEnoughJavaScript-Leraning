// @gokuvinoth
// 14-Sep-2018
// Math functionss

let numVal1 = 100.0;

console.log(numVal1.toString());
console.log(Math.PI);
console.log(Math.sqrt(numVal1));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// Dates and functions

let strVal1 = new String('dead man walking tall');
console.log(strVal1);
let strArray5 = new Array(strVal1.split(' '));
console.log(strArray5);

let dDate1 = new Date();
console.log(dDate1);
console.log(
  ` formatted date is :${dDate1.getDate()}-${dDate1.getMonth() +
    1}-${dDate1.getFullYear()}`
);
const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
console.log(`todays's weekday is ${daysOfTheWeek[dDate1.getDay()]}`);
// alert (`todays's weekday is ${daysOfTheWeek[dDate1.getDay()]}`);

const myBday = new Date('08/08/1988');
console.log(`My Birthday is :${myBday}`);
const moonLanding = new Date('July 20, 69 00:20:18');
moonLanding.setMilliseconds(123);

console.log((myBday - moonLanding) / 360);

// Regular Expressions

const postCode = new RegExp(/\d{4}/g);

console.log(!!postCode.exec('greenway act 2900 and 25666'));

let randStr =
  'welcome to ACT 2900 its the nice suburb with bonython as 2905 and also lake tuggers with 2903';

console.log(randStr.match(postCode));

let strval2 = 'String#match ZIP code 10118-0110 (the Empire State Building). ';
let strval3 = 'String#match';

let strArray6 = strval2.match(/\d{5}-\d{4}/);
console.log(strval2.split(/\d{5}-\d{4}/g));
console.log(strArray6);

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

console.log(sonnet.split(/\n+/));

//  basic plain objects

let userObj = {};

userObj.fName = 'V';
userObj.lName = 'inoth';

console.log(` full user is ${userObj}`);
console.log(` full user is ${userObj.fName}${userObj['lName']}`);
let uniques = {};
let words = sonnet.match(/\w+/g);
console.log(words);

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}
console.log(uniques);
