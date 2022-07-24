import { web3Provider } from "./web3.provider";

export const connectWallet = async () => {
  //  Enable session (triggers QR Code modal)
  try {
    console.log("connectWallet try");
    await web3Provider.enable();
  } catch (e) {
    console.warn(e);
  }
};
