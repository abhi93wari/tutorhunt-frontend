const iState = {
    "name":"sandeep jha",
    "email":"test@gmail.com",
    "role":"student",
    "token":"qwertyuiop",
    "username":"thesandx",
    "objective":"XYZ",
    "tutorid":"123",
    "studentid":"456",
    "id":"789",
    "tutorlist":[]
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
        case "CHANGE_OBJ":
            return {
                ...state,
                "objective":action.payload
            }

        case "CHANGE_TUTORID":
            return {
                ...state,
                "tutorid":action.payload
            }
        case "CHANGE_STUDENTID":
            return {
                ...state,
                "studentid":action.payload
            }
        case "CHANGE_ID":
            return {
                ...state,
                "id":action.payload
            }
        case "CHANGE_TUTORLIST":
            return {
                ...state,
                "tutorlist":action.payload
            }
        

        default:
            return state;


    }
   
    
}

export default reducer;