import { async } from "@firebase/util"
import { signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, Facebook, Google } from "../../firebase/firebaseConfig"
import { typesLogin } from "../types/Types"

export const LoginSync= (email, password)=>({
    type: typesLogin.login,
    payload:{
        email,
        password
    }
})

export const LoginAsync= (email,password)=>{
    return async(dispatch)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            dispatch(LoginSync(email, password))
        })
        .catch((error)=> console.log(error))

    }
}

// LogOut
export const LogOutSync= ()=>({
    type: typesLogin.logout,
})

export const LogOutAsync= ()=>{
    return async (dispatch)=>{
        signOut(auth)
        .then(()=>{
            dispatch(LogOutSync())
        })
        .catch((error)=>console.log(error))
    }
}

//Login con Google

export const LoginGoogle= ()=>{
    return async(dispatch)=>{
        signInWithPopup(auth, Google)
        .then((user)=>{
            dispatch(user.email, user.displayName)

        })
        .catch((error)=>console.error)
    }
}

//Login con Facebook 

export const LoginFacebook= ()=>{
    return async(dispatch)=>{
        signInWithPopup (auth, Facebook)
        .then((user)=>{
            dispatch(user.email, user.displayName)
        })
        .catch((error)=>console.error)
    }
}