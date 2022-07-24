import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthReducer } from "./auth.types";

const initialState: AuthReducer = {
  isLogged: false,
  walletAddress: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogged: (state, action: PayloadAction<boolean>) => {
      return { ...state, isLogged: action.payload };
    },
    setWalletAddress: (state, action: PayloadAction<string>) => {
      return { ...state, walletAddress: action.payload };
    }
  }
});

export const {
  reducer: authReducer,
  actions: { setLogged, setWalletAddress }
} = authSlice;
