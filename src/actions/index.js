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