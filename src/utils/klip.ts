// klip_test.js

import axios from 'axios';

const A2P_API_PREPARE_URL = 'https://a2a-api.klipwallet.com/v2/a2a/prepare'; // prepare url
const APP_NAME = 'MY YONSEI NFT';

type CallbackFunction = (address: string) => void;

async function requestKey() {
  const result = await axios.post(A2P_API_PREPARE_URL, {
    // prepare
    bapp: {
      name: APP_NAME,
    },
    type: 'auth',
  });
  return result.data.request_key;
}
const getKlipAccessUrl = (req: string) => {
  return `https://klipwallet.com/?target=/a2a?request_key=${req}`;
};

export async function getAddressPC(
  setQrvalue: React.Dispatch<React.SetStateAction<string>>,
  callback: CallbackFunction,
) {
  // request
  const request_key = await requestKey();
  setQrvalue(getKlipAccessUrl(request_key));
  const timerId = setInterval(() => {
    axios
      .get(
        `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`,
      )
      .then((res) => {
        if (res.data.result) {
          callback(res.data.result.klaytn_address);
          clearInterval(timerId);
          setQrvalue('DEFAULT');
        }
      });
  }, 1000);
}

export async function getAddressMB(callback: CallbackFunction) {
  // request
  const request_key = await requestKey();
  window.location.href = `kakaotalk://klipwallet/open?url=https://klipwallet.com/?target=/a2a?request_key=${request_key}`;
  const timerId = setInterval(() => {
    axios
      .get(
        `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`,
      )
      .then((res) => {
        if (res.data.result) {
          callback(res.data.result.klaytn_address);
          clearInterval(timerId);
        }
      });
  }, 1000);
}
