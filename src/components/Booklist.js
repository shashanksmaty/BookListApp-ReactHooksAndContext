import React, { useContext } from "react";
import AddBookForm from "./AddBookForm";
import uuid from "uuid/v1";
import { BookContext } from "../contexts/BookContext";

const Booklist = () => {
  const { books, addBook, removeBook } = useContext(BookContext);
  return (
    <div className="container">
      <div className="row mt-4 mb-4">
        <div className="col-md-12">
          <h2 className="text-center">Booklist Manager</h2>
          <div className="row justify-content-around mt-4 mb-4">
            <AddBookForm addBook={addBook} />
            <div className="col-md-6">
              <ul className="list-group">
                {books.map(book => (
                  <li className="list-group-item" key={book.id}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-1">{book.title}</h5>
                      <span className="text-danger">
                        <small>
                          <button
                            className="btn btn-link text-danger"
                            onClick={() => removeBook(book.id)}
                          >
                            Remove
                          </button>
                        </small>
                      </span>
                    </div>
                    <small>{book.author}</small>
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
