// @gokuvinoth
// 18/09/2018
// Functions

const square = val => {
  return val * val;
};

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

console.log(square(11));

let reverseString = inString => {
  return inString
    .split('')
    .reverse()
    .join('');
};

console.log(reverseString('vinoth😀'));

let betterReverseString = inString => {
  return Array.from(inString)
    .reverse()
    .join('');
};
console.log(betterReverseString('😀'));
// proper array sort function

let compareSort = (a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  } else {
    return 0;
  }
};

console.log([5, -4, 8, 7, -2, -44, -22, -5, -1, 1, 9, 5].sort(compareSort));

// for each iteration in Arrays
daysOfTheWeek.forEach(day => {
  console.log(day);
});

let dayName = dayVal => {
  return daysOfTheWeek[dayVal];
};

let createPalindrome = inString => {
  return inString
    .split('')
    .reverse()
    .join('');
};
