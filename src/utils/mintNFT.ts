import axios from 'axios';

const API_URL = 'https://api.myyonseinft.com/makeNFT'; // prepare url
const META_BASE_URL = 'https://myyonseinft.s3.amazonaws.com/MAJOR';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function getURL(major: string, max: number) {
  const random = getRandomInt(max);
  const imguri = `${META_BASE_URL}/${major}/img/${random}.png`;
  const tokenuri = `${META_BASE_URL}/${major}/json/${random}.json`;
  return { imguri, tokenuri };
}

export function mintNFT(address: string | undefined, tokenuri: string) {
  if (address !== undefined) {
    const params = {
      address,
      tokenuri,
    };
    try {
      axios.get(API_URL, { params });
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
  return true;
}

export function TEST() {
  try {
    for (let i = 0; i < 30; i += 1) {
      console.log(i);
      axios
        .get(
          'https://api.myyonseinft.com/makeNFT?tokenuri=https://yonseinft.s3.amazonaws.com/MAJOR/TEST/json/1.json&address=0x0380bb57500562DA6Da4789AE9D04669c28243F1',
        )
        .then((response) => {
          return response.data;
        });
    }
  } catch (e) {
    return e;
  }
}
