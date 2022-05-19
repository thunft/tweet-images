import { gql } from "graphql-request";

export const GET_PAYMENT_PLAN_HISTORY = gql`
  {
    paymentPlanHistories {
      collectionId
      startDate
      paymentPlan
      paymentTxHash
    }
  }
`;

export const GET_ALL_NFT_COLLECTIONS = gql`
{
  collectionDatas {
    collectionId
    name
    owner
    description
    imageURI
    blockchain
    totalSupply
    mintDate
    price
    websiteURL
    twitter
    discord
    email
    openseaURL
    tags
    status
    paymentPlan
    isVariablePaymentPlan
    paymentPlanHistory {
      paymentList {
        startDate
        paymentPlan
        paymentTxHash
      }
    }
  }
}
`

export const GET_NFT_COLLECTION_BY_ID = gql`
query getNftCollection($collectionId: BigInt!) {
  collectionDatas(where: { collectionId: $collectionId }) {
    collectionId
    name
    owner
    description
    imageURI
    blockchain
    totalSupply
    mintDate
    price
    websiteURL
    twitter
    discord
    email
    openseaURL
    tags
    status
    paymentPlan
    isVariablePaymentPlan
  }
}
`
