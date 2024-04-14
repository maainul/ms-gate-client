import { Route, Routes } from "react-router-dom"
import VehicleEntryList from "../Pages/VehicleEntryList"
import HomePage from "../Pages/HomePage"
import AddVehicle from "../Pages/AddVehicle"
import VehicleAnalytics from "../Pages/VehicleAnalytics"
import AddVisitor from "../Pages/AddVisitor"
import VisitorList from "../Pages/VisitorList"
import VisitorAnalytics from "../Pages/VisitorAnalytics"
import VisitorListMonth from "../Pages/VisitorListMonth";
import VisitorListYear from "../Pages/VisitorListYear";

const MyRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/gac/vehicle/add" element={<AddVehicle />} />
            <Route path="/gac/vehicle/list" element={<VehicleEntryList />} />
            <Route path="/gac/vehicle/analytics" element={<VehicleAnalytics />} />

            <Route path="/gac/visitor/add" element={<AddVisitor />} />
            <Route path="/gac/visitor/list" element={<VisitorList />} />
            <Route path="/gac/visitor/analytics" element={<VisitorAnalytics />} />

            <Route path="/gac/visitor/month" element={<VisitorListMonth />} />
            <Route path="/gac/visitor/year" element={<VisitorListYear />} />
        </Routes>
    )
}

export default MyRoutes