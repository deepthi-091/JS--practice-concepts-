//arrow function
// const fun=()=>{
//     console.log(this);
// }
// fun(); //{} empty-object //node-js
//in browser -window object.
// const fun1=()=>{
//     // let a=10;
//     // console.log(a);
//     console.log(this.a); //undefined
// }
// fun1(); 
const fun2=()=>{
    let a=10;
    const b=()=>{
        return a; //undefined
      // return this.a; //undefined
    }
};
console.log(fun2()); 