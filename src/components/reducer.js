const iState = {
    "name":"sandeep kumar jha",
    "email":"test@gmail.com",
    "role":"student",
    "token":"qwertyuiop",
    "username":"thesandx"
}

const reducer = (state = iState,action)=>{

    switch(action.type){
        case "CHANGE_NAME":
            return {
                ...state,
                "name":action.payload
            }
        
        case "CHANGE_TOKEN":
            return {
                ...state,
                "token":action.payload
            }

        default:
            return state;


    }
   
    
}

export default reducer;