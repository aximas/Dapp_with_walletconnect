import { web3 } from "./web3.provider";

export const getAccount = async () => {
  //  Get Accounts
  const [accounts] = await web3.eth.getAccounts();

  console.log("accounts", accounts);

  return accounts;
};
