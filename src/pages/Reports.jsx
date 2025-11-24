import Navbar from "../components/Navbar";
import { useState } from "react";

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
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center uppercase">SYSTEM REPORTS</h1>

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

        <div>
          <h2 className="text-2xl font-semibold mb-4 uppercase">RECENTLY ADDED BOOKS</h2>

          {books.length === 0 ? (
            <p className="text-gray-600">NO BOOKS ADDED YET.</p>
          ) : (
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left uppercase">TITLE</th>
                  <th className="border px-4 py-2 text-left uppercase">AUTHOR</th>
                  <th className="border px-4 py-2 text-left uppercase">BOOKSHELF</th>
                </tr>
              </thead>
              <tbody>
                {books.map(book => (
                  <tr key={book.id} className="border">
                    <td className="border px-4 py-2">{book.title}</td>
                    <td className="border px-4 py-2">{book.author}</td>
                    <td className="border px-4 py-2 text-blue-600">{book.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
