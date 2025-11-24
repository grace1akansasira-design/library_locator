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

      <div className="p-16 max-w-7xl mx-auto">

        <h1 className="text-6xl font-extrabold mb-20 text-center text-blue-900 tracking-widest uppercase">
          LIBRARY BOOKS COLLECTION
        </h1>

        {books.length === 0 ? (
          <p className="text-gray-600 text-center text-2xl">
            No Books Available
          </p>
        ) : (
          <div className="overflow-x-auto shadow-2xl rounded-2xl">

            <table className="min-w-full bg-white border-separate border-spacing-y-3">

              <thead className="bg-blue-800 text-white uppercase tracking-widest">
                <tr>
                  <th className="py-6 px-10 text-left text-xl w-1/3">Title</th>
                  <th className="py-6 px-10 text-left text-xl w-1/3">Author</th>
                  <th className="py-6 px-10 text-left text-xl w-1/3">Shelf Location</th>
                </tr>
              </thead>

              <tbody>
                {books.map((book) => (
                  <tr
                    key={book.id}
                    className="hover:bg-blue-50 transition text-gray-900 bg-white shadow-sm"
                  >
                    <td className="py-6 px-10 text-xl font-semibold">
                      {book.title}
                    </td>

                    <td className="py-6 px-10 text-xl">
                      {book.author}
                    </td>

                    <td className="py-6 px-10 text-xl">
                      {book.location}
                    </td>
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
