// functional declaration
//functional declaration are hoisted (at top of execution)
console.log(calculate_area(10,10));
function calculate_area(length,width){
    return length*width;
}

//functional expressions
const calculatearea= function(len,wid){return 2*(len+wid)};
console.log(calculatearea(10,20));

//arrow functions

const calculatesqrarea=(side)=>{return side*side};
console.log(calculatesqrarea(5));

//default parameters

const greetuser=(name="guest") => `hello ${name}!`;
console.log(greetuser("deepthi")) //user value be printed

console.log(greetuser()); //default value be printed.

//rest parameters
//used to operation on arrays or group of values
//reduce(accumulator,currentvalue => accoumulator+currentvalue,initial_value);
function resparam(...count){
    return count.reduce((total_count,n)=> total_count + n,0);
};

console.log(resparam(1,1,1,1,1,1,1,1,1,1,1));

//callback functions

function greetusername(name=Callback()){
    return `hello ${name}`;
};

const Callback=(name)=>{return "guest";};

console.log(greetusername()); //default it call callback function // in callback function i return guest;
console.log(greetusername("deepu")); //it avoid default value 

//