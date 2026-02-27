"use client";
import React from "react";
import { Send, Smartphone, Mail, Bluetooth, CheckCircle } from "lucide-react";
const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const SubmissionProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Method",
      description: "Select one of our preferred digital channels to send your files. We do not accept Flash drives/USB to keep our systems secure.",
      icon: <Send size={32} />,
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Send Your Files",
      description: "Upload via Facebook, Email, or visit us for a quick Bluetooth transfer.",
      icon: <Smartphone size={32} />,
      color: "bg-blue-500",
      subMethods: [
        { label: "FB Messenger", icon: <FacebookIcon size={16} />, detail: "DS Prints & Supplies" },
        { label: "Email", icon: <Mail size={16} />, detail: "dsprints27@gmail.com" },
        { label: "Bluetooth", icon: <Bluetooth size={16} />, detail: "Available In-Store" },
      ],
    },
    {
      id: 3,
      title: "Print & Pick-up",
      description: "Review the quality and pick up your prints. Most orders are ready in minutes!",
      icon: <CheckCircle size={32} />,
      color: "bg-blue-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50 transition-colors duration-300 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 uppercase tracking-tighter">
            How to Send Your Files
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto font-medium">
            We prioritize digital transfers for a faster and safer experience. 
            <span className="text-red-500 font-bold block mt-1">NO USB / FLASH DRIVES PREFERRED.</span>
          </p>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-10 transform -translate-y-1/2"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className={`w-20 h-20 rounded-3xl ${step.color} text-white flex items-center justify-center shadow-xl transform group-hover:rotate-6 transition-transform duration-300 mb-8`}>
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-blue-950 mb-4 uppercase">
                {step.id}. {step.title}
              </h3>
              <p className="text-slate-600  text-sm leading-relaxed mb-6 px-4">
                {step.description}
              </p>

              {/* Sub-methods (Only for Step 2) */}
              {step.subMethods && (
                <div className="w-full space-y-2 px-6">
                  {step.subMethods.map((method, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                      <div className="text-blue-600">{method.icon}</div>
                      <div className="text-left">
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{method.label}</p>
                        <p className="text-xs font-bold text-slate-700">{method.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubmissionProcess;