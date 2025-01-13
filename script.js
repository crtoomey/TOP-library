let bookList = document.querySelector('.book-list')
const myLibrary = [];

// book constructor function with read attribute being true or false
function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

// manual entries to test things
const crimeAndPunishment = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 270, false);
const theBrothersKaramazov = new Book('The Brothers Karamazov', 'Fyodor Dostoevsky', 270, false)
const notesFromUnderground = new Book('Notes From Underground', 'Fyodor Dostoevsky', 270, false)
console.log(crimeAndPunishment.title, crimeAndPunishment.author, crimeAndPunishment.pageCount, crimeAndPunishment.read);

// function to append books to library array
function addBookToLibrary(book) {
    myLibrary.push(book);
}

// test for seeing if the book is appended to the array
addBookToLibrary(crimeAndPunishment);
addBookToLibrary(theBrothersKaramazov);
addBookToLibrary(notesFromUnderground);
console.log(myLibrary);


// function to loop through myLibrary array and print each book's contents on to the page
function getBooks(library) {
    for (let index = 0; index < library.length; index++) {
        let book = library[index];
        console.log(book.title);
        let bookCard = document.createElement('div');
        bookList.appendChild(bookCard);
        bookCard.innerHTML = `<h2> ${book.title} </h2><h4> ${book.author} </h4><p> ${book.pageCount} </p><p> ${book.read} </p>`;


    }
}

getBooks(myLibrary);