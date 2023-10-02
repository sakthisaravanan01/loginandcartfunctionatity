import React from "react";
import Logo from "../../asserts/images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../OnlineStatus";
import "./Header.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../authSlice";

const Title = () => (
  <a href="/">
    <img alt="logo" src={Logo} />
  </a>
);
const Header = ({ onLogout }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header-container">
      <div className="image">
        <Title />
        Veg & fruit Stall
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <Link to="/cart">
            <li>Cart-{cartItems.length}</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅ you are online" : "🔴 you are offline"}</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
