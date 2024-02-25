import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import E1 from "./Episodes_S1/E1";
import Home from "./CommonPages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/S1E1" element={<E1 />} />
                <Route path="/home" element={<Home />} />
                <Route path="/ThreejsMedium" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
