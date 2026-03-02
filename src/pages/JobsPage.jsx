import { useEffect, useContext } from "react";
import { JobContext } from "../context/JobContext";
import { fetchJobs } from "../services/jobService";
import JobCard from "../components/JobCard"


function JobsPage(){
    return (
        <div>
            <h1 style={{ color: "red" }}>DO YOU SEE ME?</h1>
        </div>
    )
}


// function JobsPage() {
//     const { state, dispatch } = useContext(JobContext)

//      console.log("JobsPage render, jobs:", state.jobs)
     
//     useEffect(() => {
//         const getJobs = async () => {  
//             try {
//                 const data = await fetchJobs()
//                 console.log("Fetch jobs:", data)
//                 dispatch({ type: "FETCH_SUCCESS", payload: data })
//             } catch (error) {
//                 dispatch({ type: "FETCH_ERROR", payload: error.message })
//             }
//         }
//         getJobs()
//     }, [dispatch])

//     const dummyJobs = [
//         { id: 1, title: "Test Job", company_name: "Per Scholas", candidate_required_location: "Remote" }
//     ]
//     if (state.error) {
//         return <h2>Error: {state.error}</h2>
//     }
//     return (
//         <div>
//         <h1>Browse Jobs</h1>
//         {state.error && <h2>Error: {state.error} </h2>}
//         {(state.jobs.length ? state.jobs : dummyJobs).map((job) => <JobCard key={job.id} job={job} />)}
//         {/* // (
//         //     <p>No jobs found</p>
//         // ) : (
//         //     state.jobs.map((job) => (
                
//         //     ))
//         )} */}
//         </div>
//     )
// }

export default JobsPage