import { createContext, useReducer } from "react";
import { jobReducer, initialState } from "../reducer/jobReducer";

export const JobContext = createContext()

export function JobProvider({ children }) {
    const [state, dispatch] = useReducer(jobReducer, initialState)

return (
    <JobContext.Provider value={{ state, dispatch }}>
        {children}
    </JobContext.Provider>
)
}