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