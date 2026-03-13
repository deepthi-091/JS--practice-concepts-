const obj={
    username:"deepthi",
    id:101,
    work : function(){
        console.log(`name is ${this.username}`);
    },
    work2 : ()=>{
        console.log(`id is ${this.id}`);
    }
}

console.log(obj.username); //deepthi
console.log(obj.work()); //name is deepthi
console.log(obj.id); //101
console.log(obj.work2()); // undefined surrounding scope
//without this -> undefined