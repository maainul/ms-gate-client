import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"
import HomePage from "../Pages/HomePage"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/vehicle/home" element={<HomePage />} />
            <Route path="/vehicle/list" element={<VehicleEntryList />} />
        </Routes>
    )
}

export default MyRoutes