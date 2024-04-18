import axios from 'axios';

const API_URL = 'api.myyonseinft.com'; // prepare url
const META_BASE_URL = 'https://yonseinft.s3.amazonaws.com/MAJOR';

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
      axios.get(API_URL, { params }).then((response) => {
        return response.data;
      });
    } catch (e) {
      return e;
    }
  } else {
    return false;
  }
  return true;
}
