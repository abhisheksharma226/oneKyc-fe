import { useState, useCallback } from "react";
import ThemeToggle from "./ThemeToggle";

import {
  Bell,
  ChevronDown,
  CreditCard,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  User,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import DocumentCard from "./Documentcard";
import OtpVerification from "./Otp-verification";

const KycDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-card shadow-lg transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <UserCheck className="h-6 w-6 text-primary" />
            <span className="text-xl">KYC Portal</span>
          </Link>
        </div>

        <nav className="space-y-1 px-3 py-4">
          {[
            { to: "/dashboard", icon: Home, label: "Dashboard" },
            { to: "/documents", icon: FileText, label: "Documents" },
            { to: "/profile", icon: User, label: "Profile" },
            { to: "/support", icon: MessageSquare, label: "Support" },
            { to: "/settings", icon: Settings, label: "Settings" },
            { to: "/logout", icon: LogOut, label: "Logout" },
          ].map(({ to, icon: Icon, label }) => (
            <Link
              key={to}
              to={to}
              className="flex items-center space-x-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-white shadow-md px-4 md:px-6 dark:bg-gray-900">
  <h1 className="text-2xl font-semibold">KYC Dashboard</h1>

  
</header>



        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <section>
              <h1 className="text-2xl font-bold">KYC Verification</h1>
              <p className="text-muted-foreground">Complete your verification to access all features</p>
            </section>

            {/* Verification Progress */}
            <section>
              <h2 className="text-xl font-semibold">Verification Progress</h2>
              <div className="flex items-center justify-between">
                <span>60% Complete</span>
                <span className="text-sm text-muted-foreground">3 of 5 steps completed</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: "60%" }}></div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Personal Info", status: "Completed", icon: User },
                  { label: "Documents", status: "Completed", icon: FileText },
                  { label: "Verification", status: "In Progress", icon: CreditCard },
                ].map(({ label, status, icon: Icon }, index) => (
                  <div key={index} className="flex flex-col items-center rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="mt-2 font-medium">{label}</h3>
                    <span className="mt-1 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">{status}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Uploaded Documents */}
            <section>
              <h2 className="text-xl font-semibold">Uploaded Documents</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <DocumentCard title="ID Card" status="verified" date="Uploaded on 15 May 2023" documentType="id-card" />
                <DocumentCard title="Proof of Address" status="verified" date="Uploaded on 16 May 2023" documentType="address-proof" />
                <DocumentCard title="Selfie Verification" status="pending" date="Uploaded on 17 May 2023" documentType="selfie" />
              </div>
            </section>

            {/* OTP Verification */}
            <section>
              <h2 className="text-xl font-semibold">Phone Verification</h2>
              <OtpVerification />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default KycDashboard;
