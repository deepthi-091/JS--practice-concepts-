// array declaration

const arr=[10,30,"name"];
const arr1=[];
const arr2=new Array("ssb","aab","ggg");
//accessing
console.log(arr[0]);
//CHANGE
arr1[0]="fff";
console.log(arr);
//convert array to string using toString(); toString() doesnt modify oriinal array.
let str=arr.toString();
console.log(arr);
console.log(str);

//length of an array
console.log(arr.length);
//at()
console.log(arr.at(2));
//join()
console.log(arr.join(" * "));
//push() - add element at last
//pop() - remove last element.
arr.push("heloo");
console.log(arr.pop());
//shift() - remove first element of an array
console.log(arr);
console.log(arr.shift());
//unshift() - add element at first in an array
arr.unshift("unshift");
console.log(arr);
//delete() - remove element at particular position
console.log(arr);
delete arr[1];
console.log(arr); //delete element at particular position.
console.log(arr[1]); //the deleted item space will remain as undefined(shifting is not happen)
arr.push()
//concat() merge 2 arrays
console.log(arr.concat(arr2));
//slice() - returns a new array of slice items
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //from index 1 to 2 (end index is not included.)
const citrus2= fruits.slice(1); //from 1 to last index of an array.
console.log(citrus);
console.log(citrus2);
//splice(starting index,no.of.items should be remove,item1,item2..)-
console.log(fruits);
fruits.splice(2,2,"guava","grapes");
console.log(fruits);
