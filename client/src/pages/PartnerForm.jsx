import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle, Briefcase, Users, Clock } from 'lucide-react';

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    hiringType: '',
    jobTitle: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/partner', formData);
      alert('Thank you for reaching out. We’ll get in touch shortly.');
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        hiringType: '',
        jobTitle: '',
        jobDescription: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-slate-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Hire Job-Ready Interns & Freshers — at Zero Cost
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          AdacodeAI partners with startups and growing teams to deliver pre-evaluated, project-tested talent across <strong>AI, Data, and Development domains</strong>. Focus on what matters — we handle the hiring.
        </p>
      </section>

      {/* Why Partner With Us */}
      <section className="py-12 px-4 sm:px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <CheckCircle className="text-purple-600 mb-2" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold mb-1">Zero Hiring Cost</h3>
          <p className="text-gray-600 text-sm">Absolutely no fees. Our hiring support is 100% free for companies.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <Briefcase className="text-purple-600 mb-2" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold mb-1">Pre-Evaluated Talent</h3>
          <p className="text-gray-600 text-sm">Interns trained on real projects, assessed through outcomes, not resumes.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <Users className="text-purple-600 mb-2" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold mb-1">Tailored Matching</h3>
          <p className="text-gray-600 text-sm">We understand your need and recommend best-fit candidates.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
          <Clock className="text-purple-600 mb-2" size={32} />
          <h3 className="text-lg sm:text-xl font-semibold mb-1">Quick Turnaround</h3>
          <p className="text-gray-600 text-sm">From contact to hiring in days, not weeks.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Let's Build Together
          </h2>
          <p className="text-center text-gray-500 mb-8 sm:mb-10">
            Fill out the form below and we’ll get in touch to support your hiring needs.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              name="contactPerson"
              placeholder="Contact Person Name"
              value={formData.contactPerson}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <select
              name="hiringType"
              value={formData.hiringType}
              onChange={handleChange}
              required
              className="w-full col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select Hiring Type</option>
              <option value="Internship">Internship</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Contract">Contract</option>
            </select>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <textarea
              name="jobDescription"
              placeholder="Job Description"
              rows="5"
              value={formData.jobDescription}
              onChange={handleChange}
              className="w-full col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full md:w-auto col-span-1 md:col-span-2 bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

