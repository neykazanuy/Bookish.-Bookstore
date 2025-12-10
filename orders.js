const API_URL = 'http://localhost:8080/api/orders'; // Replace with your API URL
async function loadOrders() {
  try {
    const response = await fetch(API_URL);
    const orders = await response.json();
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '';
    if (orders.length === 0) {
      ordersList.innerHTML = '<p>No orders found.</p>';
    } else {
      orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `Order #${order.id} - Total: ${order.total} USD`;
        ordersList.appendChild(listItem);
      });
    }
  } catch (error) {
    console.error('Error loading orders:', error);
  }
}
window.onload = loadOrders;