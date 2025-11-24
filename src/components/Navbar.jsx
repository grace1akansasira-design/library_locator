import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">E-Library</div>
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/books">Books</Link>
          <Link to="/add-book">Add Book</Link>
          <Link to="/search">Search</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
