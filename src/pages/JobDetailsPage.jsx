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
            <h1>{job.title}</h1>
            <h2>{job.company_name}</h2>
            <p>Location: {job.candidate_required_location}</p>
            <p>{job.description}</p>

            <button onClick={handleSave}>Save Job</button>
        </div>
    )
}

export default JobDetailsPage