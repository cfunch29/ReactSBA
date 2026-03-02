import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JobContext } from "../context/JobContext";
import { fetchJobs } from "../services/jobService";


function JobsPage() {
    const { state, dispatch } = useContext(JobContext)
    const navigate = useNavigate()
     

    // Dummy jobs
    const dummyJobs = [
        { id: 1, title: "Frontend Developer", company_name: "Per Scholas", candidate_required_location: "Remote", description: "Build full state apps"},
        { id: 2, title: "Product Manager", company_name: "XYZ Tech", candidate_required_location: "Silicon Valley", description: "Build products"},
        { id: 3, title: "Emerging Developers", company_name: "Sync'd", candidate_required_location: "Remote", description: "Rotational engineering program"},
    ]

    useEffect(() => {
        const getJobs = async () => {  
            try {
                const data = await fetchJobs()
                console.log("Fetch jobs:", data)
                dispatch({ type: "FETCH_SUCCESS", payload: data })
            } catch (error) {
                dispatch({ type: "FETCH_ERROR", payload: error.message })
            }
        }
        getJobs()
    }, [dispatch])

    const handleJobClick = (id) => {
        navigate(`/jobs/${id}`)
    }

    const jobsDisplayed = state.jobs.length ? state.jobs : dummyJobs

    return (
        <div style={{ padding: "1rem" }}>
        <h1>Browse Jobs</h1>
        {state.error && <h2>Error: {state.error} </h2>}

       {jobsDisplayed.length === 0 ? (
         <p>No jobs found</p> )
        : (
            <div style={{ display: "grid", gap: "1rem" }}>

       {jobsDisplayed.map((job) => (
        <div key={job.id}
        onClick={() => handleJobClick(job.id)}
        style={{
            border: "1px solid black",
            padding: "1rem",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#f0f0f0")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
        >
            <h2>{job.title}</h2>
            <p>{job.company_name}</p>
            <p>{job.candidate_required_location}</p>
            </div>
             
    ))
       }
       </div>
   )
}
 </div>
)
}

export default JobsPage