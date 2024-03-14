import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"
import HomePage from "../Pages/HomePage"
import AddVehicle from "../Pages/AddVehicle"
import VehicleAnalytics from "../Pages/VehicleAnalytics"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/gac/home" element={<HomePage />} />
            <Route path="/gac/vehicle/add" element={<AddVehicle />} />
            <Route path="/gac/vehicle/list" element={<VehicleEntryList />} />
            <Route path="/gac/vehicle/analytics" element={<VehicleAnalytics />} />
        </Routes>
    )
}

export default MyRoutes