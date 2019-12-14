import React, { createContext, useEffect, useReducer } from "react";
import uuid from "uuid/v1";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  /* const [books, setBooks] = useState([
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
  }; */
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
