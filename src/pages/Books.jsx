import { useState } from "react";
import Navbar from "../components/Navbar";


function Books() {
  const [books] = useState([
    { id: 1, title: "INTRODUCTION TO PROGRAMMING", author: "JOHN ATUNGIRE", location: "A1" },
    { id: 2, title: "DATA STRUCTURES AND ALGORITHMS", author: "GRACE OWAMASIKO", location: "B3" },
    { id: 3, title: "DATABASE MANAGEMENT SYSTEMS", author: "TIBUHABURWA JAMES", location: "C2" },
    { id: 4, title: "COMPUTER NETWORKS", author: "BWESIGYE BIRUNGI A", location: "D4" },
    { id: 5, title: "OPERATING SYSTEM CONCEPTS", author: "MUTABAZI JOSEPH", location: "E1" }
  ]);

  return (
    <div>
      <Navbar />

      <div className="books-container">
        <h1 className="books-title">Library Books Collection</h1>

        {books.length === 0 ? (
          <p className="no-books">No Books Available</p>
        ) : (
          <div className="books-table-wrapper">
            <table className="books-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Shelf Location</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td className="book-title">{book.title}</td>
                    <td>{book.author}</td>
                    <td className="book-location">{book.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
