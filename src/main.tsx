import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Theme-provider";
import KycDashboard from "./components/Kycdashboard";
import Download from "./components/ThirdParty/Download";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<KycDashboard />} />
        </Routes>
        <Routes>
          <Route path="/download" element={<Download />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
