export const API_URL = "http://localhost:5000/api/books";

export const fetchBooks = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const addBook = async (book) => {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book)
  });
  return await res.json();
};

export const searchBook = async (title) => {
  const res = await fetch(`${API_URL}/search/${encodeURIComponent(title)}`);
  return await res.json();
};
