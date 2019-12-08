import React, { Component } from "react";

class Booklist extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12">
            <h2 className="text-center">Booklist Manager</h2>
            <div className="row justify-content-center mt-4">
              <div className="col-md-6">
                <ul className="list-group">
                  <li className="list-group-item">Winners Take All</li>
                  <li className="list-group-item">The Hate U Give</li>
                  <li className="list-group-item">The God of Small Things</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Booklist;
