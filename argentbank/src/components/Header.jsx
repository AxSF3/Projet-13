import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/authSlice";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, firstName, id } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
    toast.info("Log out done", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <header className="main-nav">
      <div className="main-nav-logo">
        <Link to="/">
          <img
            className="main-nav-logo-image"
            src="/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
      </div>
      <ul>
        {user ? (
          <div className="main-nav-items">
            <Link className="main-nav-item" to={`/profile/${id}`}>
              <FaUser />
              {firstName}
            </Link>

            <button className="main-nav-item" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        ) : (
          <>
            <div className="main-nav-items">
              <Link className="main-nav-item" to="login">
                <FaSignInAlt />
                Sign In
              </Link>
            </div>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
