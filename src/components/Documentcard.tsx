import { CheckCircle, Clock, FileText } from "lucide-react";
import { memo } from "react";

interface DocumentCardProps {
  title: string;
  status: "verified" | "pending" | "rejected";
  date: string;
  documentType: "id-card" | "address-proof" | "selfie" | "other";
}

const DocumentCard = memo(({ title, status, date }: DocumentCardProps) => {
  const documentIcon = <FileText className="h-12 w-12 text-muted-foreground" />;

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
      icon: <Clock className="h-5 w-5 text-red-600" />,
      text: "Verification Failed",
      className: "bg-red-100 text-red-800",
    },
  }[status];

  return (
    <div className="overflow-hidden rounded-lg border shadow-sm">
      <div className="flex h-40 items-center justify-center bg-muted p-4">{documentIcon}</div>
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
        <button className="w-full rounded-md bg-white p-2 text-sm font-medium hover:bg-gray-100">
          View Document
        </button>
      </div>
    </div>
  );
});

export default DocumentCard;