import { Routes, Route } from "react-router-dom";
import JobsPage from "../pages/JobsPage";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<JobsPage />} />
            <Route path="/job/:id" element={<JobDetailsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    )
}

export default AppRoutes