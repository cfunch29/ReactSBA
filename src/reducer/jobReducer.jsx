export const initialState = {
    jobs: [],
    savedJobs: [],
    error: null
};

export const jobReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                ...state,
                jobs: action.payload,
                error: null
            }
        case "SAVE_JOB":
            const alreadySaved = 
            state.savedJobs.find(job => job.id === action.payload.id)
            if (alreadySaved) return state

            return {
                ...state,
                savedJobs: [...state.savedJobs,
                { ...action.payload, status: "Saved" }]
            }

        case "UPDATE_STATUS":
            return {
                ...state,
                savedJobs: state.savedJobs.map(job =>
                    job.id === action.payload.id
                        ? { ...job, status: action.payload.status }
                        : job
                )
            }
        default:
            return state

    }
} 