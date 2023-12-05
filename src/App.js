import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard';
import { loader as dashboardLoader } from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage />,
    children:[
      { 
        index:true,
        element:<HomePage />
      },
      {
        path:'login',
        element:<LoginPage />
      },
      {
        path:'register',
        element:<RegisterPage />
      },
      {
        path:'dashboard',
        element: <ProtectedRoute Page ={Dashboard} /> ,
        loader:dashboardLoader,
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
