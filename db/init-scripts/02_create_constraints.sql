ALTER TABLE book
    ADD CONSTRAINT isbn_length CHECK (LENGTH(isbn::TEXT) = 10 OR LENGTH(isbn::TEXT) = 13),
    ADD CONSTRAINT title_length CHECK (LENGTH(title) <= 100);