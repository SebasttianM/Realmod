import { Navigate } from "react-router-dom"

const PublicRoutes= ({login,children})=>{
    return !login ? children :
    <Navigate to="/*" />
}

export default PublicRoutes