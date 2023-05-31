const books = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];

const isBookRead = (books ,bookTitle) => {
    const book = books.find((book) => book.title == bookTitle);
    if (!book) {
        return false;
    }
    return book.isRead;
}

console.log(isBookRead(books, 'Devastación'));
console.log(isBookRead(books, 'Canción de hielo y fuego'));
console.log(isBookRead(books, 'Los Pilares de la Tierra'));
