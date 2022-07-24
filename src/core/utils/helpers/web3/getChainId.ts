import { web3 } from "./web3.provider";

export const getChainId = async () => {
  const chainId = await web3.eth.getChainId();
  console.log("chainId", web3.utils.toHex(chainId));
  return chainId;
};
