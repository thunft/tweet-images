import { INFTCollection } from "../types/subgraph"

export interface Sorts {
  collectionId?: { asc: boolean },
  mintDate?: { asc: boolean },
  price?: { asc: boolean },
}

const sortNFTCollectionById = (collection: INFTCollection, otherCollection: INFTCollection, asc: boolean) => {
  if (asc) {
    return parseInt(otherCollection.collectionId) - parseInt(collection.collectionId)
  } else {
    return parseInt(collection.collectionId) - parseInt(otherCollection.collectionId)
  }
}

const sortNFTCollectionByPrice = (collection: INFTCollection, otherCollection: INFTCollection, asc: boolean) => {
  if (asc) {
    return parseFloat(collection.price) - parseFloat(otherCollection.price)
  } else {
    return parseFloat(otherCollection.price) - parseFloat(collection.price)
  }
}

const sortNFTCollectionByMintDate = (collection: INFTCollection, otherCollection: INFTCollection, asc: boolean) => {
  if (asc) {
    return new Date(otherCollection.mintDate).getTime() - new Date(collection.mintDate).getTime()
  } else {
    return new Date(collection.mintDate).getTime() - new Date(otherCollection.mintDate).getTime()
  }
}

export const getSortedNFTCollection = (NFTCollection: INFTCollection[], {
  collectionId,
  price,
  mintDate
}: Sorts) => {
  if (collectionId) {
    return NFTCollection.sort((a, b) => sortNFTCollectionById(a, b, collectionId.asc))
  }

  if (price) {
    return NFTCollection.sort((a, b) => sortNFTCollectionByPrice(a, b, price.asc))
  }

  if (mintDate) {
    return NFTCollection.sort((a, b) => sortNFTCollectionByMintDate(a, b, mintDate.asc))
  }

  return NFTCollection
}
