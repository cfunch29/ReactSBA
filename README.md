# React Web Application 
I wanted to build an app for a job search. I really like this concept because some job search platforms are too complex or have ads or don't have enough features or too many features. This app allows for users to browse the job postings on the remotive API and save them into a custom dashboard where they are able to select if they applied, interviewed or received an offer. It also has a feature in the navbar that shows how many jobs the user has saved to the dashboard. 

Routes 
-----
* Job Page (/)
* Job Details (/jobs/:jobId)
* Dashboard (/dashboard)

## Technologies Used 
- React 
- JS 
- CSS 
- Vite 
- At least 2 react hooks: 
    - useReducer
        cases:
        1. Fetch_Success 
        2. Save_Job
        3. Update_Status 
    - useContext 
    - useEffect 
    - useNavigate
    
API: [Remotive](https://remotive.com/remote-jobs/api)

## Reflection 
What could you have done differently during the planning stages of your project to make the execution easier?
- In the future I would focus on one page/route at a time. I would have started with just connecting the API first to see the job cards. Then move into the additional pages. 

What would you add to or change about your application if given more time?
I would add more error handling and more visually appealing styling including loading features. I would add a search filter and maybe a category filter. I would also utilize localStorage in some capacity. 