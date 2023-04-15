const openModal = document.querySelector(".add-button");
const CloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

openModal.addEventListener("click", (add) => {
  modal.style.display = "flex";
});

CloseModal.addEventListener("click", (add) => {
  modal.style.display = "none";
});

addBookBtn.addEventListener("click", (add) => {
  event.preventDefault();
  const book = new Book(title.value, author.value, pages.value);
  clearInputs();
  closeInputs();
  console.log(book);
  console.log(library);
});

function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function closeInputs() {
  modal.style.display = "none";
}
