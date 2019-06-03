import React from "react";
import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
          <img src={coverImage} alt={title} />
      </div>
      <div className="book-details">
        <span href="#" className='book-title'>{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-pricer">${price}</div>
        <button className='btn btn-info add-to-cart'>Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
