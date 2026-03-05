// //forEach loop 
// // scenario-1
// const nums=[10,20,30];
// let sum=0;
// nums.forEach(num => {sum+=num});
// console.log(sum);
// //scenario-2
// const colors=["white","yellow","red","black"];
// colors.forEach(function(color,index){
//     console.log(`color at ${index} is ${color}`);
// });
// //scenario-3 update objects in an array
// const users=[{name:"alice",active:false},{name:"bob",active:false},{name:"charlie",active:false}];
// console.log(users);
// users.forEach(function(user){
//     user.active=true;
// });
// console.log(users);
// //scenario-5 nested arrays
// const matrix = [[1,2],[3,4],[4,5]];
// matrix.forEach((row,rowindex)=>{
//     row.forEach((elements,colindex)=>{
//         console.log(elements);
//     });
// });
// --------------------------
// //map() - is designe to transform arrays. create new array with same original length.
// const mat=[[1,2,3],[1,2],[8]];
// mat.forEach((rowvalue,rowindex)=>{
//     console.log(rowvalue.map(num => num*2));
// })
// //flatMap()-flat()+map() - arraysize may be differ based on flatten values
// const words = ["hello", "world"];

// // Using map()
// const mapped = words.map(word => word.split(""));
// console.log(mapped);
// // [["h","e","l","l","o"], ["w","o","r","l","d"]]

// // Using flatMap()
// const flatMapped = words.flatMap(word => word.split(""));
// console.log(flatMapped);
// // ["h","e","l","l","o","w","o","r","l","d"]

// //filter() - create an array with array elements that pass a test
// const numbers=[20,40,7,9,77];
// const lastZerovalues=numbers.filter((num)=>{
//     return (num%10 === 0);
// })
// console.log(lastZerovalues);

//reduce() - create new array - taking 4 arguments - (initial value/previously returned value),(item value),(index),(array)
//mainly accept initial value - reduceRight()-works from right to left.
// const words=["my","country","is","india"];
// let sentence=words.reduce((sentence,word) => sentence+" "+word );
// console.log(sentence);

//every() - checks if all array elements pass a test if pass true else false
//const numss=[10,89,50]; //false
// const numss=[10,10] //true
// console.log(numss.every((num)=>{ return num <= 10})) 

//some() -checks if some array values pass a test if pass true else false

// const marks=[35,100,100,78,98];
// console.log(marks.some((num)=>{return num == 100}));

// //keys-only keys means indexes
// const nums=["alice","bob","charlie"]; 
// for(let key of nums.keys()){
//     console.log(key);
// }
// //entries()- keys along with values
// for(let [key,value] of nums.entries()){
//     console.log(key,value);
// }
// //with()-change the value at specific index -create new arrar
// const numsnew=nums.with(2,99);
// console.log(numsnew);
// console.log(nums)

// //spread(...)-expand value best for copy values
// const arr1=[1,2];
// const arr2=[23,89];
// const arr3=[...arr1,...arr2,100,89];
// console.log(arr3);

//rest(...) 
function positivevalues(...nums){
    return nums.filter((num)=>{return num >=0 })
}
console.log(positivevalues(1,2,0,-7.-9));