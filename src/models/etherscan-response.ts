 interface Result {
  LastBlock: string;
  SafeGasPrice: string;
  ProposeGasPrice: string;
  FastGasPrice: string;
  suggestBaseFee: string;
  gasUsedRatio: string;
}

export interface EtherscanResponse {
  status: string;
  message: string;
  result: Result;
}
