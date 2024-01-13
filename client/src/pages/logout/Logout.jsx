import React from 'react'
import axios from "axios";

const Logout = () => {
    
    const handleLogout = async () => {
        try {
          // Make an API request to the server to log the user out
          await axios.post("/api/auth/logout");
          // Remove the user token and related data from cookies or local storage
          // Redirect the user to the login page or homepage
          window.location.href = "/login"; // You can use React Router for routing.
        } catch (error) {
          // Handle any errors, e.g., display an error message.
        }
      };
    
      return (
        <button onClick={handleLogout}>Logout</button>
      );
}

export default Logout