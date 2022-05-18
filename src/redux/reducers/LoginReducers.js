import { typesLogin } from "../types/Types";

export const LoginReducers = (state={},action)=>{
    switch (action.type) {
        case typesLogin.login:
            return {
                email:action.payload.email,
                password:action.payload.password
            }
        case typesLogin.logout:
            return{
                
            }
    
        default: return state
    }
}
