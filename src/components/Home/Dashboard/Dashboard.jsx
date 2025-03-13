import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DocumentList from "./DocumentList";


const Dashboard = () => {
  const [documents, setDocuments] = useState([]);

  const handleUpload = (file) => {
    if (file) {
      const newDoc = {
        id: Date.now(),
        name: file.name,
        url: URL.createObjectURL(file), // Create a temporary preview URL
        date: new Date().toLocaleString(),
      };
      setDocuments([newDoc, ...documents]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection onUpload={handleUpload} />
      <DocumentList documents={documents} />
    </div>
  );
};

export default Dashboard;
