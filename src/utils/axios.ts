import axios from 'axios';
import { MintResult, mintInfo, mintResponse } from './type';

const API_URL = 'http://ec2-44-220-217-48.compute-1.amazonaws.com:5555';
const API_PATH = {
  getUserInfo: 'getUserByAddress',
  postClaim: '/getUserNFTInfo',
  mint: 'mint',
  postReferral: '/postReferral',
};

export async function getUserByAdress(
  address: string | undefined,
): Promise<mintInfo> {
  const params = { address };

  try {
    const response = await axios.get<mintResponse>(
      `${API_URL}/${API_PATH.getUserInfo}`,
      { params },
    );
    if (response.data.results.length > 0) {
      const user = response.data.results[0];
      return {
        maxMintCount: user.maxMintCount,
        nftCount: user.nftCount,
      };
    }
    return {
      maxMintCount: 1,
      nftCount: 0,
    };
  } catch (error) {
    console.log(error);
    window.alert(
      '정보를 불러오는 데 실패하였습니다. 잠시 후에 다시 시도해 주세요.',
    );
    return {
      maxMintCount: 1,
      nftCount: 0,
    };
  }
}

export async function mint(
  address: string | undefined,
  major: string | undefined,
): Promise<MintResult> {
  try {
    // axios.post 메소드를 사용하여 서버에 데이터 전송
    const response = await axios.post<MintResult>(
      `${API_URL}/${API_PATH.mint}`,
      { address, major }, // 데이터를 본문에 직접 전달
    );

    // 응답 데이터 반환
    return {
      status: response.status,
      result: response.data.result,
      url: response.data.url,
    };
  } catch (error: any) {
    console.error(error);
    // 에러 발생 시 기본값 반환
    return { status: 403, result: error.response.data.result };
  }
}

export function postReferral(
  address: string | undefined,
  studentNumber: string,
) {
  const params = {
    address,
    studentNumber,
  };
  return axios
    .post(API_URL + API_PATH.postReferral, { params })
    .then((res) => {
      return res.data; // 여기서는 응답의 데이터만 반환하도록 함
    })
    .catch((error) => {
      window.alert(error.message);
      window.location.reload();
      return Promise.reject(error);
    });
}
