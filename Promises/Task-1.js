function loginUser(username) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: username }), 1000);
    });
}

function fetchCart(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Book", "Pen"]), 1000);
    });
}

function checkout(cart) {
    return new Promise(resolve => {
        setTimeout(() => resolve("Order placed!"), 1000);
    });
}

function applyDiscount(cart){
    return new Promise(resolve=>{
        setTimeout(resolve(["Book - 10% off","Pen - 5% off"]),1000)
    })
}

// TODO: Chain these promises together
loginUser("deepthi")
    .then(user => {
        console.log("user logged in:", user.name)
        return fetchCart(user.id);
    })
    .then(cart => {
        console.log("cart-items", cart);
        return applyDiscount(cart);
    })
    .then(discount => {
        console.log("discount for items:",discount);
        return checkout(discount)
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error("Error: ",error);
    })