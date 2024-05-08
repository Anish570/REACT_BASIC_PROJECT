import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Register from "./Components/Register"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/register" element={<Register />} ></Route >
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/dashboard" element={<Dashboard />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
