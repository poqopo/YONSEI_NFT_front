export interface userDetail {
  userAddress: string;
  studentNumber: string;
  maxMintableNumber: number;
  ownedNFTNumber: number;
  friendAddress: string;
  major: string;
}

// API 응답을 나타내는 인터페이스
export interface mintResponse {
  results: userDetail[];
}

// 함수의 반환 타입을 명시하는 인터페이스
export interface mintInfo {
  maxMintCount: number;
  nftCount: number;
}

export interface userInfo {
  userAddress: string;
  studentNumber: string;
}

export interface MintResult {
  status: number;
  result: string;
  url?: string;
}

export interface addUserResult {
  status: number;
  result: string;
}

export interface NFTDetail {
  tokenURI: string;
  nftName: string;
  description: string;
  major_KR: string;
}

// API 응답을 나타내는 인터페이스
export interface NFTReponse {
  results: NFTDetail[];
}
