import React, { useState } from "react";
import { Search, User, Mail, CheckCircle, XCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

// Button Component
const Button: React.FC<{ className?: string; size?: string; variant?: string; onClick?: () => void; disabled?: boolean; children: React.ReactNode }> = ({
  className,
  size,
  variant,
  onClick,
  disabled,
  children,
}) => {
  const classes = `inline-flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm transition duration-200 ${
    variant === "outline" ? "border-indigo-500 bg-white text-indigo-500 hover:bg-indigo-100" : "text-white bg-indigo-600 hover:bg-indigo-700"
  } ${className} ${size === "sm" ? "text-sm px-3 py-1" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

// Input Component
const Input: React.FC<{ id: string; placeholder?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; disabled?: boolean }> = ({ id, placeholder, value, onChange, disabled }) => (
  <input
    id={id}
    className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200"
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

// Alert Components
const Alert: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => <div className={`p-4 rounded-lg ${className}`}>{children}</div>;
const AlertTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="font-semibold mb-1">{children}</h4>;
const AlertDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="text-sm">{children}</p>;

type ApprovalStatus = "not_sent" | "pending" | "approved" | "rejected";

export default function SearchPage() {
  const [searchId, setSearchId] = useState("");
  const [docType, setDocType] = useState("");
  const [searchResults, setSearchResults] = useState<{ id: string; type: string; email: string } | null>(null);
  const [approvalStatus, setApprovalStatus] = useState<ApprovalStatus>("not_sent");

  const handleSearch = () => {
    if (searchId && docType) {
      setSearchResults({ id: searchId, type: docType, email: `user-${searchId}@example.com` });
      setApprovalStatus("pending");

      setTimeout(() => {
        setApprovalStatus(Math.random() > 0.3 ? "approved" : "rejected");
      }, 5000);
    }
  };

  const handleReset = () => {
    setSearchId("");
    setDocType("");
    setSearchResults(null);
    setApprovalStatus("not_sent");
  };

  const renderApprovalStatus = () => {
    if (approvalStatus === "pending") {
      return (
        <Alert className="mt-6 border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300">
          <Clock className="h-4 w-4 text-yellow-500" />
          <AlertTitle>Waiting for Approval</AlertTitle>
          <AlertDescription>
            An email has been sent to <span className="font-semibold">{searchResults?.email}</span>. Once the user verifies, you will be able to access the document.
          </AlertDescription>
        </Alert>
      );
    }

    switch (approvalStatus) {
      case "approved":
        return (
          <Alert className="mt-6 border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-300">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <AlertTitle>Access granted</AlertTitle>
            <AlertDescription>
              The user has approved access to the document. You can now view it below.
            </AlertDescription>
            <div className="mt-4 rounded-md border p-4 bg-white dark:bg-gray-800">
              <h3 className="font-medium mb-2">
                {docType} #{searchId}
              </h3>
              <p className="text-sm text-muted-foreground">Document content would appear here...</p>
              <Button className="mt-4" size="sm">
                Download Document
              </Button>
            </div>
          </Alert>
        );
      case "rejected":
        return (
          <Alert className="mt-6 border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-300">
            <XCircle className="h-4 w-4 text-red-500" />
            <AlertTitle>Access denied</AlertTitle>
            <AlertDescription>
              The user has denied access to the document. Please contact them directly if you need access.
            </AlertDescription>
            <Button variant="outline" className="mt-4" onClick={handleReset}>
              Start New Search
            </Button>
          </Alert>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-gray-100 shadow-md border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-semibold flex items-center gap-2">
            <Search className="w-6 h-6 text-indigo-600" />
            DocSearch
          </Link>
          <Link to="/profile" className="flex items-center text-sm text-gray-600 hover:text-indigo-500">
            <User className="h-5 w-5 mr-2" />
            My Profile
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-16 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Search for Documents</h1>
          <div className="space-y-6">
            <div>
              <label htmlFor="doc-type" className="block text-sm font-medium mb-2">
                Document Type
              </label>
              <select
                id="doc-type"
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                disabled={approvalStatus === "pending"}
                className="block w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select document type</option>
                <option value="idDocument">Id Card</option>
                <option value="passport">Passport</option>
                <option value="bankStatement">Bank Statement</option>
                <option value="addressProof">Adress Proof</option>
                <option value="selfie">Photo</option>
                <option value="nationalId">National Id</option>
                <option value="driverLicense">Driving License</option>
                <option value="utilityBill">Utility Bill</option>
              </select>
            </div>

            <div>
              <label htmlFor="unique-id" className="block text-sm font-medium mb-2">
                Unique ID
              </label>
              <Input id="unique-id" placeholder="Enter Unique ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} disabled={approvalStatus === "pending"} />
            </div>

            <Button onClick={handleSearch} disabled={!searchId || !docType || approvalStatus === "pending"} className="w-full">
              {approvalStatus === "not_sent" ? "Search Documents" : "Request Access"}
            </Button>
          </div>

          {searchResults && renderApprovalStatus()}
        </div>
      </main>
    </div>
  );
}
