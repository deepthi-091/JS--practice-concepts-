//let a=10; //undefined
// function fun(){
//    // let a=10;
//     console.log(a);//10
//     console.log(this.a); //undefined
//     console.log(this); //global window-object
// }
// fun(); 

//same in browser

function fun1(){
    let a=10;
    let b=function fun2(){
        console.log(this.a); //undefined
    }
    b();
}
fun1();