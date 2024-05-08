import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import Parameter from './components/Parameter.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "github",
        loader: githubInfoLoader,
        element: <Github/>
      },
      {
        path: "user/:id",
        element: <Parameter/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
