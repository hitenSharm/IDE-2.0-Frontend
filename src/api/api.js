import axios from "axios";

const baseUrlAccount = "http://localhost:3000/api/user/";
const baseUrlCode = "http://localhost:3000/coding/";
const saveCodeUrl = "http://localhost:3000/codesave/save";
const showCodesUrl = "http://localhost:3000/seeCodes/show";
const updateCodeUrl = "http://localhost:3000/update/updateCode"

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
    // console.log(resp);
  });
  return res;
};

export const saveCode = async (formData, tokenValue) => {
  var res;
  var configJWT = {
    headers: {
      "Content-type": "application/json",
      "auth-token": tokenValue,
    },
  };

  await axios.post(saveCodeUrl, formData, configJWT).then((resp) => {
    res = resp.data;
    // console.log(resp);
  });
  return res;
};

export const showCodes = async (tokenValue) => {
  var res;
  var configJWT = {
    headers: {
      "Content-type": "application/json",
      "auth-token": tokenValue,
    },
  };
  await axios.get(showCodesUrl, configJWT).then((resp) => {
    console.log("recieved");
    res = resp.data;
    // console.log(res);
  });
  return res;
};

export const updateCode = async (formData,token) =>{  
  var res
  var configJWT = {
    headers: {
      "Content-type": "application/json",
      "auth-token": token,
    },
  };
  await axios.put(updateCodeUrl,formData,configJWT).then((resp)=>{
    res=resp.data;
  });
  return res;
}