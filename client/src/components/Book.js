import React from 'react';
import './Book.css'

const Book = ({book}) => {
  return (
    <div className="book">
      <div className='bookImage'>
       {book.title}
      </div>
      <div className='bookInfo'>
        {book.authors.map((author, index) => (
          <p key={author + index} className='authorName'>{author.authorName}</p>
        ))}
      </div>
    </div>
  );
};

export default Book;