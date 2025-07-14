const myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, is_read) {
  if (!new.target) {
    throw Error("Syntax error: initialise with 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.is_read = is_read;
  this.id = self.crypto.randomUUID();
}

Book.prototype.info = function () {
  string = `${this.title} by ${this.author}, ${this.pages} pages, `;
  string += this.is_read === true ? "read" : "not read yet";
  return string;
};

function addBookToLibrary(title, author, pages, is_read) {
  book = new Book(title, author, pages, is_read);
  myLibrary.push(book);
}

function addCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  const title = document.createElement("h2");
  title.textContent = `${book.title}`;
  const author = document.createElement("p");
  author.textContent = `${book.author}`;
  author.classList.add("italic");
  const details = document.createElement("p");
  details.textContent = `${book.pages} pages`;
  if (book.is_read === true) {
    card.classList.add("read");
  } else {
    card.classList.add("not-read");
  }
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(details);
  return container.appendChild(card);
}

function addBookButton() {
  const card = document.createElement("button");
  card.classList.add("card", "add");
  card.textContent = "Add Book";
  return container.appendChild(card);
}

function fillLibrary() {
  myLibrary.forEach((book) => {
    addCard(book);
  });
  addBookButton();
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 796, false);
addBookToLibrary("1984", "George Orwell", 368, true);
addBookToLibrary("The Handmaid's Tale", "Margaret Atwood", 311, true);

fillLibrary();
