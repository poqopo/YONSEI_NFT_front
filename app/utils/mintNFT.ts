import axios from "axios";
const API_URL = "localhost:3000"; //prepare url
const META_BASE_URL = "";

export const mintNFT = (major: string, randum: number) => {
  const params = { tokenuri: `${META_BASE_URL}/${major}/${randum}.json}` };

  axios.post(API_URL, { params }).then((response) => {
    //request
    return response.data;
  });
};
