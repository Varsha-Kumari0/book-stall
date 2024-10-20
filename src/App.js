import React from "react";
import "./App.css";
import { books } from "./data";

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.img} alt={book.name} title={book.name} />
    <h3 className="book-title">{book.name}</h3>
    <p>Stall price: {book.stall_price} INR</p>
    <p>Pre-booking price: {book.pre_booking_price} INR</p>

    {book.isSold ? (
      <button className="sold">Sold</button>
    ) : (
      <button className="btn">
        <a
          className="link"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdWyf7xfROFyulkS_8npq-9gBGgzdJe3xeP8Rr71vYRdEwl4A/viewform?vc=0&c=0&w=1&flr=0&usp=mail_form_link"
        >
          Pre Booking
        </a>
      </button>
    )}
  </div>
);

const BookStall = () => (
  <div className="book-stall">
    <header>
      <h1>Book Stall</h1>
      <h2>Pre Booking offer: 10% Discount</h2>
      <div className="list-status">
        <a
          target="_blank"
          className="list-link"
          href="https://docs.google.com/spreadsheets/d/1A2br7qQwLFrkfgoAQ5GXO9U-BMs8NRJzQ-ZTmhjtrmM/edit?usp=sharing"
        >
          Book List Status
        </a>
      </div>
    </header>
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  </div>
);

export default BookStall;
