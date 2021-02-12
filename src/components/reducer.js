const iState = {
    "name":"sandeep jha",
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
        case "CHANGE_USER":
            return {
                ...state,
                "username":action.payload
            }
        case "CHANGE_EMAIL":
            return {
                ...state,
                "email":action.payload
            }
        case "CHANGE_ROLE":
            return {
                ...state,
                "role":action.payload
            }

        default:
            return state;


    }
   
    
}

export default reducer;