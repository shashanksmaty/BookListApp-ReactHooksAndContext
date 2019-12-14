import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
