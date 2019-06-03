import React from "react";
import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
    // const books = [
    //     { id: 1, title: "Хроники Амбера", author: "Роджер Желязны" },
    //     { id: 2, title: "Числа", author: "Виктор Пелевин" }
    // ]
  return (
    <>
      <h1>Home Page</h1>
      <BookList />
      <ShoppingCartTable />
    </>
  );
};

export default HomePage;
