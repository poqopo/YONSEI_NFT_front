// klip_test.js

import axios from 'axios';

const A2P_API_PREPARE_URL = 'https://a2a-api.klipwallet.com/v2/a2a/prepare'; // prepare url
const APP_NAME = 'MY YONSEI NFT';

const getKlipAccessUrl = (requestKey: string) => {
  return `https://klipwallet.com/?target=/a2a?requestKey=${requestKey}`;
};
type CallbackFunction = () => void;

export default function getAddress(
  setQrvalue: React.Dispatch<React.SetStateAction<string>>,
  callback: CallbackFunction,
) {
  axios
    .post(A2P_API_PREPARE_URL, {
      // prepare
      bapp: {
        name: APP_NAME,
      },
      type: 'auth',
    })
    .then((response) => {
      // request
      const { requestKey } = response.data;
      setQrvalue(getKlipAccessUrl(requestKey));
      const timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?requestKey=${requestKey}`,
          )
          .then((res) => {
            if (res.data.result) {
              callback(res.data.result.klaytn_address);
              clearInterval(timerId);
              setQrvalue('DEFAULT');
            }
          });
      }, 1000);
    });
}
