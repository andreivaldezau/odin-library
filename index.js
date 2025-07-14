const myLibrary = [];

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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, true);
addBookToLibrary("The Brothers Karamazov", "Fyodor Dostoevsky", 796, false);
addBookToLibrary("1984", "George Orwell", 368, true);
addBookToLibrary("The Handmaid's Tale", "Margaret Atwood", 311, true);
