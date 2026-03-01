import { Routes, Route } from "react-router-Dom"
import JobsPage from


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