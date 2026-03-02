import { Link } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../context/JobContext";


function Navbar() {
    const { state } = useContext(JobContext)

    return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid black" }}>
        <Link to="/">Browse Jobs</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <span>Saved: {state.savedJobs.length}</span>
    </nav>
    )
}

export default Navbar