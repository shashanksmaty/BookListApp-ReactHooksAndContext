import React, { useState } from "react";

const AddBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addBook(title);
  };
  return (
    <div className="row mt-4 justify-content-center">
      <div className="col-md-6">
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
          <div className="text-center">
            <button className="btn btn-primary">Add Book</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
