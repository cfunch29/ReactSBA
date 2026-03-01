import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"
import { JobProvider } from 
import Navbar from 
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
