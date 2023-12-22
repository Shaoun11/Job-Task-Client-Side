import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './Components/Home/Home'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import AuthProvider from './Components/AuthContext/AuthProvider'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import Dashboard from './Components/Dashboard/Dashboard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AllUsers from './Components/Dashboard/AllUser'
import MyProfile from './Components/Dashboard/MyProfile'
import AddContest from './Components/Dashboard/AddContest'


const route=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children:[{
    path:"/",
    element:<Home></Home>,
   loader:()=>fetch('https://job-task-server-site-seven.vercel.app/task')
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"register",
    element:<Register></Register>
  },
  {
    path:"/dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
      path:"users",
      element:<AllUsers></AllUsers>
    },
    //   { 
    //   path:"addcontest",
    //   element:<AddContest></AddContest>
    // },
      {
      path:"/dashboard",
      element:<MyProfile></MyProfile>,
      
    },
    {
      path:"addedtask",
      element:<PrivateRoute><AddContest></AddContest></PrivateRoute>,
      loader:()=>fetch(`https://job-task-server-site-seven.vercel.app/task`) 
    },
    // {
    //   path:"updatedcontest",
    //   element:<PrivateRoute><UpdatedContest></UpdatedContest></PrivateRoute>,
    //   loader:()=>fetch(`https://12-server-site-assignment.vercel.app/contest`) 
    // },
    // {
    //   path:"managecontest",
    //   element:<AdminRoute><ManageContest></ManageContest></AdminRoute>,
    //   loader:()=>fetch(`https://12-server-site-assignment.vercel.app/allcontest`) 
    // }
  
  ]
  }

]
}])


const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>

<AuthProvider>
   <React.StrictMode>
    <RouterProvider router={route} ></RouterProvider>
  </React.StrictMode>,
 </AuthProvider>
  </QueryClientProvider>

)
