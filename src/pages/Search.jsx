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

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700 uppercase">
          SEARCH BOOKS
        </h1>

        <div className="bg-gray-50 p-6 rounded shadow border mb-6">
          <input
            type="text"
            placeholder="ENTER AUTHOR OR BOOK TITLE..."
            className="border w-full p-3 rounded text-lg uppercase"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-2xl font-semibold text-gray-700 uppercase mb-4">
            SEARCH RESULTS
          </h2>

          {query && results.length === 0 && (
            <p className="text-red-600 text-center text-lg font-semibold py-4 uppercase">
              NO BOOKS FOUND
            </p>
          )}

          {results.length > 0 && (
            <p className="text-gray-700 font-semibold mb-3 uppercase">
              RESULTS FOUND: {results.length}
            </p>
          )}

          {results.length > 0 && (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border p-2 text-left uppercase">TITLE</th>
                  <th className="border p-2 text-left uppercase">AUTHOR</th>
                  <th className="border p-2 text-left uppercase">SHELF</th>
                </tr>
              </thead>

              <tbody>
                {results.map(book => (
                  <tr key={book.id} className="hover:bg-gray-100">
                    <td className="border p-2 uppercase">{book.title}</td>
                    <td className="border p-2 uppercase">{book.author}</td>
                    <td className="border p-2 font-bold text-blue-700 uppercase">{book.shelf}</td>
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

export default Search;
