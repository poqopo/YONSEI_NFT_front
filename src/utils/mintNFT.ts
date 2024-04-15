import axios from 'axios';

const API_URL = 'http://localhost:4000/makeNFT'; // prepare url
const META_BASE_URL = 'https://yonseinft.s3.amazonaws.com/MAJOR';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export default function mintNFT(
  address: string | undefined,
  major: string,
  maxRand: number,
) {
  const random = getRandomInt(maxRand);
  if (address !== undefined) {
    const params = {
      address,
      tokenuri: `${META_BASE_URL}/${major}/json/${random}.json`,
    };
    console.log(params);
    axios.get(API_URL, { params }).then((response) => {
      return response.data;
    });
  } else {
    return false;
  }
  return true;
}
