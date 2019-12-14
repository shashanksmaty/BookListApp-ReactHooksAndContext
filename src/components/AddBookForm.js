import React, { useState, useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const AddBookForm = ({ addBook }) => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const book = { title: title, author: author };
    dispatch({ type: "ADD_BOOK", payload: book });
    setTitle("");
    setAuthor("");
  };
  return (
    <div className="col-md-5">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Book Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Book Author</label>
              <input
                type="text"
                name="author"
                className="form-control"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button className="btn btn-primary">Add Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBookForm;
