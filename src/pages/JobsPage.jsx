import { useEffect, useContext } from "react";
import { JobContext } from "../context/JobContext";
import { fetchJobs } from "../services/jobService";
import JobCard from "../components/JobCard"

function JobsPage() {
    const { state, dispatch } = useContext(JobContext)

    useEffect(() => {
        const getJobs = async () => {
            dispatch({ type: "FETCH_START" })

            try {
                const data = await fetchJobs()
                dispatch({ type: "FETCH_SUCCESS", payload: data })
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message })
            }
        }
        getJobs()
    }, [dispatch])
    if (state.error) {
        return <h2>Error: {state.error}</h2>
    }
    return (
        <div>
        <h1>Browse Jobs</h1>
        {state.jobs.length === 0 ? (
            <p>No jobs found</p>
        ) : (
            state.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))
        )}
        </div>
    )
}

export default JobsPage