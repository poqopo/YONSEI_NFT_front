export interface userDetail {
  userAddress: string;
  studentNumber: string;
  maxMintableCount: number;
  ownedNFT: number;
  friendAddress: string;
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

export interface MintResult {
  status: number;
  result: string;
  url?: string;
}
