// @gokuvinoth
// 19-Sep-2018

let array1 = ['Curtin', 'north   Canberra', 'south canberra', 'lyons', ' '];
let array2 = [];
let removeSpaces = inarray => {
  inarray.forEach(val => {
    array2.push(
      val
        .toLowerCase()
        .split(/\s+/)
        .join('-')
    );
  });
  console.log(array2);
};
removeSpaces(array1);

// Map Array function
console.log(
  array1.map(val =>
    val
      .toLowerCase()
      .split(/\s+/)
      .join('-')
  )
);

// filter array MEthod
console.log(array1.filter(val => val.match(/[a-zA-Z]+\s+[a-zA-Z]+/g)));

// array reduce funxtions
let numArray = [1, 2, 3, 4];
console.log(
  numArray.reduce((totalCount, element) => {
    return (totalCount += element);
  }, 20)
);

console.log(
  array1.reduce((finalString, inString) => {
    return (finalString = finalString + inString.replace(/\s/g, '-'));
  })
);
