const myLibrary = [];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

const book = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 270, false);

console.log(book.title, book.author, book.pageCount, book.read);


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book);

console.log(myLibrary);