import { BrowserRouter } from "react-router-dom"
import FilterRoutes from "./filter.routes"

export default function Routes() {
    return (
        <BrowserRouter>
            <FilterRoutes />
        </BrowserRouter>
    )
}
