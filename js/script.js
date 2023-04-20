const openModal = document.querySelector(".add-button");
const CloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const main = document.getElementById("main");
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
  if (title.value === "" || author.value === "" || pages.value === "") return;
  const book = new Book(title.value, author.value, pages.value);

  library.push(book);
  console.log(book);
  console.log(library);

  clearInputs();
  closeInputs();
  appendNewBook();
});

function appendNewBook() {
  library.forEach((book) => {
    const article = document.createElement("article");
    article.classList.add("book");
    /* const div = document.createElement("div"); */
    const h2 = document.createElement("h2");
    h2.textContent = book.title;
    const p = document.createElement("p");
    p.classList.add("author");
    p.textContent = book.author;
    article.appendChild(h2);
    article.appendChild(p);
    const button = document.createElement("button");
    button.classList.add("close-button");
    button.innerText = "x";
    /* article.appendChild(div); */
    article.appendChild(button);
    const p2 = document.createElement("p");
    p2.textContent = book.title;
    article.appendChild(p2);

    main.appendChild(article);
  });
}
{
  /* <article class="book">
<h2>HTML and CSS HTML and CSS HTML and CSS</h2>
<p>Jon Duckett</p>
<p>255 Pages</p>
<button class="close-button">x</button>
</article>
 */
}
function clearInputs() {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function closeInputs() {
  modal.style.display = "none";
}
