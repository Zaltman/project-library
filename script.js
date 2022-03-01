function libraryAppLoad() {
  let myLibrary = [];

  let booksGrid = document.createElement('div');
  booksGrid.classList.add('booksGrid');

  let addBookBtn = document.createElement('button');
  addBookBtn.classList.add('addBook');
  addBookBtn.textContent = 'Add 📖';

  let body = document.querySelector('body');
  body.appendChild(booksGrid);
  body.appendChild(addBookBtn);

  class Book {
    constructor(title, author, pages) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isRead = false;
      this.info =
        this.title + ' by ' + this.author + ', ' + this.pages + ' pages long';

      this.addBookToLibrary();
    }
  }

  Book.prototype.addBookToLibrary = function () {
    myLibrary.push(this);
  };

  function promptBook() {
    let title = prompt('What is the title of book?');
    let author = prompt('What is the author of book?');
    let pages = prompt('How many pages the book has?');
    if (title == null || author == null || pages == null) return;

    title = new Book(title, author, pages);
    clearBookGrid();
    createBookGrid();
  }

  function clearBookGrid() {
    const bookGrid = document.querySelectorAll('.bookTitle');
    bookGrid.forEach((div) => div.remove());
  }

  const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 195);
  const Karateca = new Book(
    'Altoriu seselis',
    'Haroldo Fonseca Delgadillo',
    261
  );
  const Karateca1 = new Book('El  Karateca', 'Haroldo Fonseca Delgadillo', 361);
  const Karateca2 = new Book(' Hígado ', 'Haroldo Fonseca Delgadillo', 461);
  const Karateca3 = new Book(
    'Seseliu Balsas ',
    'Haroldo Fonseca Delgadillo',
    561
  );

  function removeBook(e) {
    let index = e.target.dataset.key;
    myLibrary.splice(index, 1);
    clearBookGrid();
    createBookGrid();
  }

  function haveReadStatus(e) {
    let index = e.target.dataset.key;
    if (myLibrary[index].isRead == true) {
      myLibrary[index].isRead = false;
      e.target.classList.remove('isReadBtnTrue');
      e.target.textContent = '☐';
    } else {
      myLibrary[index].isRead = true;
      e.target.classList.add('isReadBtnTrue');
      e.target.textContent = '🗹';
    }
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
      bookBottomContainer = document.createElement('div');
      bookBottomContainer.classList.add('bookBottomContainer');

      bookIsReadBtn = document.createElement('button');
      bookIsReadBtn.setAttribute('data-key', i);
      bookIsReadBtn.textContent = bookIsRead[i];
      bookIsReadBtn.classList.add('isReadBtn');
      bookIsReadBtn.addEventListener('click', haveReadStatus);

      bookRemoveBtn = document.createElement('button');
      bookRemoveBtn.setAttribute('data-key', i);
      bookRemoveBtn.textContent = '🗑️';
      bookRemoveBtn.classList.add('trashBtn');
      bookRemoveBtn.addEventListener('click', removeBook);

      bookAuthor[i] = document.createElement('div');
      bookAuthor[i].textContent = 'by ' + myLibrary[i].author;
      bookAuthor[i].classList.add('bookAuthor');
      bookPages = document.createElement('div');
      bookPages.classList.add('pages');
      bookPages.textContent = myLibrary[i].pages + ' pages.';

      bookPlace.appendChild(bookN[i]);
      bookN[i].appendChild(bookAuthor[i], bookPages);
      bookN[i].appendChild(bookPages);
      bookN[i].appendChild(bookBottomContainer, bookPages);
      bookBottomContainer.append(bookRemoveBtn);
      bookBottomContainer.append(bookIsReadBtn);
    }
  }
  createBookGrid();

  addBookBtn = document.querySelector('.addBook');
  addBookBtn.addEventListener('click', promptBook);
}

//Email, Country, Zip Code, Password and Password Confirmation fields.
let body = document.querySelector('body');
let form = document.querySelector('form');
let email = document.querySelector('#email');
let submitBtn = document.querySelector('#submit');
let emailInput = document.querySelector('#email');
let zipInput = document.querySelector('#zipCode');
let passwordInput = document.querySelector('#password');
let passwordConfirmInput = document.querySelector('#passwordConfirm');
let guestLoginBtn = document.querySelector('#guestLogin');

function clearHtmlAndLoadLibrary(event) {
  document.querySelector('body').innerHTML = '';
  libraryAppLoad();
}

submitBtn.addEventListener('click', function submitEvent(event) {
  let formIsCorrect = true;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailInput.setCustomValidity('');
  } else {
    emailInput.setCustomValidity('Incorrect email format');
    formIsCorrect = false;
  }

  if (/[0-9]{5}(-[0-9]{4})?/g.test(zipInput.value)) {
    zipInput.setCustomValidity('');
  } else {
    zipInput.setCustomValidity('Incorrect zip code format');
    formIsCorrect = false;
  }

  if (
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
      passwordInput.value
    )
  ) {
    passwordInput.setCustomValidity('');
  } else {
    passwordInput.setCustomValidity(
      'At least 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number'
    );
    formIsCorrect = false;
  }

  if (passwordInput.value === passwordConfirmInput.value) {
    passwordConfirmInput.setCustomValidity('');
  } else {
    passwordConfirmInput.setCustomValidity('Passwords does not match');
    formIsCorrect = false;
  }

  form.addEventListener('submit', function test() {
    clearHtmlAndLoadLibrary();
  });
});

guestLoginBtn.addEventListener('click', clearHtmlAndLoadLibrary);
