import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import UserProvider from './context/userContext'
import { LayoutDashboard } from 'lucide-react'
import Dashboard from './pages/dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'

//https://buildyourresume-frontend.onrender.com

const App = () => {
  return (
    <UserProvider>
      <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/resume/:resumeId' element={<EditResume/>}></Route>
    </Routes>
    <Toaster toastOptions={{
      className:"",
      style:{
        fontSize:"13px"
      }
    }}>
    </Toaster>
    </UserProvider>
  )
}

export default App
