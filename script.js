let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = false;
  this.info =
    this.title + ' by ' + this.author + ', ' + this.pages + ' pages long';
  this.addBookToLibrary();
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 195);
const Karateca = new Book('Altoriu seselis', 'Haroldo Fonseca Delgadillo', 261);
const Karateca1 = new Book('El  Karateca', 'Haroldo Fonseca Delgadillo', 361);
const Karateca2 = new Book(' Hígado ', 'Haroldo Fonseca Delgadillo', 461);
const Karateca3 = new Book(
  'Seseliu Balsas ',
  'Haroldo Fonseca Delgadillo',
  561
);

const bookPlace = document.querySelector('.booksGrid');
let bookN = [];
for (let i = 0; i < myLibrary.length; i++) {
  bookN[i] = document.createElement('div');
  bookN[i].classList.add('bookTitle', 'book');
  bookN[i].textContent = myLibrary[i].title;
  bookPages = document.createElement('div');
  bookPages.classList.add('pages');
  bookPages.textContent = myLibrary[i].pages + ' pages.';
  bookN[i].appendChild(bookPages);
  bookPlace.appendChild(bookN[i]);
}

console.table(myLibrary);
console.log(myLibrary.length);
