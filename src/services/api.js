import Axios from "axios";

const baseURL = `https://274dceae-eeba-4817-87e5-51b27dd7fe28.mock.pstmn.io`;

export function login() {
  return Axios({
    url: "/post",
    method: "POST",
    baseURL,
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  });
  // .then((res) => console.log(res))
  // .catch((error) => error);
}
