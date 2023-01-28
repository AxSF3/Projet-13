// react
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

// style
import "./main.css";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SharedProfilLayout from "./pages/SharedProfilLayout";
import Profile from "./pages/Profile";
import AccountDetails from "./pages/AccountDetails";
import PageNotFound from "./pages/PageNotFound";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { isSuccess, user } = useSelector((state) => state.auth);
  const isLoggedIn = isSuccess || user;
 
  console.clear()
  return (
    <>
      <div className="App">
        <Router>

          <Header />
          
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route
              path="profile"
              element={isLoggedIn && <SharedProfilLayout />}
            >
              <Route path=":profileId" element={<Profile />} />
            </Route>

            <Route
              path="accounts/:profileId/account/:accountId"
              element={isLoggedIn && <AccountDetails />}
            />

            <Route path="*" element={<PageNotFound />} />
          
          </Routes>

          <Footer />
        </Router>
        <ToastContainer />
      </div>
    </>
  );
  
}

export default App;
