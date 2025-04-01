import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from "./routes/Login";
import ErrorPage from "./routes/ErrorPage";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "login-in-travel-auth-react/",
    element: <Navigate to="./login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "login-in-travel-auth-react/login",
    element: <Login/>,
  },

  {
    path: "login-in-travel-auth-react/app",
    element: <App/>,
  },


]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
