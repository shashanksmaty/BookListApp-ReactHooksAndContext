import React, { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import uuid from "uuid/v1";

const Booklist = () => {
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
