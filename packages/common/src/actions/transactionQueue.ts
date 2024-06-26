import type { PublicClient, Transport, Chain, Account, WalletActions, Client } from "viem";
import { writeContract as mud_writeContract } from "../writeContract";
import { sendTransaction as mud_sendTransaction } from "../sendTransaction";

export function transactionQueue<TChain extends Chain, TAccount extends Account>(
  publicClient?: PublicClient<Transport, TChain>,
): (
  client: Client<Transport, TChain, TAccount>,
) => Pick<WalletActions<TChain, TAccount>, "writeContract" | "sendTransaction"> {
  return (client) => ({
    // Applies to: `client.writeContract`, `getContract(client, ...).write`
    writeContract: (args) => mud_writeContract(client, args, publicClient),
    // Applies to: `client.sendTransaction`
    sendTransaction: (args) => mud_sendTransaction(client, args),
  });
}
