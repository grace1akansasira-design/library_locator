import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">E-Library Book Locator System</h1>
        <p className="home-subtitle">
          Welcome to E-Library Book Locator System.
        </p>
        <div className="home-buttons">
          <button className="btn-blue" onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
          <button className="btn-green" onClick={() => navigate("/search")}>
            Search Books
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
