class Book {
    constructor(isbn, title) {
        this.isbn = isbn;
        this.title = title;
        this.authors = []
    }

    addAuthor(author_id, author_name) {
        this.authors.push({
            author_id: author_id,
            author_name: author_name
        })
    }
}

module.exports = Book;