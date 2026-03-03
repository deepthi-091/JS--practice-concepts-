// //  //object creation
// // const obj={firstname:"marubathula",lastname:"deepthi",designation:"full-stack-developer"};
// // console.log(obj.firstname) //dot notation
// // obj["firstname"] //bracket notation

// //  // object creation having functions as values

// // const obj1={name:"deepthi",results:getresult()};
// // function getresult(name){ console.log(this.name +"you are passed")};

// // console.log(obj1.results); 

// //  // doubt //
// // this keyword
// const obj2={name:"deepu",getname:function(){return this.name;}};
// let n= obj2.getname();
// console.log(n);

// const person={name:"deepu",age:22};
// console.log(person);
// person.age = 21;
// console.log(person);
// person.country = "india";
// console.log(person);

// delete person["age"];
// console.log(person)

// console.log("age" in person)
// console.log("name" in person)

// //nested object

// myobj = {
//     name:"d", age:30,
//     mycars:{
//         car1:"ford",
//         car2:"BMW"
//     }
// }

// console.log(myobj.mycars)

// // display object

//const details={name:"ram",age:20,country:"india"};
// for in loop
// for(let x in details){
//     console.log(details[x]);
// }
// // object.values()
//console.log(Object.values(details));
// for(let x of Object.values(details)){
//     if(x == "ram"){
//         console.log(x);
//     }
// }
//Object.entries()
//console.log(Object.entries(details));

//for(let [key , value] of Object.entries(details)){
//    console.log(details[key])
//}

// // constructor function

// function Person(name,age){
//     this.name=name;
//     this.age = age;
//     this.country="india"}
// const father=new Person("ramana",50);
// const mother=new Person("savithri",40);
// console.log(father);
// console.log(mother);

//task-1 constructor function 
function Student(name,age,marks){
    this.name=name;
    this.age=age;
    this.marks=marks;
}
Student.prototype.getInfo = function(){
        return  `Name: ${this.name}, Age: ${this.age} , Marks: ${this.marks}`};
Student.prototype.getGrade=function(){
    if(this.marks >= 90 ) return "A";
    else if(this.marks >= 75) return "B";
    else if(this.marks >=50) return "C";
    else return "F";
}
Student.prototype.updateMarks=function(newmarks){
    this.marks=newmarks;
}

const student1=new Student("deepu",21,60);
const student2=new Student("yash",23,90);
const student3=new Student ("likhi",21,80);

console.log(student1.getInfo(), "|" ,student1.getGrade());
console.log(student2.getInfo(),"|",student2.getGrade());
console.log(student3.getInfo(),"|",student3.getGrade());

student1.updateMarks(90);
console.log(student1.getInfo());

let count=0;
