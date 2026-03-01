import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { JobProvider } from "./context/JobContext"
import Navbar from "./components/Navbar"
import './App.css'

function App() {
  return (
    <JobProvider>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </JobProvider>
  )
}

export default App
