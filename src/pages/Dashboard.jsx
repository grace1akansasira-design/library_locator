import Navbar from "../components/Navbar";
import { useState } from "react";

function Dashboard() {
  const [books] = useState([
    { id: 1, title: "BOOK ONE", author: "AUTHOR A", location: "A1" },
    { id: 2, title: "BOOK TWO", author: "AUTHOR B", location: "B2" },
  ]);

  const totalBooks = books.length;
  const totalAuthors = [...new Set(books.map(b => b.author))].length;
  const totalLocations = [...new Set(books.map(b => b.location))].length;

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Admin Dashboard</h1>

        <div className="stats-cards">
          <div className="card card-green">
            <p className="card-label">Total Books</p>
            <p className="card-value">{totalBooks}</p>
          </div>
          <div className="card card-yellow">
            <p className="card-label">Total Authors</p>
            <p className="card-value">{totalAuthors}</p>
          </div>
          <div className="card card-blue">
            <p className="card-label">Total Locations</p>
            <p className="card-value">{totalLocations}</p>
          </div>
        </div>

        <div className="dashboard-buttons">
          <button className="btn btn-green" onClick={() => window.location.href = "/add-book"}>
            Add Book
          </button>
          <button className="btn btn-blue" onClick={() => window.location.href = "/search"}>
            Search Books
          </button>
          <button className="btn btn-gray" onClick={() => window.location.href = "/reports"}>
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
