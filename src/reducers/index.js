const user={
    login:true,
    name:null,
    email:null
};

export const userDetails = (state = user, action) =>{
    switch (action.type) {
        case 'LOGGING_IN':
            return{
                ...user,
                login:true,
                name=action.payload.data.name,
                email=action.payload.data.email
            }            
        case 'LOGGING_OUT':
            return{
                ...user,
                login:false,
                name=null,
                email=null
            }
        default:
            return state;
    }
}