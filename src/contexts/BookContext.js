import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Winners Take All", id: 1 },
    { title: "The Hate U Give", id: 2 },
    { title: "The God of Small Things", id: 3 },
    { title: "Veronica Decides to Die", id: 4 }
  ]);
  const addBook = title => {
    setBooks([...books, { title: title, id: uuid() }]);
  };
  return (
    <BookContext.Provider value={{ books, addBook: addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
