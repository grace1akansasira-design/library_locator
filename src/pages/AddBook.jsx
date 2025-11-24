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

    setTimeout(() => setSuccess(false), 1500);
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

      <div className="addbook-container">
        <h1 className="addbook-title">Add New Book</h1>

        <div className="addbook-form">
          <input
            type="text"
            className="input-field"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            className="input-field"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            type="text"
            className="input-field"
            placeholder="Shelf Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          {error && <p className="error-msg">{error}</p>}

          <div className="button-group">
            <button className="btn-add" onClick={handleAddBook}>
              ADD BOOK
            </button>
            <button className="btn-reset" onClick={handleReset}>
              RESET
            </button>
          </div>

          {success && <p className="success-msg">Book added successfully!</p>}
        </div>

        {books.length > 0 && (
          <div className="books-list">
            <h2>Books Added</h2>
            <ul>
              {books.map((b) => (
                <li key={b.id}>
                  <span className="book-title">{b.title}</span> by {b.author} — 
                  <span className="book-location"> {b.location}</span>
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
