//login
function loginUser(username){
    return new Promise(resolve => 
        setTimeout(()=> resolve({id:1,name:username}),1000)
    );
}

//cart item
function fetchCart(userId){
    return new Promise(resolve => {
        setTimeout(()=>{resolve(["book","pen","eraser"])},1000)
    });
}

//discount
function applyDiscount(cart){
    return new Promise(resolve => {
        setTimeout(()=>{resolve(["book - 2%off"])},1000)
    })
}
//message-1
function warnmsg(cart){
    return new Promise(resolve => {
        setTimeout(()=>{resolve(("see offers and order"))},2000)
    }
    )
}
//order
function checkout(cart){
    return new Promise(resolve => {
        setTimeout(resolve(("order placed..")),1000);
    })
}

async function showdata(){
    try{
        const user=await loginUser("deepthi");
        console.log("user logged in",user.name);

        const cart=await fetchCart(user.id);
        console.log("cart items:",cart);

        const discount=await applyDiscount(cart);
        console.log("discount per item:",discount);

        const warn=await warnmsg(cart);
        console.log(warn);
        console.clear();

        const message=await checkout(cart);
        console.log(message);
    }
    catch(error){
        console.log("Error",error)
    }

}
showdata();