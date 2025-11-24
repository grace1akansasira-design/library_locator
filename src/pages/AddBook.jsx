import { useState } from "react";
import Navbar from "../components/Navbar";

function AddBook() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleAddBook = () => {
    if (!title || !author || !location) {
      setError("All fields are required.");
      setTimeout(() => setError(""), 2000);
      return;
    }

    const newBook = { id: Date.now(), title, author, location };
    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
    setLocation("");
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 1500);
  };

  const handleReset = () => {
    setTitle("");
    setAuthor("");
    setLocation("");
    setError("");
  };

  return (
    <div>
      <Navbar />

      <div className="p-14 max-w-3xl mx-auto">

        <h1 className="text-5xl font-extrabold mb-14 text-center text-blue-900 tracking-wider uppercase">
          Add New Book
        </h1>

        <div className="space-y-8">

          <input
            type="text"
            className="border w-full p-4 text-xl rounded-lg shadow-md focus:ring-4 focus:ring-blue-300 outline-none"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="border w-full p-4 text-xl rounded-lg shadow-md focus:ring-4 focus:ring-blue-300 outline-none"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            type="text"
            className="border w-full p-4 text-xl rounded-lg shadow-md focus:ring-4 focus:ring-blue-300 outline-none"
            placeholder="Shelf Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {error && (
            <p className="text-red-600 text-xl font-semibold text-center">
              {error}
            </p>
          )}

          <div className="flex gap-4 pt-4">

            <button
              className="bg-green-700 text-white w-full p-4 rounded-xl text-xl font-semibold shadow-lg hover:bg-green-800 active:scale-90 transition duration-150"
              onClick={handleAddBook}
            >
              ADD BOOK
            </button>

            <button
              className="bg-gray-700 text-white w-full p-4 rounded-xl text-xl font-semibold shadow-lg hover:bg-gray-800 active:scale-90 transition duration-150"
              onClick={handleReset}
            >
              RESET
            </button>

          </div>

          {success && (
            <p className="text-green-700 font-bold text-2xl text-center pt-2">
              Book added successfully!
            </p>
          )}

        </div>

        {books.length > 0 && (
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-blue-900 text-center tracking-wide">
              Books Added
            </h2>
            <ul className="space-y-4 text-xl">
              {books.map((b) => (
                <li key={b.id} className="border-b pb-3">
                  <span className="font-semibold">{b.title}</span> by {b.author} — 
                  <span className="text-blue-700 font-bold"> {b.location}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default AddBook;
