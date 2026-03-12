console.log("start");
function fun1(){
  setTimeout(
    console.log("macrotask")
  )  , 0
};
function promise(resolve,reject){
    resolve("rsolved")
}
console.log("end");