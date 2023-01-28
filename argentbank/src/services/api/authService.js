import axios from "axios";
const BASE_URL = "/api/v1/user/";

// Header
const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("accessToken"));

  if (token) {
    return {
      "Content-type": "application/json",
      authorization: "Bearer " + token,
      "X-Custom-Header": "header value",
    };
  } else {
    return {};
  }
};



// Edit user
const edit = async (userData) => {
  return await axios
    .put(BASE_URL + "profile", userData, {
      headers: authHeader(),
    })
    .then((response) => {
      return response.data;
    });
};

// Get user
const getUser = async () => {
  return await axios({
    method: "post",
    url: BASE_URL + "profile",
    headers: authHeader(),
  });
};

// Login user
const login = async (userData) => {
  return await axios.post(BASE_URL + "login", userData).then((response) => {
    if (response.data.body.token) {

      localStorage.setItem(
        "accessToken",
        JSON.stringify(response.data.body.token)
      );
    }
    return response.data;
  });
};

// Logout user
const logout = () => {
  if (localStorage.getItem("rememberMe")) {
    localStorage.removeItem("accessToken");
  } else {
    localStorage.clear();
  }
};

const authService = {
  authHeader,
  edit,
  login,
  getUser,
  logout,
};

export default authService;
