import { getNFTCollectionById } from "../subgraphApi";
import { getContractNFTCollections } from "../utils";

export const publishCollection = async (id: string) => {
  const nftCollectionsContract = getContractNFTCollections()
  const collection = await getNFTCollectionById(id.toString());

  if (!collection) return
  if (collection && collection.paymentPlan.toLocaleLowerCase() === "free") return

  const tx = await nftCollectionsContract.publishCollection(id);
  await tx.wait();

  console.log("collection published");
}