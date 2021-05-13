import axios from "axios";

const baseUrlAccount = "http://localhost:3000/api/user/";
const baseUrlCode = "http://localhost:3000/coding/";

const config = {
  headers: {
    "Content-type": "application/json",
  },
};

export const registerUser = async (formData) => {
  var res;
  const url = baseUrlAccount + "register";
  await axios.post(url, formData, config).then((response) => {
    res = response.data;
  });
  return res;
};

export const loginUser = async (formData) => {
  var res;
  const url = baseUrlAccount + "login";
  await axios.post(url, formData, config).then((response) => {
    res = response.data;
  });
  return res;
};

export const codeRun = async (formData) => {
  var res;
  const url = baseUrlCode + "coderunner";
  await axios.post(url, formData, config).then((resp) => {
    res = resp.data;
    console.log(resp);
  });
  return res;
};
