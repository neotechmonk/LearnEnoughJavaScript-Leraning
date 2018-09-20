// @gokuvinoth
// 13-Sep-2018
//Arrays

let strArray = 'ant bat cat'.split(' ');

console.log(strArray);

let strArray2 = 'emoclew'.split('');
console.log(strArray2);
strArray2.reverse();
console.log(strArray2.join(''));

let strArray3 = 'honey badger'.split('');
for (let i = 0; i < strArray3.length; i++) {
  // console.log(strArray3[i]);
}

console.log(strArray3[30]);
// console.log(strArray3[30].length); this will error
console.log(!strArray3[30]);
console.log(!!strArray3[30]);

// Array Slice

let numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numArray1);
console.log(numArray1.slice(3, numArray1.length));
console.log(numArray1.slice(-(numArray1.length - 3))); // using reverse stuff

console.log('ant bat cat'.slice(3, 7)); //string support slice as well

numArray1.reverse();
console.log(numArray1);

numArray1.sort();
console.log(numArray1);

// Array Push and pop methods

let strArray4 = ['one', 'two', 'three'];

console.log(strArray4);

console.log(strArray4.push('four'));
console.log(strArray4.push('blah'));
console.log(strArray4.pop());
console.log(strArray4.pop());
console.log(strArray4);
console.log(strArray4.unshift(1, 2, 3, 4));
console.log(strArray4);
console.log(strArray4.shift());
console.log(strArray4);
