const buttonElement = document.getElementById("button");
const removeButtonElement = document.getElementById("remove-button");

const productNameElement = document.getElementById("cart-product-name");
const productPictureElement = document.getElementById("cart-product-picture");
const productPriceElement = document.getElementById("cart-product-price");

// https://chatgpt.com/share/67d40c5d-1ddc-8007-98da-87350dc2d8ed
// ChatGPT code based on code I've written myself
// +furtherdeveloped from a problem i discovered from earlier JS

//  Check if the "Add to Cart" button exists before using it
if (buttonElement) {
    buttonElement.addEventListener("click", function () {
        const product = {
            name: "Gold Center Diamond Ring",
            price: "399$",
            image: "img/products/gold_ring.png"
        };

        localStorage.setItem("cart", JSON.stringify(product));

        // If on cart page, update UI immediately
        if (productNameElement) {
            productNameElement.innerText = product.name;
            productPriceElement.innerText = product.price;
            productPictureElement.src = product.image;
        }

        // Redirect to cart page (optional)
        window.location.href = "cart.html";
    });
}

//  On the cart page, load saved data when the page opens
document.addEventListener("DOMContentLoaded", function () {
    const savedProduct = localStorage.getItem("cart");

    if (savedProduct && productNameElement) {
        const product = JSON.parse(savedProduct);
        productNameElement.innerText = product.name;
        productPriceElement.innerText = product.price;
        productPictureElement.src = product.image;
    }
});

// Check if the "Remove" button exists before using it
if (removeButtonElement) {
    removeButtonElement.addEventListener("click", function () {
        localStorage.removeItem("cart");

        // Reset UI
        productNameElement.innerText = "No Items";
        productPriceElement.innerText = "0$";
        productPictureElement.src = "/img/icons/empty-set.png";
    });
}