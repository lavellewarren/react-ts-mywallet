import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

export default function FilterRoutes() {
    const { logged } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!logged && location.pathname.toLowerCase() !== "/signin") {
            navigate("/signin")
        }
        if (logged && location.pathname.toLowerCase() === "/signin") {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [logged, location.pathname])

    return <>{logged ? <AppRoutes /> : <AuthRoutes />}</>
}
