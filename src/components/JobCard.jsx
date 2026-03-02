import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";


function JobCard({ job }) {
    const { state, dispatch } = useContext(JobContext)
    const navigate = useNavigate()

    const handleViewDetails = () => {
        navigate(`/job/${job.id}`)
    }

    const handleSaveJob = () => {
        dispatch({ type: "SAVE_JOB", payload: job })
    }

    const isSaved = state.savedJobs.some(saved => saved.id === job.id)

    return (
        <div style={{
            border: "1px solid black",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "5px"
        }}
        >
            <h3>{job.title}</h3>
            <p>{job.company_name} | {job.candidate_required_location}</p>

            <button onClick={handleViewDetails} style={{ marginRight: "0.5rem" }}>
                View Details
            </button>

            <button onClick={handleSaveJob} disabled={isSaved}>
                {isSaved ? "Saved" : "Save Job"}
            </button>
        </div>
    )
}

export default JobCard