type Book = {
    title: string;
    isRead: boolean;
};

const booksData = [
    { title: 'Harry Potter y la piedra filosofal', isRead: true },
    { title: 'Canción de hielo y fuego', isRead: false },
    { title: 'Devastación', isRead: true },
];

const checkBooks = (books: Book[], bookTitle: string): boolean => {
    const book = books.find((book) => book.title === bookTitle);
    if (!book) {
        return false;
    }
    return book.isRead;
}

console.log(checkBooks(booksData, 'Devastación'));
console.log(checkBooks(booksData, 'Canción de hielo y fuego'));
console.log(checkBooks(booksData, 'Los Pilares de la Tierra'));