import { TransactionDescription } from "ethers/lib/utils";
import { ethers } from "ethers";
import { config } from "config";
import { getProvider } from "utils";

const TRANSFER_ABI = [
  "function transfer(address to, uint amount) returns (bool)",
];

const formatTransactionDescription = (
  transactionDescription: TransactionDescription
) => {
  return {
    to: transactionDescription.args[0],
    amount: ethers.utils.formatEther(transactionDescription.args[1]),
  };
};



export const getTransaction = async (txHash: string) => {
  const provider = getProvider();
  const tx = await provider.getTransaction(txHash);
  const txReceipt = await provider.getTransactionReceipt(txHash);
  const transferInterface = new ethers.utils.Interface(TRANSFER_ABI);
  const transactionDescription = transferInterface.parseTransaction({
    data: tx.data,
    value: tx.value,
  });
  const { to, amount } = formatTransactionDescription(transactionDescription);

  return {
    from: tx.from,
    to,
    amount,
    status: txReceipt ? "success" : "pending",
  };
};