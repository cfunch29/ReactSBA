import { Routes, Route } from "react-router-dom";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import DashboardPage from "../pages/DashboardPage";


function AppRoutes() {
    return (
        <Routes>
            {/* Main Page */}
            <Route path="/" element={<JobsPage />} />
            {/* Dashboard */}
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* job details */}
            <Route path="/job/:id" element={<JobDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes