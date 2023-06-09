import React from 'react';

// Routing / API
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Styling
import "../src/styling/_app.scss";

// Routes
import Home from "./routes/Home"
import About from "./routes/About";
import Contact from "./routes/Contact";
import Events from "./routes/Events";
import Radio from "./routes/Radio";

// Components
import Navbar from "./components/Navbar";
import Community from "./routes/Community";

const routes = [
  { path: '/', name: 'Home', element: <Home /> },
  { path: '/about', name: 'About', element: <About /> },
  { path: '/radio', name: 'Radio', element: <Radio /> },
  { path: '/events', name: 'Events', element: <Events /> },
  { path: '/community', name: 'Community', element: <Community /> },
  { path: '/contact', name: 'Contact', element: <Contact /> },
];

// Redirects: Label / Merchandise

function App() {
  return (
      <div className="app-container">
      <Router>
          <div className="navbar-container">
            <Navbar routes={routes}/>
          </div>
          <div className="content-container">
            <Routes>
              {routes.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element}/>
              ))}
            </Routes>
          </div>
      </Router>
      </div>
  );
}

export default App;
