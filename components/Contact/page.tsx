"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Banner from "./Banner";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedbackMsg("Bhutan Photography Tour and Trek! Your message has been sent. We will get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
     <section className=" ">
        <Banner />
      </section>
    <section className="min-h-screen bg-slate-50 text-slate-800 antialiased pt-28 pb-20 overflow-x-hidden">
      
      {/* 1. Header Section */}
      <section className="mx-auto w-[90%] max-w-7xl text-center mb-12">
        <div data-aos="fade-up">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#b31212]">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-2 tracking-tight">
            Contact <span className="text-[#b31212]">Bhutan Photography Tour and Trek </span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Plan your customized tour, trek, or spiritual pilgrimage. Share your dates and questions with our local travel specialists.
          </p>
        </div>
      </section>

      {/* 2. Form & Contact Details Grid */}
      <section className="mx-auto w-[90%] max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6" data-aos="fade-right">
            <div>
              <span className="text-xs font-bold text-[#b31212] uppercase tracking-wider block">
                Office Information
              </span>
              <h3 className="text-xl font-extrabold text-gray-900 mt-1">
                Reach Our Team
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                We typically respond within 24 hours with custom quotes and itinerary options.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#b31212] flex items-center justify-center shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Head Office</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Thimphu & Paro, Kingdom of Bhutan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#b31212] flex items-center justify-center shrink-0 mt-0.5">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call / WhatsApp</h4>
                  <p className="text-gray-500 text-xs mt-0.5">+97 5773280041</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#b31212] flex items-center justify-center shrink-0 mt-0.5">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Inquiries</h4>
                  <p className="text-gray-500 text-xs mt-0.5">purnabdrdarjee478@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-[11px] font-bold text-gray-700 uppercase block mb-1">
                Government Licensed
              </span>
              <p className="text-[11px] text-gray-500 leading-relaxed">
                Licensed tour operator approved by the Department of Tourism & Royal Government of Bhutan.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
            <p className="text-xs text-gray-500 mb-6">
              Fill in your details below and we will send a detailed proposal directly to your email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Your Name <span className="text-[#b31212]">*</span>
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#b31212] focus:ring-1 focus:ring-[#b31212] transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                    Your Email <span className="text-[#b31212]">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#b31212] focus:ring-1 focus:ring-[#b31212] transition"
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Phone / WhatsApp (Optional)
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#b31212] focus:ring-1 focus:ring-[#b31212] transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Your Message & Travel Preferences <span className="text-[#b31212]">*</span>
                </label>
                <div className="relative">
                  <FaCommentDots className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your desired tour, trekking interest, group size, and planned travel dates..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:border-[#b31212] focus:ring-1 focus:ring-[#b31212] transition resize-none"
                  />
                </div>
              </div>

              {/* Feedback Alert */}
              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-600 shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <FaExclamationCircle className="text-rose-600 shrink-0" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-xl bg-[#b31212] hover:bg-black text-white font-bold text-xs sm:text-sm shadow-md transition duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="text-xs" />
                <span>{status === "loading" ? "Sending Inquiry..." : "Submit Inquiry"}</span>
              </button>
            </form>
          </div>

        </div>
      </section>

    </section>
    </>
  );
}