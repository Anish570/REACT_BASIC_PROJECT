
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoutes from './Utils/PrivateRoutes'
import { AuthProvider } from './Utils/AuthContext'


function App() {
  // const appwriteURL = String(import.meta.env.VITE_APPWRITEURL);
  // console.log("Appwrite url: ", appwriteURL);
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
