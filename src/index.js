import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AnimatedCursor from "react-animated-cursor"
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
import About from './components/About';
import Events from './components/Events';
import Aaveg from './components/Aaveg';

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <App />
    ),
  },
  {
    path: "/skit-pravah-2025",
    element: (
      <Home />
    ),
  },
  {
    path: "/about-skit-pravah-2025",
    element: (
      <About />
    ),
  },
  {
    path: "/skit-pravah-2025-events",
    element: (
      <Events />
    ),
  },
  {
    path: "/skit-pravah-2025-AAVEG",
    element: (
      <Aaveg />
    ),
  },
  {
    path: "/skit-pravah-2025-sponsors",
    element: (
      <Aaveg />
    ),
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <AnimatedCursor
  innerSize={8}
  outerSize={8}
  color='193, 11, 111'
  outerAlpha={0.2}
  innerScale={0.7}
  outerScale={5}
  clickables={[
    'a',
    'input[type="text"]',
    'input[type="email"]',
    'input[type="number"]',
    'input[type="submit"]',
    'input[type="image"]',
    'label[for]',
    'select',
    'textarea',
    'button',
    '.link'
  ]}
  style={{ zIndex: 3000 }} // Add z-index to the cursor's style
/> */}


<div className='hide-scrollbar' >
  <RouterProvider router={router} />
  </div>

  </>

);


reportWebVitals();
