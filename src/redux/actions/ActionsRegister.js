import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig"
import { typesRegister } from "../types/Types"

export const RegisterSync= (name,email,password)=>({
    type: typesRegister.register,
    payload:{
        name,
        email,
        password
    }
})

export const RegisterAsync= (name,email,password)=>{
    return async(dispatch)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(async(user)=>{
            await updateProfile(auth.currentUser,{displayName:name})
            dispatch(RegisterSync(name,email,password))
        })
        .catch((error)=>console.log(error))

    }
}