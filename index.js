let myLibrary = [];
const container = document.querySelector(".container");

function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("Syntax error: initialise with 'new' operator");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = self.crypto.randomUUID();
}

Book.prototype.info = function () {
  string = `${this.title} by ${this.author}, ${this.pages} pages, `;
  string += this.isRead === true ? "read" : "not read yet";
  return string;
};

function addBookToLibrary(title, author, pages, isRead) {
  book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

function addCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (book.isRead === true) {
    card.classList.add("read");
  } else {
    card.classList.add("not-read");
  }

  const title = document.createElement("h2");
  title.textContent = `${book.title}`;
  const author = document.createElement("p");
  author.textContent = `${book.author}`;
  author.classList.add("italic");
  const details = document.createElement("p");
  details.textContent = `${book.pages} pages`;
  const controls = document.createElement("div");
  controls.classList.add("controls");

  const toggleIsRead = document.createElement("button");
  toggleIsRead.textContent = "Toggle Read";
  toggleIsRead.addEventListener("click", () => {
    const id = card.dataset.id;
    myLibrary.forEach((book) => {
      if (book.id === id) {
        book.isRead = !book.isRead;
      }
    });
    if (book.isRead === true) {
      card.classList.add("read");
      card.classList.remove("not-read");
    } else {
      card.classList.add("not-read");
      card.classList.remove("read");
    }
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    const id = card.dataset.id;
    myLibrary = myLibrary.filter((book) => {
      return book.id !== id;
    });
    card.remove();
  });

  card.setAttribute("data-id", `${book.id}`);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(details);
  card.appendChild(controls);
  controls.appendChild(toggleIsRead);
  controls.appendChild(removeBtn);
  return container.appendChild(card);
}

function addBookButton() {
  const card = document.createElement("button");
  card.classList.add("card", "add");
  card.textContent = "Add Book";
  return container.appendChild(card);
}

function toggleReadStatus(element) {}

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
