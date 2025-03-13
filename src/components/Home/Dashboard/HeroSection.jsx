import React, { useState } from "react";
import Input  from "../ui/Input";
import Button  from "../ui/Button";
import { Upload } from "lucide-react";

const HeroSection = ({ onUpload }) => {
    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);  // Store the selected file
    };
  
    const handleUpload = () => {
      if (file) {
        onUpload(file);  // Pass the file to Dashboard component
        setFile(null);
      }
    };
  
    return (
      <section className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Documents</h2>
        <div className="flex gap-2">
          <Input 
            type="file" 
            onChange={handleFileChange} 
            className="p-2 border rounded-md"
          />
          <Button onClick={handleUpload} className="flex items-center gap-2">
            <Upload className="w-5 h-5" /> Upload
          </Button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  
