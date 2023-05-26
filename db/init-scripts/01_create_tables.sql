CREATE TABLE IF NOT EXISTS book (
  isbn VARCHAR PRIMARY KEY,
  title VARCHAR
);

CREATE TABLE IF NOT EXISTS author (
  author_id VARCHAR PRIMARY KEY,
  author_name VARCHAR
);

CREATE TABLE IF NOT EXISTS book_author (
  book_author_id VARCHAR PRIMARY KEY,
  isbn VARCHAR,
  author_id VARCHAR,

  FOREIGN KEY (isbn) REFERENCES book(isbn),
  FOREIGN KEY (author_id) REFERENCES author(author_id)
);

