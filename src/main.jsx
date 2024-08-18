import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; import App from './App.jsx'
import './index.css'
import React, { useRef, useEffect, useState } from 'react';
import Landing from './pages/Landing.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />

  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>,
)
