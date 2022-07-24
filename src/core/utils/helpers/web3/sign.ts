import { web3 } from "./web3.provider";

export const sign = async (message: string, account: string) => {
  let signature: string = "";
  await web3.eth.personal.sign(message, account, "1234", (err, res) => {
    if (err) return console.log(err);
    signature = res;
  });
  console.log("signature", signature);
  return signature;
};
