import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"
import HomePage from "../Pages/HomePage"
import AddVehicle from "../Pages/AddVehicle"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/gac/home" element={<HomePage />} />
            <Route path="/gac/vehicle/add" element={<AddVehicle />} />
            <Route path="/gac/list" element={<VehicleEntryList />} />
        </Routes>
    )
}

export default MyRoutes