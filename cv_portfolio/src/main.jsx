import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import {About, Blog, Work, Contact,Resume} from './components/Pages/Pages.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <About/>
      },
      {
        path: "resume",
        element: <Resume/>
      },
      {
        path: "works",
        element: <Work/>
      },
      {
        path: "blogs",
        element: <Blog/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
