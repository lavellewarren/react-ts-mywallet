import { Route, Routes } from "react-router-dom"
import SignIn from "../pages/SignIn"

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    )
}
