let a="let-global";
const b="const-global";
var c="var-global";
// console.log(a);
// console.log(b);
// console.log(c);  //success(let,const,var)
{
    let d="let-block";
    const e="const-block";
    var f="var-block";
    //acessing local variable-block scope
    console.log(d,e,f); //success
    //accessing globalscope in blockscope
    console.log(a,b,c); //success

}
function functionscope(){
    let g="let-function";
    const h="const-function";
    var i="var-function";
    // //accessing function-scope
    // console.log(g,h,i); //success
    // //accessing globalscope in functionscope
    // console.log(a,b,c); //success
}
functionscope();
// //accessing globalscope
// console.log(a,b,c);
//accessing function scope
// console.log(g);//reference error
// console.log(h);//reference error
// console.log(i);//reference error
//accessing block scope
// console.log(f); // success - blockscope but it is var
// console.log(d); // error - blockscope but it is let
// console.log(e); // error - blockscope but it is const
