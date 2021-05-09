export const loggingIn = (data) =>{
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