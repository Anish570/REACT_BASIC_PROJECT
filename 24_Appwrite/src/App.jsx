
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './Utils/PrivateRoutes'


function App() {
  // const appwriteURL = String(import.meta.env.VITE_APPWRITEURL);
  // console.log("Appwrite url: ", appwriteURL);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
