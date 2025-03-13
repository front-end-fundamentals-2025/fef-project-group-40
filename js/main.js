const buttonElement = document.getElementById("button");
const cartContainer = document.getElementById("cart-container");

const imgElement = document.createElement("img");
const h3Element = document.createElement("h3");
const paragraphElement = document.createElement("p");

cartContainer.appendChild(imgElement);
cartContainer.appendChild(h3Element);
cartContainer.appendChild(paragraphElement);

buttonElement.addEventListener("click", function (event) {
    // imgElement.src = "img/products/gold_ring.png"
    // h3Element.innerText = "Gold Center Diamond Ring"
    // paragraphElement.innerText = "399$"
})

// i dunno how to do this haha
// 1. add item to cart: store array thingy
// 2. if that thing is stored in the array,
// smth sees that and javascript creates element
// (the img+text in the shopping cart)


// const itemContainer = document.getElementById("cart-container");

// const paragraphElement = document.createElement("p");
// paragraphElement.innerText = "this is the paragraph";

// itemContainer.appendChild(paragraphElement);