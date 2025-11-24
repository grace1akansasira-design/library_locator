import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 shadow flex gap-4 bg-blue-700 text-white">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/books">Books</Link>
      <Link to="/add-book">Add Book</Link>
      <Link to="/search">Search</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;
