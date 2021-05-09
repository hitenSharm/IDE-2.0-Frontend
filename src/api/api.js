import axios from 'axios';

const baseUrlAccount="http://localhost:3000/api/user/"

const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

export const registerUser = async (formData) =>{
  var res;  
  const url=baseUrlAccount+'register';
    console.log(url);
    await axios.post(url,formData,config).then((response) =>{                
        res=response.data;
    })
    return res;
}