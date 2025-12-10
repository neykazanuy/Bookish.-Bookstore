function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Ваш кошик порожній.</p>";
        document.getElementById("cart-actions").style.display = "none";
        return;
    }

    cart.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.classList.add("cart-item");
        itemEl.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.img}" width="80" height="100" alt="${item.title}">
                <span class="cart-title">${item.title}</span>
            </div>
        `;
        cartContainer.appendChild(itemEl);
    });
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}

function placeOrder() {
    window.location.href = "checkout.html"; 
}

displayCart();
