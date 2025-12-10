// Отримуємо книги з localStorage або створюємо новий масив
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(book) {
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart)); // Зберігаємо в localStorage
    alert(`${book.title} added to your cart!`);
}

// Призначаємо обробник для всіх кнопок "Add to Cart"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const title = this.getAttribute('data-title');
        const img = this.getAttribute('data-img');
        const book = { title, img };
        addToCart(book);
    });
});
