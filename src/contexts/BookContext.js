import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Winners Take All", author: "Anand Giridhardas", id: 1 },
    { title: "The Hate U Give", author: "Angie Thomas", id: 2 },
    { title: "The God of Small Things", author: "Arundhati Roy", id: 3 },
    { title: "Veronica Decides to Die", author: "Paulo Coelho", id: 4 }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider
      value={{ books, addBook: addBook, removeBook: removeBook }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
