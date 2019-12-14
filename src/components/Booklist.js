import React, { useContext } from "react";
import AddBookForm from "./AddBookForm";
import uuid from "uuid/v1";
import { BookContext } from "../contexts/BookContext";

const Booklist = () => {
  const { books, addBook } = useContext(BookContext);
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">
          <h2 className="text-center">Booklist Manager</h2>
          <AddBookForm addBook={addBook} />
          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <ul className="list-group">
                {books.map(books => (
                  <li className="list-group-item" key={books.id}>
                    {books.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booklist;
