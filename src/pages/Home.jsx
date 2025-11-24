import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 uppercase">E-LIBRARY BOOK LOCATOR SYSTEM</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          WELCOME TO E-LIBRARY BOOK LOCATOR SYSTEM.
        </p>
        <div className="flex gap-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/search")}
          >
            Search Books
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
