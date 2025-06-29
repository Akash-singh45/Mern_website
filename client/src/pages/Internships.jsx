import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Briefcase } from 'lucide-react';

export default function Internships() {
  const [internships, setInternships] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Artificial Intelligence & Data',
    'Software Development',
    'Business & Management',
    'Programming & Technical',
    'Data Visualization & Analytics',
  ];

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const res = await axios.get('/api/internships');
        setInternships(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error('Failed to fetch internships:', error);
      }
    };
    fetchInternships();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFiltered(internships);
    } else {
      setFiltered(internships.filter((i) => i.description === category));
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#F3F0FF] to-[#FDFDFD] min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3D2E5D] mb-4">
          Internship Opportunities
        </h1>
        <p className="text-center text-gray-600 text-lg mb-10">
          Explore industry-grade internships designed for your growth.
        </p>

        {/* 🔍 Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                selectedCategory === category
                  ? 'bg-[#8A68C8] text-white shadow-md'
                  : 'bg-white border border-gray-300 text-[#8A68C8] hover:bg-[#ece6f9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Internship Cards */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500">No internships found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((internship) => (
              <div
                key={internship._id}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="text-[#8A68C8]" size={30} />
                  <div>
                    <a
                      href={internship.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-[#6A4BB1] hover:underline"
                    >
                      {internship.title}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Duration: <span className="font-medium">{internship.duration}</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Category: {internship.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

