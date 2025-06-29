import React, { useState } from 'react';
import axios from 'axios';

export default function AddInternship() {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    formLink: '',
    description: '', // New field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/internships', formData); // Make sure backend accepts `description`
      alert('Internship added successfully!');
      setFormData({ title: '', duration: '', formLink: '', description: '' });
    } catch (err) {
      console.error('Error adding internship:', err);
      alert('Failed to add internship.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-6 py-8 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Add a New Internship
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Internship Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />

        <select
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Duration</option>
          <option value="1/2/3 Months">1/2/3 Months</option>
          <option value="1/3 Months">1/3 Months</option>
          <option value="1 Month">1 Month</option>
        
        </select>

        {/* 🔽 New Description Dropdown */}
        <select
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Internship Category</option>
          <option value="Artificial Intelligence & Data">Artificial Intelligence & Data</option>
          <option value="Software Development">Software Development</option>
          <option value="Business & Management">Business & Management</option>
          <option value="Programming & Technical">Programming & Technical</option>
          <option value="Data Visualization & Analytics">Data Visualization & Analytics</option>
        </select>

        <input
          type="url"
          name="formLink"
          placeholder="Google Form Link"
          value={formData.formLink}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Add Internship
        </button>
      </form>
    </div>
  );
}

