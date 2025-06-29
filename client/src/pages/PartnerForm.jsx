import React, { useState } from 'react';
import axios from 'axios';

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
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9ff] to-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10 border border-gray-100">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Partner with <span className="text-indigo-600">AdacodeAI</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Fill out the form below and let’s build impactful hiring solutions together.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person Name"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <select
            name="hiringType"
            value={formData.hiringType}
            onChange={handleChange}
            required
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
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
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <textarea
            name="jobDescription"
            placeholder="Job Description"
            rows="5"
            value={formData.jobDescription}
            onChange={handleChange}
            className="col-span-1 md:col-span-2 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

