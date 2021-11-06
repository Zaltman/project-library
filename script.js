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

function haveReadStatus(e) {
  console.log(e.target.dataset.key);
  let index = e.target.dataset.key;
  if (myLibrary[index].isRead == true) {
    myLibrary[index].isRead = false;
    e.target.classList.remove('isReadBtnTrue');
    e.target.textContent = '☐';
    console.log('aina');
  } else {
    myLibrary[index].isRead = true;
    console.log(myLibrary[index].isRead);
    e.target.classList.add('isReadBtnTrue');
    e.target.textContent = '🗹';
  }

  // const info = getAttribute(e.target);
  // console.log(info);
  // const index = document.querySelector(
  //   `button[data-key='${e.target.dataset.key}']`
  // );
  // console.log(index);
}

function checkReadStatus(i) {
  if (myLibrary[i].isRead == true) {
    bookIsRead[i] = '🗹';
  } else bookIsRead[i] = '☐';
}
const bookPlace = document.querySelector('.booksGrid');
let bookN = [];
let bookIsRead = [];
let bookAuthor = [];
function createBookGrid() {
  for (let i = 0; i < myLibrary.length; i++) {
    bookN[i] = document.createElement('div');
    bookN[i].classList.add('bookTitle', 'book');
    bookN[i].textContent = myLibrary[i].title;

    myLibrary[i].index = i;
    checkReadStatus(i);
    // bookIsRead[i] = myLibrary[i].isRead;
    bookIsReadBtn = document.createElement('button');
    bookIsReadBtn.setAttribute('data-key', i);
    bookIsReadBtn.textContent = bookIsRead[i];
    bookIsReadBtn.classList.add('isReadBtn');
    bookIsReadBtn.addEventListener('click', haveReadStatus);
    bookAuthor[i] = document.createElement('div');
    bookAuthor[i].textContent = 'by ' + myLibrary[i].author;
    bookAuthor[i].classList.add('bookAuthor');
    console.log(bookAuthor[i]);
    bookPages = document.createElement('div');
    bookPages.classList.add('pages');
    bookPages.textContent = myLibrary[i].pages + ' pages.';

    bookPlace.appendChild(bookN[i]);
    bookN[i].appendChild(bookAuthor[i], bookPages);
    bookN[i].appendChild(bookPages);
    bookN[i].appendChild(bookIsReadBtn, bookPages);
  }
}
createBookGrid();

addBookBtn = document.querySelector('.addBook');
addBookBtn.addEventListener('click', promptBook);

// console.table(myLibrary);
// console.log(myLibrary.length);
