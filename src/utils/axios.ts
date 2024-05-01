import axios from 'axios';

const API_URL = 'https://api.myyonseinft.com/makeNFT';
const API_PATH = {
  getUserInfo: '/getUserInfo',
  postClaim: '/getUserNFTInfo',
  mintNFT: '/mintNFT',
  postReferral: '/postReferral',
};

export function getUserInfo(address: string | undefined) {
  const params = {
    address,
  };
  axios
    .get(API_URL + API_PATH.getUserInfo, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      window.alert(error);
    });
}

export function postClaim(address: string | undefined) {
  const params = {
    address,
  };
  axios
    .post(API_URL + API_PATH.postClaim, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      window.alert(error);
    });
}

export function mintNFT(
  address: string | undefined,
  major: string | undefined,
) {
  const params = {
    address,
    major,
  };

  return axios
    .post(API_URL + API_PATH.mintNFT, { params })
    .then((res) => {
      return res.data; // 여기서는 응답의 데이터만 반환하도록 함
    })
    .catch((error) => {
      window.alert(error.message);
      window.location.reload();
      return Promise.reject(error);
    });
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
