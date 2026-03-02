import { useContext } from "react";
import { JobContext } from "../context/JobContext";
import { Link } from "react-router-dom";


function DashboardPage() {
    const { state, dispatch } = useContext(JobContext)

    const handleChangeStatus = (job, status) => {
        dispatch({ type: "UPDATE_STATUS", payload: { job, status }
        })
    }

    if (state.savedJobs.length === 0) 
    return <p>No saved jobs yet. </p>

    return (
        <div>
            <h1>Saved Jobs</h1>
            {state.savedJobs.map((job) => (
                <div key={job.id} style={{ border: "1px solid black", margin: "1rem 0", padding: "0.5rem" }}>
                    <h2>{job.title}</h2>
                    <p>{job.company_name}</p>
                    <p>Status: {job.status || "None"}</p>
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                    <div>
                    <button onClick={() => handleChangeStatus(job, "Applied")}>Applied</button>
                    <button onClick={() => handleChangeStatus(job, "Interview")}>Interview</button>
                    <button onClick={() => handleChangeStatus(job, "Offer")}>Offer</button>
                    </div>
            </div>
        ))}
        </div>
    )
}

export default DashboardPage