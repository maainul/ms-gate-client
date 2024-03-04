import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<VehicleEntryList />} />
        </Routes>
    )
}

export default MyRoutes