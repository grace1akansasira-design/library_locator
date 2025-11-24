import { useState } from "react";
import Navbar from "../components/Navbar";


function Reports() {
  const [books] = useState([
    { id: 1, title: "INTRODUCTION TO PROGRAMMING", author: "KEBIRUNGI MERCY", location: "A1" },
    { id: 2, title: "DATABASE MANAGEMENT SYSTEMS", author: "MARY MERCY", location: "B2" },
    { id: 3, title: "NETWORKING ESSENTIALS", author: "DAVID TWEHEYO", location: "C3" },
  ]);

  const totalBooks = books.length;
  const totalAuthors = [...new Set(books.map(b => b.author))].length;
  const totalLocations = [...new Set(books.map(b => b.location))].length;

  return (
    <div>
      <Navbar />

      <div className="reports-container">
        <h1 className="reports-title">System Reports</h1>

        <div className="reports-stats">
          <div className="stats-card stats-green">
            <p className="stats-label">Total Books</p>
            <p className="stats-value">{totalBooks}</p>
          </div>
          <div className="stats-card stats-yellow">
            <p className="stats-label">Total Authors</p>
            <p className="stats-value">{totalAuthors}</p>
          </div>
          <div className="stats-card stats-blue">
            <p className="stats-label">Total Locations</p>
            <p className="stats-value">{totalLocations}</p>
          </div>
        </div>

        <div className="recent-books">
          <h2>Recently Added Books</h2>

          {books.length === 0 ? (
            <p className="no-books">No books added yet.</p>
          ) : (
            <div className="books-table-wrapper">
              <table className="books-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Bookshelf</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map(book => (
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
    </div>
  );
}

export default Reports;
