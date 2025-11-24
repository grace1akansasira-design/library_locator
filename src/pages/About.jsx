import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About E-Library Book Locator System</h1>

        <p className="about-intro">
          The e-library book locator system is designed to help students and staff 
          access library materials more efficiently. It provides a fast and convenient way 
          to identify the exact location of books, minimizing delays and improving overall 
          library operations.
        </p>

        <div className="about-summary">
          <h2 className="summary-title">System Summary</h2>
          <p className="summary-text">
            Users can search books by title, author, or keyword, and view their exact locations 
            on library shelves. The admin section enables secure management and updates of book 
            records, while the dashboard provides an overview of the library inventory. The system 
            offers simple, user-friendly navigation to ensure a smooth experience for all users.
          </p>
        </div>

        <p className="about-conclusion">
          This system supports modern library management by streamlining book retrieval 
          and ensuring quick and efficient access to learning materials.
        </p>
      </div>
    </div>
  );
}

export default About;
