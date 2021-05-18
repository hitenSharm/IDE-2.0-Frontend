import { showCodes } from "../api/api";

export const loggingIn = (data) =>{
    console.log(data);
    return {
        type:"LOGGING_IN",
        payload:data
    }
}

export const loggingOut = () =>{
    return {
        type:"LOGGING_OUT"
    }
}

export const changeCode = (data) =>{
    return{
        type:"CHANGE_CODE",
        payload:data
    }
}

export const changeLang = (data) =>{
    return{
        type:"CHANGE_LANG",
        payload:data
    }
}

export const saveCodeRedux = (data) =>{
    console.log(data);
    return{
        type:"SAVING_CODE",
        payload:data
    }
}

export const getInitalData = (jwtToken) => async dispatch => {
    try {
      console.log("sending codes");
        var metadata=await showCodes(jwtToken);
        dispatch({ type: "DATA_INITIALIZED", metadata, isDataInitialized: true });
    } catch (error) {
      console.log(error);
    }
  };

  