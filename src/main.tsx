import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Theme-provider";
import KycDashboard from "./components/Kycdashboard";
import Download from "./components/ThirdParty/Download";
import Home from "./components/Home/pages/Home.jsx"
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
              <Route path="/" element={<KycDashboard />} />
              <Route path="/download" element={<Download />} />
              <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
