import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"
import HomePage from "../Pages/HomePage"
import AddVehicle from "../Pages/AddVehicle"
import VehicleAnalytics from "../Pages/VehicleAnalytics"
import AddVisitor from "../Pages/AddVisitor"
import VisitorList from "../Pages/VisitorList"
import VisitorAnalytics from "../Pages/VisitorAnalytics"
import TestPage from "../Pages/TestPage"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/gac/home" element={<HomePage />} />
            <Route path="/gac/vehicle/add" element={<AddVehicle />} />
            <Route path="/gac/vehicle/list" element={<VehicleEntryList />} />
            <Route path="/gac/vehicle/analytics" element={<VehicleAnalytics />} />

            <Route path="/gac/visitor/add" element={<AddVisitor />} />
            <Route path="/gac/visitor/list" element={<VisitorList />} />
            <Route path="/gac/visitor/analytics" element={<VisitorAnalytics />} />
        </Routes>
    )
}

export default MyRoutes