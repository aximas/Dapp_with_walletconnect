import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectWallet } from "../../utils/helpers/web3/connect";
import { setLogged, setWalletAddress } from "./auth.slice";
import { disconnect } from "./../../utils/helpers/web3/disconnect";
import { getAccount } from "./../../utils/helpers/web3/getAccount";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (_, thunkAPI) => {
    await connectWallet();
    const walletAddress = await getAccount();

    if (walletAddress) {
      thunkAPI.dispatch(setLogged(true));
      thunkAPI.dispatch(setWalletAddress(walletAddress));
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    await disconnect();

    thunkAPI.dispatch(setLogged(false));
    thunkAPI.dispatch(setWalletAddress(""));
  }
);
