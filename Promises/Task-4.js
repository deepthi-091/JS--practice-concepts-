function welcome(username){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("welcome",username);
        },1000)
    })
}
function checkout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.5){
                resolve("order successfully");
            }
            else{
                reject("order failed contact owner.")
            }
        })
    }) 
}

async function order() {
    try{
        const user=await welcome("deepthi");
        console.log(user);

        const message=await checkout();
        console.log(message); //resolve
    }
    catch(e){
        console.log("catch block:",e); //reject
    }
}
order();