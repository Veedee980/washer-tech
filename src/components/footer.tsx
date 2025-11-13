"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const Footer: React.FC = () => {
  // Email subscription state
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // Handle subscription form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("⚠️ Please enter your email.");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs
      .send(
        "service_13zserw", // 🔧 Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // 🔧 Replace with your EmailJS Template ID
        templateParams,
        "YOUR_PUBLIC_KEY" // 🔧 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Subscription successful! Thank you!");
          setEmail("");
        },
        (error) => {
          console.error("Error:", error);
          setStatus("❌ Failed to subscribe. Try again later.");
        }
      );
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* --- Background Image with Overlay --- */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.png" // 🔧 Replace with your actual background image path
          alt="Washer Tech Footer Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* --- Main Footer Content --- */}
      <div className="relative z-10 px-6 md:px-20 py-12 grid md:grid-cols-4 gap-10">
        {/* --- Logo and Description --- */}
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Image src="/logo.png" alt="Washer Tech Logo" width={40} height={40} />
            <h3 className="text-orange-500 font-bold text-lg">Washer Tech</h3>
          </div>
          <p className="text-sm text-gray-200 mb-4">
            Your trusted partner in professional laundry appliance care —
            repairing, maintaining, and extending the life of your washers and
            dryers.
          </p>
          <p className="text-sm">📍 Belvedere, Harare, Zimbabwe</p>
          <p className="text-sm">📞 078 987 4042</p>
          <p className="text-sm">✉️ washertechzim@gmail.com</p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* --- Services --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-3">Services</h4>
          <ul className="space-y-1 text-sm">
            <li>Washer Repair</li>
            <li>Tumble Dryer Repair</li>
            <li>Installation & Maintenance</li>
            <li>Same-Day Service</li>
          </ul>
        </div>

        {/* --- Customer Support --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-3">Customer Support</h4>
          <ul className="space-y-1 text-sm">
            <li>Warranty Info</li>
            <li>Troubleshooting Tips</li>
            <li>Service Areas</li>
            <li>Privacy Policy</li>
          </ul>

          <div className="mt-4">
            <h4 className="text-orange-500 font-semibold mb-2">Opening Hours</h4>
            <p className="text-sm">Monday - Thursday: 24Hrs</p>
            <p className="text-sm">Friday: Closed</p>
            <p className="text-sm">Saturday - Sunday: 24Hrs</p>
          </div>
        </div>
      </div>

      {/* --- Subscribe Section --- */}
      <div className="relative z-10 bg-white mx-6 md:mx-40 rounded-lg flex flex-col md:flex-row justify-between items-center px-6 py-4 shadow-md -mt-6">
        <p className="text-gray-800 text-sm md:text-base mb-3 md:mb-0">
          Subscribe to get updates or repair tips
        </p>

        <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 md:w-64 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-r-md font-semibold"
          >
            Subscribe
          </button>
        </form>

        {status && (
          <p className="text-sm text-gray-700 mt-2 md:mt-0 md:ml-4">{status}</p>
        )}
      </div>

      {/* --- Bottom Bar --- */}
      <div className="relative z-10 bg-orange-500 text-center py-3 mt-8 text-sm text-white">
        © 2025 Washer Tech. All Rights Reserved. Website Experience by{" "}
        <span className="font-semibold">Ideanooji</span>
      </div>
    </footer>
  );
};

export default Footer;
