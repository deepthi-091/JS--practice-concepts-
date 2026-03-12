function loginUser(username){
    return new Promise(resolve =>{
        console.log("Welcome to home");
        setTimeout(()=>{resolve({id:1,name:username})},1000)
    })
}
function fetchCart(userId){
    return new Promise(resolve => {
        setTimeout(()=>{resolve(['book','pen'])},1000)
    })
}
function warnmsg(){
    return new Promise(resolve => {
        setTimeout(()=>{resolve("order placed")},1000);
    })
}
function message(cart){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("order placed successfully")
        },1000);
    })
}
async function showdata() {
    try{
        const user=await loginUser("deepthi");
        console.log("user logged in",user.name);

        // const cart=await fetchCart(user.id);
        // console.log("cart items :",cart);

        // const warn=await warnmsg(cart);
        // console.log(warn);

        //Promise.all
        const [cart, warn] = await Promise.all([fetchCart(user.id),warnmsg()]);
        console.log("cart items",cart);
        console.log("warning",warn);

        const msg=await message(cart);
        console.log(msg);
    }
    catch(error){
        console.log("Error is:",error)
    }
}
showdata();