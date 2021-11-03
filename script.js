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

function promptBook() {
  let title = prompt('What is the title of book?');
  let author = prompt('What is the author of book?');
  let pages = prompt('How many pages the book has?');

  title = new Book(title, author, pages);
  clearBookGrid();
  createBookGrid();
}

function clearBookGrid() {
  const bookGrid = document.querySelectorAll('.bookTitle');
  bookGrid.forEach((div) => div.remove());
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 195);
const Karateca = new Book('Altoriu seselis', 'Haroldo Fonseca Delgadillo', 261);
const Karateca1 = new Book('El  Karateca', 'Haroldo Fonseca Delgadillo', 361);
const Karateca2 = new Book(' Hígado ', 'Haroldo Fonseca Delgadillo', 461);
const Karateca3 = new Book(
  'Seseliu Balsas ',
  'Haroldo Fonseca Delgadillo',
  561
);

function readStatus() {
  if (this.textContent == 'false') {
    console.log('falsina');
    this.textContent = true;
    this.classList.add('isReadBtnTrue');
  } else {
    console.log('trueina');
    this.classList.remove('isReadBtnTrue');
    this.textContent = false;
  }
}

const bookPlace = document.querySelector('.booksGrid');
let bookN = [];
let bookIsRead = [];
function createBookGrid() {
  for (let i = 0; i < myLibrary.length; i++) {
    bookN[i] = document.createElement('div');
    bookN[i].classList.add('bookTitle', 'book');
    bookN[i].textContent = myLibrary[i].title;

    bookIsRead[i] = myLibrary[i].isRead;
    bookIsReadBtn = document.createElement('button');
    bookIsReadBtn.textContent = bookIsRead[i];
    bookIsReadBtn.classList.add('isReadBtn');
    bookIsReadBtn.addEventListener('click', readStatus);

    bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = myLibrary[i].pages + ' pages.';

    bookN[i].appendChild(bookPages);
    bookPlace.appendChild(bookN[i]);
    bookN[i].insertBefore(bookIsReadBtn, bookPages);
  }
}
createBookGrid();

addBookBtn = document.querySelector('.addBook');
addBookBtn.addEventListener('click', promptBook);

// console.table(myLibrary);
// console.log(myLibrary.length);
