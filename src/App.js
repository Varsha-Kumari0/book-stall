import React from 'react';
import './App.css';
import { books } from './data';

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.img} alt={book.name} title={book.name} />
    <h3 className="book-title">{book.name}</h3>
    <p>Stall price: {book.stall_price} INR</p>
    <p>Pre-booking price: {book.pre_booking_price} INR</p>
    <button>Pre Booking</button>
  </div>
);

const BookStall = () => (
  <div className="book-stall">
    <header>
      <h1>Book Stall</h1>
      <h2>Pre Booking offer: 10% Discount</h2>
    </header>
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  </div>
);

export default BookStall;
