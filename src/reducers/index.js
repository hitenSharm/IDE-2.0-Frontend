import { combineReducers } from "redux";

const INITIAL_STATE={
    name:null,
    email:null,
    token:null
};

const userDetails = (state = INITIAL_STATE, action) =>{    
    switch (action.type) {
        case 'LOGGING_IN':
            return{
                ...state,                
                name:action.payload.name,
                email:action.payload.email,
                token:action.payload.token
            }            
        case 'LOGGING_OUT':
            return{
                ...state,                
                name:null,
                email:null,
                token:null
            }
        default:
            return state;
    }
};

const codeData = (state = null,action) =>{
      if (action.type == "CHANGE_CODE") {
        return action.payload;
      }
      return state; 
}

const langData = (state = null,action) =>{   
    if(action.type=="CHANGE_LANG")
    {
        return action.payload;
    }  
    return state; 
}

const rootReducer = combineReducers({
    userDetails,
    codeData,
    langData
});

export default rootReducer;