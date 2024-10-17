import React from 'react';
import './App.css';

const books = [
  {
    img: 'https://via.placeholder.com/150',
    stallPrice: '500 INR',
    preBookingPrice: '450 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '300 INR',
    preBookingPrice: '270 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '600 INR',
    preBookingPrice: '540 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '500 INR',
    preBookingPrice: '450 INR'
  },
  {
    img: 'https://via.placeholder.com/150',
    stallPrice: '500 INR',
    preBookingPrice: '450 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '300 INR',
    preBookingPrice: '270 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '600 INR',
    preBookingPrice: '540 INR'
  },
  {
    img: 'https://via.placeholder.com/150', 
    stallPrice: '500 INR',
    preBookingPrice: '450 INR'
  }
];

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.img} alt={book.title} />
    <p>Stall price: {book.stallPrice}</p>
    <p>Pre-booking price: {book.preBookingPrice}</p>
    <button>Pre Booking</button>
  </div>
);

const BookStall = () => (
  <div className="book-stall">
    <header>
      <h1>Book Stall</h1>
      <h2>Pre Booking offer : 10% Discount</h2>
    </header>
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  </div>
);

export default BookStall;
