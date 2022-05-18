import { typesRegister } from "../types/Types";

export const RegisterReducers= (state={}, action)=>{
    switch (action.type) {
        case typesRegister.register:
            return {
                name:action.payload.name,
                email:action.payload.email,
                password:action.payload.password, 
            }
            
    
        default: return state
    }
}