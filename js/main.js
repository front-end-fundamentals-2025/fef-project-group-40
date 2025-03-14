// const cartContainer = document.getElementById("cart-container");

// const imgElement = document.createElement("img");
// const h3Element = document.createElement("h3");
// const paragraphElement = document.createElement("p");



// buttonElement.addEventListener("click", function (e) {
//     imgElement.src = "img/products/gold_ring.png"
//     h3Element.innerText = "Gold Center Diamond Ring"
//     paragraphElement.innerText = "399$"

//     cartContainer.appendChild(imgElement);
//     cartContainer.appendChild(h3Element);
//     cartContainer.appendChild(paragraphElement);
// });

// i dunno how to do this haha
// 1. add item to cart: store array thingy
// 2. if that thing is stored in the array,
// smth sees that and javascript creates element
// (the img+text in the shopping cart)


// const itemContainer = document.getElementById("cart-container");

// const paragraphElement = document.createElement("p");
// paragraphElement.innerText = "this is the paragraph";

// itemContainer.appendChild(paragraphElement);


/*  */

const buttonElement = document.getElementById("button");
const removeButtonElement = document.getElementById("remove-button");

const productNameElement = document.getElementById("cart-product-name");
const productPictureElement = document.getElementById("cart-product-picture");
const productPriceElement = document.getElementById("cart-product-price");

// // localstorage

// buttonElement.addEventListener("click", function (e) {
//     // let productName = "Gold Center Diamond Ring";
//     // let productPicture = img/;
//     // let productPrice = "399$";
//     productNameElement.innerText = "Gold Center Diamond Ring";
//     productPriceElement.innerText = "399$";
//     productPictureElement.scr = "img/products/gold_ring.png";
// });

// removeButtonElement.addEventListener("click", function (event) {
//     productNameElement.innerText = "No Items";
//     productPriceElement.innerText = "0$";
//     productPictureElement.scr = "";
// });


/* */

// Help from ChatGPT based on my code: "he" developed it
// https://chatgpt.com/share/67d40c5d-1ddc-8007-98da-87350dc2d8ed


buttonElement.addEventListener("click", function () {
    const product = {
        name: "Gold Center Diamond Ring",
        price: "399$",
        image: "img/products/gold_ring.png"
    };

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(product));

    // Update UI
    productNameElement.innerText = product.name;
    productPriceElement.innerText = product.price;
    productPictureElement.src = product.image;
});

document.addEventListener("DOMContentLoaded", function () {
    const savedProduct = localStorage.getItem("cart");

    if (savedProduct) {
        const product = JSON.parse(savedProduct);
        productNameElement.innerText = product.name;
        productPriceElement.innerText = product.price;
        productPictureElement.src = product.image;
    }
});

removeButtonElement.addEventListener("click", function () {
    // Clear localStorage
    localStorage.removeItem("cart");

    // Reset UI
    productNameElement.innerText = "No Items";
    productPriceElement.innerText = "0$";
    productPictureElement.src = "";
});