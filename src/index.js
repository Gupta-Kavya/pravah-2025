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
import Sponsors from './components/Sponsors';
import Teampravah from './components/Teampravah';
import Eventlist from './components/Eventlist';
import Eventdetails from './components/Eventdetails';
import Loader from './components/Loader';
import { HelmetProvider } from "react-helmet-async";
import Thirakgallery from './components/Thirakgallery';
import Rawazgallery from './components/Rawazgallery';
import Djnightgallery from './components/djnightgallery';
import Surgallery from './components/Surgallery';
import Celebritygallery from './components/Celebritygallery';
import AnnualDaygallery from './components/AnnualDaygallery';


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
      <Sponsors />
    ),
  },
  {
    path: "/the-team-behind-skit-pravah-2025",
    element: (
      <Teampravah />
    ),
  },
  {
    path: "/skit-pravah-2025-events/:eventcat",
    element: (
      <Eventlist />
    ),
  },
  {
    path: "/skit-pravah-2025-events/:eventcat/:eventid",
    element: (
      <Eventdetails />
    ),
  },
  {
    path: "/skit-pravah-2025-events-thirak-gallery",
    element: (
      <Thirakgallery />
    ),
  },
  {
    path: "/skit-pravah-2025-events-rawaz-gallery",
    element: (
      <Rawazgallery />
    ),
  },
  {
    path: "/skit-pravah-2025-events-djnight-gallery",
    element: (
      <Djnightgallery />
    ),
  },
  {
    path: "/skit-pravah-2025-events-Sur-gallery",
    element: (
      <Surgallery />
    ),
  },
  {
    path: "/skit-pravah-2025-events-Celebrity-gallery",
    element: (
      <Celebritygallery />
    ),
  },
  {
    path: "/skit-pravah-2025-events-AnnualDay-gallery",
    element: (
      <AnnualDaygallery />
    ),
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HelmetProvider>
      <Loader />
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
  style={{ zIndex: 10000 }} // Add z-index to the cursor's style
/> */}


      <div className='hide-scrollbar' >
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </>

);


reportWebVitals();
