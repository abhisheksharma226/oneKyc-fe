import { CheckCircle, Clock, FileText, X } from "lucide-react";
import { memo, useEffect, useState } from "react";

interface DocumentCardProps {
  title: string;
  status: "verified" | "pending" | "rejected";
  date: string;
  documentUrl?: string;
}

const DocumentCard = memo(({ title, status, date, documentUrl }: DocumentCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusDetails = {
    verified: {
      icon: <CheckCircle className="h-5 w-5 text-green-600" />,
      text: "Verified",
      className: "bg-green-100 text-green-800",
    },
    pending: {
      icon: <Clock className="h-5 w-5 text-yellow-600" />,
      text: "Pending Verification",
      className: "bg-yellow-100 text-yellow-800",
    },
    rejected: {
      icon: <X className="h-5 w-5 text-red-600" />,
      text: "Verification Failed",
      className: "bg-red-100 text-red-800",
    },
  }[status];

  // Function to open/close modal
  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsModalOpen(false);
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      {/* Document Card */}
      <div className="overflow-hidden rounded-lg border shadow-sm">
        <div className="flex h-40 items-center justify-center bg-muted p-4">
          <FileText className="h-12 w-12 text-muted-foreground" />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${statusDetails.className}`}
            >
              {statusDetails.icon}
              <span>{statusDetails.text}</span>
            </div>
          </div>
        </div>
        <div className="border-t bg-muted/50 p-2">
          {documentUrl ? (
            <button
              onClick={openModal}
              className="w-full rounded-md bg-white p-2 text-sm font-medium hover:bg-gray-100"
            >
              View Document
            </button>
          ) : (
            <button
              disabled
              className="w-full rounded-md bg-gray-300 p-2 text-sm font-medium text-gray-500 cursor-not-allowed"
            >
              No Document Available
            </button>
          )}
        </div>
      </div>

      {/* Modal for Viewing Document */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal} // Close when clicking outside the modal
        >
          <div
            className="relative w-11/12 max-w-5xl bg-white p-6 rounded-lg shadow-xl transition-all transform scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Modal Header */}
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Viewing Document: {title}
            </h2>

            {/* Document Viewer */}
            <iframe
              src={documentUrl}
              title="Document Preview"
              aria-label="Document Preview"
              className="w-full h-[80vh] border rounded-lg shadow-md"
            />

            {/* Footer Buttons */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                Close
              </button>
              <a
                href={documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DocumentCard;
