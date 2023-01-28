import { useState, useEffect } from "react";
import { FaUserShield } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset, rememberMe } from "../features/authSlice.js";
import Spinner from "../components/Spinner";

const Login = () => {
  const rememberLogin = JSON.parse(localStorage.getItem("rememberMe"));
  const [formData, setFormData] = useState({
    email: rememberLogin ? rememberLogin.email : "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    } else if (isSuccess) {
      localStorage.removeItem("rememberMe");
      toast.success("Secure Logged in");
      navigate("/profile");
      if (checked) {
        localStorage.removeItem("rememberMe");
        dispatch(rememberMe());
        navigate("/profile");
        toast.success("Remembered Logged in");
      }
    }
  }, [user, isError, isSuccess, message, navigate, dispatch, checked]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    if (!userData.email || !userData.password) {
      toast.error(
        "Wrong email or password"
      );
    } else {
      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <h1>
          <FaUserShield /> Sign In
        </h1>
        <p>Already a customer ?</p>

        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
