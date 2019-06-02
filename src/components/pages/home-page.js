import React from "react";
import BookList from "../book-list/book-list";

const HomePage = () => {
    // const books = [
    //     { id: 1, title: "Хроники Амбера", author: "Роджер Желязны" },
    //     { id: 2, title: "Числа", author: "Виктор Пелевин" }
    // ]
  return (
    <>
      <h1>Home Page</h1>
      <BookList />
    </>
  );
};

export default HomePage;
