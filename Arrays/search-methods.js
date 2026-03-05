const elements=["java","python","html","css","js","react","php",".net","python"];
//index-of - returns index of an element in an array
console.log(elements.indexOf("python")); // 1
console.log(elements.indexOf("ai")); // -1
//LastIndexOf - returns index of last occurence of element in an array
console.log(elements.lastIndexOf("python"));
//includes - it returns true or false checks if an element present or not
console.log(elements.includes("php")); // true
console.log(elements.includes("ML")); // fasle
//find() - it returns if it satisfies condition
console.log(elements.find(checkvalue));
function checkvalue(value,index,array){
    if(value === "python"){ //value === "ml" returns undefined.
       // return 0; // return undefined - if find() found falsy values(0,"",false..) it returns undefined and also for condition fails
        return "value"; //return element[index] if truthy values present in an array
    }
};
//findLast - same as find() but it checks from array end to start
console.log(elements.findLast(checkvalueLast));
function checkvalueLast(value,index,array){
    if(value === "php"){ //value === "ml" returns undefined.
       // return 0; // return undefined - if findLast() found falsy values(0,"",false..) it returns undefined and also for condition fails
        return "value"; //return element[index] if truthy values present in an array
    }
};
console.log(elements.findIndex(checkvalueI));
function checkvalueI(value,index,array){
    if(value === "python"){ //value === "ml" returns undefined.
       // return 0; // return undefined - if find() found falsy values(0,"",false..) it returns undefined and also for condition fails
        return "value"; //return element[index] if truthy values present in an array
    }
};
console.log(elements.findLastIndex(checkvalueIR));
function checkvalueIR(value,index,array){
    if(value === "python"){ //value === "ml" returns undefined.
       // return 0; // return undefined - if find() found falsy values(0,"",false..) it returns undefined and also for condition fails
        return "value"; //return element[index] if truthy values present in an array
    }
};

