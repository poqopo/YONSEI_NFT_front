import axios from 'axios';
import {
  MintResult,
  NFTDetail,
  NFTReponse,
  addUserResult,
  mintResponse,
  userDetail,
} from './type';

const API_URL = 'https://api.myyonseinft.com';
const API_PATH = {
  getUserInfo: 'getUserByAddress',
  mint: 'mint',
  registerFriend: 'registerFriend',
  addNewUser: 'addNewUser',
  getNFTsByUserAddress: 'getNFTsByUserAddress',
};
const DEFAULT = 'DEFAULT';

export async function getUserByAdress(
  address: string | undefined,
): Promise<userDetail> {
  const params = { userAddress: address };

  try {
    const response = await axios.get<mintResponse>(
      `${API_URL}/${API_PATH.getUserInfo}`,
      { params },
    );
    if (response.data.results.length > 0) {
      const user = response.data.results[0];
      return {
        userAddress: user.userAddress,
        studentNumber: user.studentNumber,
        maxMintableNumber: user.maxMintableNumber,
        ownedNFTNumber: user.ownedNFTNumber,
        friendAddress: user.friendAddress,
        major: user.major,
      };
    }
    return {
      userAddress: DEFAULT,
      studentNumber: DEFAULT,
      maxMintableNumber: 1,
      ownedNFTNumber: 0,
      friendAddress: '',
      major: DEFAULT,
    };
  } catch (error) {
    console.log(error);
    window.alert(
      '정보를 불러오는 데 실패하였습니다. 잠시 후에 다시 시도해 주세요.',
    );
    return {
      userAddress: DEFAULT,
      studentNumber: DEFAULT,
      maxMintableNumber: 1,
      ownedNFTNumber: 0,
      friendAddress: '',
      major: DEFAULT,
    };
  }
}

export async function getUserNFTs(
  address: string | undefined,
): Promise<NFTDetail[]> {
  const params = { userAddress: address };

  try {
    const response = await axios.get<NFTReponse>( // NFTDetail[] 타입으로 지정
      `${API_URL}/${API_PATH.getNFTsByUserAddress}`,
      { params },
    );
    const res: NFTDetail[] = response.data.nftsResults; // response.data는 NFTDetail[] 타입
    if (res.length > 0) {
      return res; // NFTReponse 객체로 반환
    }
    window.alert('아직 NFT를 민팅하지 않았습니다. NFT 민팅 후에 들어와주세요!');
    return []; // 빈 배열을 가진 NFTReponse 객체로 반환
  } catch (error) {
    console.log(error);
    window.alert(
      '정보를 불러오는 데 실패하였습니다. 잠시 후에 다시 시도해 주세요.',
    );
    return []; // 에러 발생 시 기본값을 가진 NFTReponse 객체로 반환
  }
}

export async function mint(
  userAddress: string | undefined,
  major: string | undefined,
): Promise<MintResult> {
  try {
    // axios.post 메소드를 사용하여 서버에 데이터 전송
    const response = await axios.post<MintResult>(
      `${API_URL}/${API_PATH.mint}`,
      { userAddress, major }, // 데이터를 본문에 직접 전달
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

export async function registerFriend(
  address: string | undefined,
  friendStudentNumber: string | undefined,
): Promise<MintResult> {
  try {
    // axios.post 메소드를 사용하여 서버에 데이터 전송
    const response = await axios.post<MintResult>(
      `${API_URL}/${API_PATH.registerFriend}`,
      { userAddress: address, friendStudentNumber }, // 데이터를 본문에 직접 전달
    );
    // 응답 데이터 반환
    return {
      status: response.status,
      result: response.data.result,
    };
  } catch (error: any) {
    console.error(error);
    // 에러 발생 시 기본값 반환
    return { status: 403, result: error.response.data.result };
  }
}

export async function addNewUser(
  userAddress: string | undefined,
  studentNumber: string | undefined,
  major: string | undefined,
): Promise<addUserResult> {
  try {
    let user;
    if (studentNumber?.startsWith('0000')) {
      user = userAddress;
    } else {
      user = studentNumber;
    }
    console.log(user);
    // axios.post 메소드를 사용하여 서버에 데이터 전송
    const response = await axios.post<addUserResult>(
      `${API_URL}/${API_PATH.addNewUser}`,
      { userAddress, studentNumber: user, major }, // 데이터를 본문에 직접 전달
    );
    // 응답 데이터 반환
    return {
      status: response.status,
      result: response.data.result,
    };
  } catch (error: any) {
    console.error(error);
    // 에러 발생 시 기본값 반환
    return { status: 403, result: error.response.data.result };
  }
}
