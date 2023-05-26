ALTER TABLE book
    ADD CONSTRAINT chk_isbn_length CHECK (LENGTH(isbn) IN (10, 13)),
    ADD CONSTRAINT chk_title_length CHECK (LENGTH(title) <= 100);

ALTER TABLE author
    ADD CONSTRAINT chk_authorId_length CHECK (LENGTH(author_id) = 10),
    ADD CONSTRAINT chk_authorName_length CHECK (LENGTH(author_name) <= 100);

ALTER TABLE book_author
    ADD CONSTRAINT chk_bookAuthorId_length CHECK (LENGTH(book_author_id) = 10),
    ADD CONSTRAINT chk_isbn_length CHECK (LENGTH(isbn) IN (10, 13)),
    ADD CONSTRAINT chk_authorId_length CHECK (LENGTH(author_id) = 10);
