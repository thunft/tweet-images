import { INFTCollection } from "../types/subgraph"

export interface Filters {
  status?: string | string[],
  collectionId?: string,
  walletAddress?: string,
  mintDate?: string,
  paymentPlan?: string | string[],
  tags?: string | string[],
  blockchain?: string | string[],
  isVariablePaymentPlan?: boolean,
  paymentPlanOfPlanHistory?: string | string[]
}

const filterNFTCollectionByStatus = (collection: INFTCollection, status: string | string[]) => {
  if (typeof status === "string") {
    return collection.status === status
  } else {
    return status.includes(collection.status)
  }
}

const filterNFTCollectionByTags = (collection: INFTCollection, tags: string | string[]) => {
  if (typeof tags === "string") {
    return collection.tags.includes(tags)
  } else {
    return tags.some(tag => collection.tags.includes(tag))
  }
}

const filterNFTCollectionByBlockchain = (collection: INFTCollection, blockchain: string | string[]) => {
  if (typeof blockchain === "string") {
    return collection.blockchain === blockchain
  }
  return blockchain.includes(collection.blockchain)
}

const filterNFTCollectionById = (collection: INFTCollection, id: string) => {
  return collection.collectionId === id
}

const filterNFTCollectionByWalletAddress = (collection: INFTCollection, walletAddress: string) => {
  return collection.owner === walletAddress
}

const filterNFTCollectionByMintDate = (collection: INFTCollection, mintDate: string) => {
  return new Date(collection.mintDate).getTime() > new Date(mintDate).getTime()
}

const filterNFTCollectionByPaymentPlan = (collection: INFTCollection, paymentPlan: string | string[]) => {
  if (typeof paymentPlan === "string") {
    return collection.paymentPlan === paymentPlan
  } else {
    return paymentPlan.includes(collection.paymentPlan)
  }
}

const filterNFTCollectionByIsVariablePlan = (collection: INFTCollection, isVariablePlan: boolean) => {
  return collection.isVariablePaymentPlan === isVariablePlan
}

const filterNFTCollectionByPaymentPlanOfPlanHistory = (collection: INFTCollection, paymentPlan: string | string[]) => {
  const isPayments = collection.paymentPlanHistory[0].paymentList.length > 0
  if (typeof paymentPlan === "string") {
    return isPayments && collection.paymentPlanHistory[0].paymentList[0].paymentPlan === paymentPlan
  } else {
    return isPayments && paymentPlan.includes(collection.paymentPlanHistory[0].paymentList[0].paymentPlan)
  }
}

export const getFilteredNFTCollection = (NFTCollection: INFTCollection[], {
  status,
  collectionId,
  walletAddress,
  mintDate,
  paymentPlan,
  tags,
  blockchain,
  isVariablePaymentPlan,
  paymentPlanOfPlanHistory
}: Filters) => {
  let filtered = NFTCollection

  if (status) {
    filtered = filtered.filter(collection => filterNFTCollectionByStatus(collection, status))
  }

  if (collectionId) {
    filtered = filtered.filter(collection => filterNFTCollectionById(collection, collectionId))
  }

  if (walletAddress) {
    filtered = filtered.filter(collection => filterNFTCollectionByWalletAddress(collection, walletAddress))
  }

  if (mintDate) {
    filtered = filtered.filter(collection => filterNFTCollectionByMintDate(collection, mintDate))
  }

  if (paymentPlan) {
    filtered = filtered.filter(collection => filterNFTCollectionByPaymentPlan(collection, paymentPlan))
  }

  if (isVariablePaymentPlan) {
    filtered = filtered.filter(collection => filterNFTCollectionByIsVariablePlan(collection, isVariablePaymentPlan))
  }

  if (tags) {
    filtered = filtered.filter(collection => filterNFTCollectionByTags(collection, tags))
  }

  if (blockchain) {
    filtered = filtered.filter(collection => filterNFTCollectionByBlockchain(collection, blockchain))
  }

  if (paymentPlanOfPlanHistory) {
    filtered = filtered.filter(collection => filterNFTCollectionByPaymentPlanOfPlanHistory(collection, paymentPlanOfPlanHistory))
  }

  return filtered
}
