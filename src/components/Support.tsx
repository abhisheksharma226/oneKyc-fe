"use client";

import { useState } from "react";
import { BookOpen, HelpCircle, MessageSquare, Send } from "lucide-react";

export default function Support() {
  const [activeTab, setActiveTab] = useState("faq");
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", contactFormData);
    alert("Your message has been sent. We'll get back to you shortly!");
    setContactFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-xl p-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-4">
            <button
              className={`flex items-center text-sm px-6 py-2 border-b-4 ${
                activeTab === "faq"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              } hover:border-blue-600 focus:outline-none`}
              onClick={() => setActiveTab("faq")}
            >
              <HelpCircle className="h-5 w-5 mr-2" />
              FAQ
            </button>
            <button
              className={`flex items-center text-sm px-6 py-2 border-b-4 ${
                activeTab === "contact"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              } hover:border-blue-600 focus:outline-none`}
              onClick={() => setActiveTab("contact")}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact
            </button>
            <button
              className={`flex items-center text-sm px-6 py-2 border-b-4 ${
                activeTab === "resources"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              } hover:border-blue-600 focus:outline-none`}
              onClick={() => setActiveTab("resources")}
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Resources
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "faq" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-800">
                      How do I reset my password?
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      To reset your password, click on the "Forgot Password"
                      link on the login page.
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-800">
                      What is the counter in my profile?
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      The counter in your profile represents your activity
                      points.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contact" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Contact Support
                </h2>
                <form onSubmit={handleSubmitContactForm} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={contactFormData.name}
                        onChange={handleContactInputChange}
                        className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 mt-1"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={contactFormData.email}
                        onChange={handleContactInputChange}
                        className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 mt-1"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={contactFormData.subject}
                      onChange={(e) =>
                        setContactFormData((prev) => ({
                          ...prev,
                          subject: e.target.value,
                        }))
                      }
                      className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 mt-1"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="account">Account Issues</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Questions</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Describe your issue in detail"
                      rows={5}
                      value={contactFormData.message}
                      onChange={handleContactInputChange}
                      className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2 mt-1"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "resources" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  Support Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Getting Started Guide"
                    description="Learn the basics and set up your account correctly."
                    icon={<BookOpen className="h-5 w-5" />}
                  />
                  <ResourceCard
                    title="Video Tutorials"
                    description="Watch step-by-step guides for common tasks."
                    icon={<BookOpen className="h-5 w-5" />}
                  />
                  <ResourceCard
                    title="API Documentation"
                    description="Technical details for developers integrating with our platform."
                    icon={<BookOpen className="h-5 w-5" />}
                  />
                  <ResourceCard
                    title="Feature Updates"
                    description="Stay informed about the latest features and improvements."
                    icon={<BookOpen className="h-5 w-5" />}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function ResourceCard({ title, description, icon }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
      <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
