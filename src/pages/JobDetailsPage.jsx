import { useContext } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "../context/JobContext";


function JobDetailsPage() {
    const { state, dispatch } = useContext(JobContext)
    const { jobId } = useParams()

    const job = state.jobs.find((jobMatch) => jobMatch.id === parseInt(jobId))

    if (!job) return <p>Job not found</p>

    const handleSave = () => {
        dispatch({ type: "SAVE_JOB", payload: job })
    }

    return (
        <div>
            <div className="job-details">
                <div className="job-card">
            <h1>{job.title}</h1>
            <h2>{job.company_name}</h2>
            <p className="location">Location: {job.candidate_required_location}</p>
            
            <div className="description">
                <h3>Job Description</h3>
                <p>{job.description}</p>
                </div>

            <button 
            onClick={handleSave}
            disabled={state.savedJobs.some((jobMatch) => jobMatch.id === job.id)}
            className="save-btn"
            >
            {state.savedJobs.some((jobMatch) => jobMatch.id === job.id) 
            ? "Saved" : "Save Job"}
            </button>
        </div>
        </div>
        </div>
    )
}

export default JobDetailsPage