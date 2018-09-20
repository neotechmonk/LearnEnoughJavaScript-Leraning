// @gokuvinoth
// 10-Sep-2018
// String Exercises

let str = '';
str = "It's not easy being green";
console.log(`value in str is : ${str}`);

console.log('testing \t showing tab space and \n new line');

// string concatenation and Interpolation

console.log('foo' + 'bar');
console.log(`foo bar 11+12`);
console.log(`${11 + 12}`);

let fName = 'Vin oth';
let lName = 'Pan neer Sel vam';

console.log(fName + ' ' + lName);
console.log(`My first name is ${fName}`);
function callClickFunction() {
  document.getElementById('demo').innerHTML = Boolean(10 > 9);
  console.log(document.getElementById('inputVal'));
}

// Booleans

let strLength = str.length;
console.log(` the length of the string is : ${strLength}`);

console.log(` this is correct ${strLength > 0}`);
console.log(` this is wrong ${strLength == 25}`);
console.log(`this is wrong as well ${strLength == 0}`);
console.log(`this is correct ${strLength === 0}`);

let password = 'foobar';
if (password.length < 6) {
  Console.log('password is too short');
} else {
  console.log('password is long enough');
}

console.log(`check the boolean valueof password ${password.length === 0}`);

console.log(
  `check the negate value boolean valueof password ${!(password.length === 0)}`
);

console.log(
  `check the double negate or bang bang value boolean valueof password ${!!(
    password.length === 0
  )}`
);

// String Methods

let userName = fName.toLowerCase() + lName.toLowerCase();
console.log(` user name from firstname and last name is : ${userName}`);

while (userName.includes(' ')) {
  userName = userName.replace(' ', '');
}

console.log(` user name from firstname and last name is : ${userName}`);

// string iteration

for (let i = 0; i < str.length; i++) {
  // console.log(str.charAt(i));
}

let strICount = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === 'e') {
    strICount += 1;
  }
  // console.log(str.charAt(i));
}

console.log(` total e's in string is ${strICount}`);
