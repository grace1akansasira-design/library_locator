import { useState } from "react";
import Navbar from "../components/Navbar";


function Search() {
  const [query, setQuery] = useState("");

  const books = [
    { id: 1, title: "DATA STRUCTURES & ALGORITHMS", author: "KARIBURWE JAMES", shelf: "A1" },
    { id: 2, title: "COMPUTER NETWORKS", author: "AKATWIJUKA FRANK", shelf: "B4" },
    { id: 3, title: "INTRODUCTION TO PSYCHOLOGY", author: "JAMES BIRUNGI", shelf: "C2" },
    { id: 4, title: "PROGRAMMING WITH JAVA", author: "TUMWESIGYE ALSON", shelf: "D1" },
  ];

  const results = books.filter(book =>
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="search-container">
        <h1 className="search-title">Search Books</h1>

        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Enter author or book title..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="search-results">
          <h2 className="results-title">Search Results</h2>

          {query && results.length === 0 && (
            <p className="no-results">No Books Found</p>
          )}

          {results.length > 0 && (
            <p className="results-count">Results Found: {results.length}</p>
          )}

          {results.length > 0 && (
            <div className="results-table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Shelf</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map(book => (
                    <tr key={book.id}>
                      <td className="book-title">{book.title}</td>
                      <td>{book.author}</td>
                      <td className="book-shelf">{book.shelf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
