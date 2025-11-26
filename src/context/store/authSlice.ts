import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: any; // Replace with your user type
  token: string;
  isLoading: boolean;
}

interface AuthData {
  auth: AuthState;
  user: any[]; // Replace with your user type
  status: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: "",
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action: PayloadAction<AuthData>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.token = action.payload.auth.token;
      state.isLoading = false;
    },
    unAuthenticate: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { authenticate, unAuthenticate, setLoading } = authSlice.actions;

export default authSlice.reducer;
