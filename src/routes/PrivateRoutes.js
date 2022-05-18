import { Navigate } from "react-router-dom"

const PrivateRoutes= ({login,children})=>{
    return login ? children :
    <Navigate to="/"/>
}

export default PrivateRoutes