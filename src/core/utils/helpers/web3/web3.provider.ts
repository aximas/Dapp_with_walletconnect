import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { provider } from "web3-core";

//  Create WalletConnect Provider
export const web3Provider = new WalletConnectProvider({
  infuraId: "9aa3d95b3bc440fa88ea12eaa4456161",
  qrcode: true
});

export const web3 = new Web3(<provider & WalletConnectProvider>web3Provider);
