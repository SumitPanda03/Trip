import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      // Make an API request to the server to log the user out
      await axios.post("/auth/logout");
      // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("user");
      // Remove the user token and related data from cookies or local storage
      // Redirect the user to the login page or homepage
      window.location.href = "/"; 
      // navigate("/")// You can use React Router for routing.
    } catch (error) {
      // Handle any errors, e.g., display an error message.
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">TripVisor</span>
        </Link>
        {user ? "" : (
          <div className="navItems">
            <Link to="/register">
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
         <div className="home">
      {user ? (
        <div>
          <p className="welcome">Welcome, <Link to="/user" className="userdetails">{user.username}</Link>!</p>
          {/* <Link to="/user" className="userdetails">{user.username}</Link> */}
          <button className="logout" onClick={handleLogout}>Logout</button>

            
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
      </div>
    </div>
  );
};

export default Navbar;
