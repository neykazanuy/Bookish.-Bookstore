const API_URL = 'http://localhost:8080/books'; // Replace with your API URL
async function loadBooks() {
try {
const response = await fetch(API_URL);
console.log(response)

} catch (error) {
console.error('Error loading books:', error);
}
}
window.onload = loadBooks;


    function goToLibrary() {
      window.location.href = "library.html"; // або твоя справжня сторінка бібліотеки
    }