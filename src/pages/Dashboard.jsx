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
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 uppercase text-center">
          ADMIN DASHBOARD
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-100 p-4 rounded shadow text-center">
            <p className="text-lg font-semibold uppercase">TOTAL BOOKS</p>
            <p className="text-2xl font-bold">{totalBooks}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow text-center">
            <p className="text-lg font-semibold uppercase">TOTAL AUTHORS</p>
            <p className="text-2xl font-bold">{totalAuthors}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow text-center">
            <p className="text-lg font-semibold uppercase">TOTAL LOCATIONS</p>
            <p className="text-2xl font-bold">{totalLocations}</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded uppercase font-semibold"
            onClick={() => window.location.href = "/add-book"}
          >
            ADD BOOK
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded uppercase font-semibold"
            onClick={() => window.location.href = "/search"}
          >
            SEARCH BOOKS
          </button>
          <button
            className="bg-gray-600 text-white px-4 py-2 rounded uppercase font-semibold"
            onClick={() => window.location.href = "/reports"}
          >
            VIEW REPORTS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
