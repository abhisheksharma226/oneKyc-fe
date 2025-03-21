"use client";

import { useState, useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, MapPin, Check, X, Activity, HelpCircle, AlertCircle } from "lucide-react";

import { BASE_URL } from "./Url";

// Define interface for API response
interface DashboardData {
  dataId: string;
  gender: string;
  fullName: string;
  emailAddress: string;
  state: string;
  country: string;
  consent: boolean;
  sourceOfFunds?: string; // Optional property
  selfie?: string;
}

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams(); 
  const userId = searchParams.get("userId");
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    if (!userId) {
      setError("User ID is missing.");
      setLoading(false);
      return;
    }

    const url = BASE_URL(userId);

    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        if (response.success && response.data) {
          setData(response.data);
        } else {
          setError("Failed to fetch user data.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      });
  }, [userId]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 p-4 border rounded-lg shadow-md bg-white">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src={data?.selfie || "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg" }
              alt="User Avatar" 
              className="h-24 w-24 rounded-full border" 
            />
            <h2 className="text-xl font-bold">{data?.fullName || "User Not Found"}</h2>
            <p className="text-sm text-gray-500">{data?.emailAddress || "N/A"}</p>
            <span className="px-3 py-1 border rounded text-sm">{data?.gender || "N/A"}</span>
            <Link to="/support" className="mt-4 w-full text-center bg-gray-200 py-2 rounded hover:bg-gray-300">
              <HelpCircle className="inline-block mr-2" size={16} /> Get Support
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
          <h1 className="text-2xl font-bold mb-4">Profile</h1>

          {error ? (
            <div className="p-4 bg-red-100 text-red-700 border border-red-400 rounded flex items-center">
              <AlertCircle className="mr-2" /> {error}
            </div>
          ) : (
            <>
              <div className="flex border-b mb-4">
                {[{ label: "Details", value: "details" },
                  // { label: "Activity", value: "activity" },
                  // { label: "Settings", value: "settings" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`px-4 py-2 border-b-2 ${activeTab === tab.value ? "border-black font-bold" : "border-transparent"}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {activeTab === "details" && data && (
                <div className="space-y-4">
                  {[{ icon: Mail, label: "Email", value: data?.emailAddress },
                    { icon: MapPin, label: "State", value: data?.state },
                    { icon: Activity, label: "Country", value: data?.country },
                    { label: "Consent", value: data?.consent ? "Given" : "Not Given", icon: data?.consent ? Check : X, iconColor: data?.consent ? "text-green-500" : "text-red-500" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center py-2 border-b">
                      {item.icon && <item.icon className={`h-5 w-5 mr-3 ${item.iconColor || "text-gray-500"}`} />}
                      <div className="flex justify-between w-full">
                        <span className="font-medium">{item.label}</span>
                        <span>{item.value || "N/A"}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "activity" && (
                <div className="space-y-3">
                  {["Profile updated - 2 days ago", "Password changed - 1 week ago", "Logged in from new device - 2 weeks ago"].map((activity, index) => (
                    <div key={index} className="py-2 border-b text-sm">{activity}</div>
                  ))}
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-4">
                  <button className="w-full text-center bg-red-500 text-white py-2 rounded hover:bg-red-600">Delete Account</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;