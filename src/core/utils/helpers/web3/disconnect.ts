import { web3Provider } from "./web3.provider";

export const disconnect = async () => {
  await web3Provider.disconnect();
};
