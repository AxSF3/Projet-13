import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/api/authService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("accessToken"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  id: "",
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  isRemembered: false,
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const resp = await authService.login(user);
    return resp;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

// Get user
export const getProfil = createAsyncThunk(
  "profile/getProfil",
  async (thunkAPI) => {
    try {
      const res = await authService.getUser();
      return res.data.body;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(error);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Edit user
export const editUser = createAsyncThunk(
  "auth/editUser",
  async (user, thunkAPI) => {
    try {
      const data = await authService.edit(user);
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// authSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.id = "";
      state.email = "";
      state.password = "";
      state.firstName = "";
      state.lastName = "";
      state.isRemembered = false;
    },
    rememberMe: (state, action) => {
      state.isRemembered = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(getProfil.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfil.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(getProfil.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, rememberMe } = authSlice.actions;
export default authSlice.reducer;
