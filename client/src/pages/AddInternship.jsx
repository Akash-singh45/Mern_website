import React, { useState } from 'react';
import axios from 'axios';

export default function AddInternship() {
  const [formData, setFormData] = useState({
    title: '',
    duration: '',
    formLink: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/internships', formData); // Adjust the API if needed
      alert('Internship added successfully!');
      setFormData({ title: '', duration: '', formLink: '' });
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
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
          <option value="3 Months">3 Months</option>
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
