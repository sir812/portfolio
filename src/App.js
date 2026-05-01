import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home"

const About = lazy(() => import("./routes/About"));
const Project = lazy(() => import("./routes/Project"));
const Contact = lazy(() => import("./routes/Contact"));


function App() {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;