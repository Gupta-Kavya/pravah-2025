import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Navbarr from './components/Navbar';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <App />
    ),
  },
  {
    path: "/home",
    element: (
      <Home />
    ),
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <Navbarr/> */}
  <RouterProvider router={router} />

  </>

);


reportWebVitals();
