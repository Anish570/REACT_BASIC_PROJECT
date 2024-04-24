import { useState } from 'react'
import Dashboard from './Components/pages/Dashboard/Dashboard'
import Support from './Components/pages/Support/Support'
import Transactions from './Components/pages/Transaction/Transaction'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
