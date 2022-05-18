import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import { auth } from "../firebase/firebaseConfig";
import DashRoutesRoute from "./DashRoutesRoute";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function App() {
    const [login, setLogin] = useState(false);

    const [checking, setChecking] = useState(true);

    const [dataUserLog, setDataUserLog] = useState({
        email:'',
        displayName:'',
        photoURL:'',
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user?.uid) {
                setLogin(true);
                setDataUserLog({
                    email: user.email,
                    displayName: user.displayName,
                    photoURL:user.photoURL,
                })
            } else {
                setLogin(false);
            }
            setChecking(false);
        });
    }, [setChecking, setLogin]);

    if (checking) {
        return <div>Checking</div>;
    }
    console.log(dataUserLog)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoutes login={login}>
                            <Login />
                        </PublicRoutes>
                    }
                />
                <Route path="/*" element={
                  <PrivateRoutes login={login}>
                    <DashRoutesRoute dataUserLog={dataUserLog}/>
                  </PrivateRoutes>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
