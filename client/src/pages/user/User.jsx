import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./user.css"; // Import your CSS
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
        <Navbar/>
        <Header/>
    <div className="main">
        <div className="user-container">
        {user ? (
            <div>
            <h2 className="user-title">USER DETAILS</h2>
            <p className="user-details">Username: {user.username}</p>
            <p className="user-details">Email: {user.email}</p>
            </div>
        ) : (
            <p className="not-logged-in">You are not logged in.</p>
            )}
        </div>
    </div>
    <div className="footer-container">
        <div className="footer">
            <Footer/>
        </div>
    </div>
    </div>
  );
};

export default User;
