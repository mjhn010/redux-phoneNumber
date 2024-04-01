import { keyboard } from "@testing-library/user-event/dist/keyboard"

let initialState = {
    contactList:[],
    keyword:''
}

function reducer(state=initialState,action){
    const {type,payload} = action
    switch(type){
        case "ADD_CONTACT":
        return {...state,contactList:[...state.contactList,{name:payload.name,phoneNumber:payload.phoneNumber}] }
        case "KEYWORD_NAME":
            return{...state,keyword:payload.keyword}
        default: return{...state}
    }
    
}

export default reducer