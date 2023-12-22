import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './Components/Home/Home'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import AuthProvider from './Components/AuthContext/AuthProvider'


const route=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children:[{
    path:"/",
    element:<Home></Home>,
   loader:()=>fetch('http://localhost:5000/task')
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"register",
    element:<Register></Register>
  }

]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <RouterProvider router={route} ></RouterProvider>
  </React.StrictMode>,
 </AuthProvider>
)
