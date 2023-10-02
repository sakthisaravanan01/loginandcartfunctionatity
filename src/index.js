import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import store from "./store";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Cart from "./components/Cart/Cart";
import { useNavigate, BrowserRouter } from "react-router-dom";
import About from "./components/About/About";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const enteredUsername = "";
    const enteredPassword = "";

    if (enteredUsername === "" && enteredPassword === "") {
      setIsLoggedIn(true);
      navigate("/Home");
    } else {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div style={{ padding: "0px", marginTop: "0px" }}>
      <Provider store={store}>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <>
                  <Navigate to="/home" />
                </>
              )
            }
          />

          {isLoggedIn && (
            <>
              <Route path="/home" element={<Home onLogout={handleLogout} />} />
              <Route
                path="/cart"
                element={<HomeCart onLogout={handleLogout} />}
              />
              <Route
                path="/about"
                element={<AboutCart onLogout={handleLogout} />}
              />
            </>
          )}
        </Routes>
      </Provider>
    </div>
  );
};

const AboutCart = ({ onLogout }) => (
  <>
    <div className="header-container ">
      <Header onLogout={onLogout} />
    </div>
    <About />
  </>
);
const Home = ({ onLogout }) => (
  <>
    <div className="header-container ">
      <Header onLogout={onLogout} />
    </div>
    <Body />
  </>
);

const HomeCart = ({ onLogout }) => (
  <>
    <div className="header-container ">
      <Header onLogout={onLogout} />
    </div>

    <Cart />
  </>
);

ReactDOM.render(
  <BrowserRouter>
    <Index />
  </BrowserRouter>,
  document.getElementById("root")
);
