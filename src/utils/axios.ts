import axios from 'axios';

const API_URL = 'https://api.myyonseinft.com/makeNFT';
const API_PATH = {
  getRefInfo: '/getRefInfo',
  getUserNFTInfo: '/getUserNFTInfo',
  mint: '/mintNFT',
  postReferral: '/postReferral',
  joinEvent: '/joinEvent',
};

export function getRefInfo(address: string | undefined) {
  const params = {
    address,
  };
  axios
    .get(API_URL + API_PATH.getRefInfo, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      window.alert(error);
    });
}

export function getUserNFTInfo(address: string | undefined) {
  const params = {
    address,
  };
  axios
    .get(API_URL + API_PATH.getRefInfo, { params })
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
    .post(API_URL + API_PATH.mint, { params })
    .then((res) => {
      return res.data; // 여기서는 응답의 데이터만 반환하도록 함
    })
    .catch((error) => {
      window.alert(error.message);
      window.location.reload();
      return Promise.reject(error);
    });
}

export function postReferral(address: string | undefined) {
  const params = {
    address,
  };
  axios
    .post(API_URL + API_PATH.postReferral, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      window.alert(error);
    });
}

export function joinEvent(address: string | undefined, referral: string) {
  const params = {
    address,
    referral,
  };
  axios
    .post(API_URL + API_PATH.joinEvent, { params })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      window.alert(error);
    });
}

export async function share(dataUrl: string) {
  const blob = await axios.get(dataUrl).then((res) => {
    return res.data.blob(); // 여기서는 응답의 데이터만 반환하도록 함
  });
  const filesArray = [
    new File([blob], 'animation.png', {
      type: blob.type,
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
}
