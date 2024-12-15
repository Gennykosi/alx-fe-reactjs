import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components (example components - you can create these)
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <h1>My Application</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
