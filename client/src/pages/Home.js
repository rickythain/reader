import logo from '../logo.svg';
import '../App.css';

import React, { useEffect, useState } from 'react';

import Book from '../components/Book';
import Header from '../components/Header';

import { getBooks } from '../utils/api';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await getBooks();
      setBooks(booksData.books);
    };
    fetchBooks();

  }, [])

  return (
    <div className="App">
      <Header />
      {books.map((item, index) => (
        <Book key={item + index} book={item}></Book>
      ))}
    </div>
  );
}

export default Home;
