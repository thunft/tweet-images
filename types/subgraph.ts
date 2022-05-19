export interface IPayment {
  startDate: string,
  paymentPlan: string,
  paymentTxHash: string
}

export interface IPaymentPlanHistory {
  paymentList: IPayment[]
}

export interface INFTCollection {
  collectionId: string;
  name: string;
  description: string;
  owner: string;
  imageURI: string;
  blockchain: string;
  totalSupply: string;
  mintDate: string;
  price: string;
  websiteURL: string;
  twitter: string;
  discord: string;
  email: string;
  openseaURL: string;
  tags: string[];
  paymentPlan: string;
  isVariablePaymentPlan: boolean;
  status: string;
  paymentPlanHistory: IPaymentPlanHistory[];
}

export interface IRawNFTCollection {
  collectionDatas: INFTCollection[];
}
