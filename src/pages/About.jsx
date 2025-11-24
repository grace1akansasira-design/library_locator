import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 uppercase text-center text-blue-700">
          ABOUT E-LIBRARY BOOK LOCATOR SYSTEM
        </h1>

        <p className="text-gray-700 mb-6 text-lg text-center">
          The e-library book locator system is designed to help students and staff 
          access library materials more efficiently. It provides a fast and convenient way 
          to identify the exact location of books, minimizing delays and improving overall 
          library operations.
        </p>

        <div className="bg-gray-50 p-6 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600 uppercase">
            SYSTEM SUMMARY
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Users can search books by title, author, or keyword, and view their exact locations 
            on library shelves. The admin section enables secure management and updates of book 
            records, while the dashboard provides an overview of the library inventory. The system 
            offers simple, user-friendly navigation to ensure a smooth experience for all users.
          </p>
        </div>

        <p className="text-gray-600 mt-6 text-center text-lg">
          This system supports modern library management by streamlining book retrieval 
          and ensuring quick and efficient access to learning materials.
        </p>
      </div>
    </div>
  );
}

export default About;
