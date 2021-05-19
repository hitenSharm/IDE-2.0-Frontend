import { combineReducers } from "redux";

const INITIAL_STATE={
    name:null,
    email:null,
    token:null
};

const CODE_DEFAULT={
    metadata:[],
    isDataInitialized:false
}

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
      switch (action.type) {
          case "CHANGE_CODE":
              return action.payload;              
          case "REMOVE_IDE_CODE":
              return action.payload;
          default:
            return state;
      }
}

const langData = (state = null,action) =>{   
    if(action.type=="CHANGE_LANG")
    {
        return action.payload;
    }  
    return state; 
}

const codesInitial = (state=CODE_DEFAULT,action) =>{
    switch (action.type) {
        case "DATA_INITIALIZED":
          return {
            ...state,
            metadata: action.metadata,
            isDataInitialized: true
          };
        case "SAVING_CODE":
          return{
              ...state,
              metadata: [...state.metadata , action.payload]
          }
        case "REMOVE_CODES":
            return [];
        default:
            return state;
      }
}

const editModeRed = (state = false,action) =>{
    if(action.type==="EDIT_MODE_OFF")
    return false;

    if(action.type==="EDIT_MODE_ON")
    return true;

    return state;
}

const editCodeFileName = (state = null,action)=>{
    if(action.type==="SET_EDIT_NAME")
    {
        return action.payload;
    }
    return state;
}

const rootReducer = combineReducers({
    userDetails,
    codeData,
    langData,
    codesInitial,
    editModeRed,
    editCodeFileName
});

export default rootReducer;