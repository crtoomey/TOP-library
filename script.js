const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#close");
const submitButton = document.querySelector('#submit')
const successMessage = document.querySelector('.success');
const failureMessage = document.querySelector('.failure');
let bookList = document.querySelector('.book-list');
const myLibrary = [];

// book constructor function with read attribute being true or false
function Book(title, author, pageCount, read, id) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.id = id;
    this.info = function () {
        if (this.read === false) {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, not read yet.`
        } else {
            return `${this.title} by ${this.author}, ${this.pageCount} pages, has been read.`
        }
    }
}

// manual entries to test things
// const crimeAndPunishment = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 270, true);
// const theBrothersKaramazov = new Book('The Brothers Karamazov', 'Fyodor Dostoevsky', 270, false);
// const notesFromUnderground = new Book('Notes From Underground', 'Fyodor Dostoevsky', 270, false);
// console.log(crimeAndPunishment.info(), theBrothersKaramazov.info(), notesFromUnderground.info());
// console.log(crimeAndPunishment.title, crimeAndPunishment.author, crimeAndPunishment.pageCount, crimeAndPunishment.read);

// function to append books to library array
function addBookToLibrary(book) {
    // check to see if the new book already exists in the array
    const exists = myLibrary.some(
        (bk) =>
            bk.title === book.title && bk.author === book.author
    );

    if (exists) {
        console.log('Book already exists in the library');
    } else {
        console.log('adding book');

        myLibrary.push(book);
    }


}

// test for seeing if the book is appended to the array
// addBookToLibrary(crimeAndPunishment);
// addBookToLibrary(theBrothersKaramazov);
// addBookToLibrary(notesFromUnderground);
// console.log(myLibrary);

// function to loop through myLibrary array and print each book's contents on to the page
function getBooks(library) {
    bookList.innerHTML = "";
    for (let index = 0; index < library.length; index++) {
        let book = library[index];
        book.id = index;
        console.log(book.id);
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookList.appendChild(bookCard);
        if (book.read === false) {
            bookCard.innerHTML = `<h2 class="book-title"> ${book.title} </h2>
            <h4 class="book-author"> By ${book.author} </h4>
            <p class="page-count"> ${book.pageCount} pages </p>
            <p class="info"> ${book.info()} </p>
            <button class="mark-read-btn" id="book-${book.id}" onclick="markAsRead(${book.id})">Mark as Read</button>
            <button class="remove-btn" onclick="removeBook(${book.id})">Remove from Library</button>`;
        } else {
            bookCard.innerHTML = `<h2 class="book-title"> ${book.title} </h2>
            <h4 class="book-author"> By ${book.author} </h4>
            <p class="page-count"> ${book.pageCount} pages </p>
            <p class="info"> ${book.info()} </p>
            <button class="has-been-read-btn" id="book-${book.id}">Completed!</button>
            <button class="remove-btn" onclick="removeBook(${book.id})">Remove from Library</button>`;
        }
    }
}

// show add book dialog modal from the internet
// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});

// submit form function
submitButton.addEventListener("click", submitForm, false);

function submitForm(event) {
    event.preventDefault();
    let bookTitle = document.querySelector('#title').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPageCount = document.querySelector('#page-count').value;
    const newBook = new Book(bookTitle, bookAuthor, bookPageCount, false);
    const exists = myLibrary.some(
        (bk) =>
            bk.title === newBook.title && bk.author === newBook.author
    );

    if (exists) {
        console.error("Book already exists in library!")
    } else {
        addBookToLibrary(newBook);
        getBooks(myLibrary);
        dialog.close();
    }
}

// function to remove books from library
function removeBook(id) {
    myLibrary.splice(id, 1);

    if (myLibrary.length === 0) {
        getBooks(myLibrary);
        bookList.innerHTML = "<h3>No Books Yet!</h3>";
    } else {
        getBooks(myLibrary);
    }
}

// function to mark a book as read
function markAsRead(id) {
    let book = myLibrary[id];
    book.read = true;
    let readButton = document.querySelector("#book-" + id);
    readButton.innerText = "Completed!";
    readButton.classList.remove('mark-read-btn');
    readButton.classList.add('has-been-read-btn');
    readButton.disabled = true;
    getBooks(myLibrary);

}