import React from "react";
import  Card  from "../ui/Card";
import CardContent from "../ui/CardContent";

const DocumentList = ({ documents }) => {
    return (
      <section className="flex flex-wrap justify-center gap-4 p-4">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <Card key={doc.id} className="w-64 shadow-lg">
              <CardContent>
                <h3 className="text-lg font-medium">{doc.name}</h3>
                <img 
                  src={doc.url} 
                  alt={doc.name} 
                  className="w-full h-40 object-cover mt-2 rounded-md"
                />
                <p className="text-sm text-gray-500">Uploaded on: {doc.date}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">No documents uploaded yet.</p>
        )}
      </section>
    );
  };
  
  export default DocumentList;
