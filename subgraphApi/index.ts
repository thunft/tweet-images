import { GraphQLClient } from "graphql-request";
import { config } from "../config";
import { INFTCollection, IRawNFTCollection } from '../types/subgraph'
import { ethers } from 'ethers'
import { GET_ALL_NFT_COLLECTIONS, GET_NFT_COLLECTION_BY_ID, GET_PAYMENT_PLAN_HISTORY } from "../queries";
import { Filters, getFilteredNFTCollection } from "../utils/filters";
import { getSortedNFTCollection, Sorts } from "../utils/sorts";

const graphQLClient = new GraphQLClient(config.subgraphApiUrl);

export interface IPaymentPlanHistory {
  paymentPlan: string;
  startDate: string;
  paymentTxHash: string;
}

export const getPaymentPlanHistory = async (): Promise<IPaymentPlanHistory> => {
  return await graphQLClient.request(GET_PAYMENT_PLAN_HISTORY);
};

export const getNFTCollections = async (filters: Filters = {}, sorts: Sorts = {}): Promise<INFTCollection[]> => {
  const formatNFTCollection = (nftCollection: INFTCollection) => {
    return {
      ...nftCollection,
      totalSupply: ethers.utils.formatEther(nftCollection.totalSupply),
      mintDate: (new Date(parseInt(ethers.utils.formatEther(nftCollection.mintDate)) * 1000)).toString(),
      price: ethers.utils.formatEther(nftCollection.price),
      paymentPlan: nftCollection.paymentPlan.toLowerCase()
    }
  }

  const rawNftCollections: IRawNFTCollection = await graphQLClient.request(GET_ALL_NFT_COLLECTIONS)
  const nftCollections = rawNftCollections.collectionDatas.map(NFTCollection => formatNFTCollection(NFTCollection))

  const filteredNFTCollections = getFilteredNFTCollection(nftCollections, filters)
  const sortedNFTCollections = getSortedNFTCollection(filteredNFTCollections, sorts)
  return sortedNFTCollections
}

export const getNFTCollectionById = async (id: string): Promise<INFTCollection> => {
  const formatNFTCollection = (nftCollection: INFTCollection) => {
    return {
      ...nftCollection,
      totalSupply: ethers.utils.formatEther(nftCollection.totalSupply),
      mintDate: (new Date(parseInt(ethers.utils.formatEther(nftCollection.mintDate)) * 1000)).toString(),
      price: ethers.utils.formatEther(nftCollection.price),
      paymentPlan: nftCollection.paymentPlan.toLowerCase()
    }
  }

  const rawNftCollections: IRawNFTCollection = await graphQLClient.request(GET_NFT_COLLECTION_BY_ID, { collectionId: id })
  const nftCollections = rawNftCollections.collectionDatas.map(NFTCollection => formatNFTCollection(NFTCollection))
  return nftCollections[0]
}
