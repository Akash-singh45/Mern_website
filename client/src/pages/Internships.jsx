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
    <div className="bg-gradient-to-b from-[#F3F0FF] to-[#FDFDFD] min-h-screen py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-5xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            This Isn’t Just an Internship — It’s a Job Audition
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <strong className="text-purple-700">Real work. Real hiring.</strong> At <span className="font-semibold text-indigo-700">AdacodeAI</span>, every internship is a live opportunity to earn a full-time job or stipend-based role — not just with us, but also with companies in our hiring network actively seeking top talent.
            <br /><br />
            Not ready for a job yet? That’s okay. You’ll still gain hands-on experience, a recognized internship certificate, and <span className="font-medium text-purple-700">round-the-clock support, career guidance, and mentorship</span> — because we believe everyone deserves a launchpad.
          </p>
        </div>

        {/* Category Filter */}
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
          <p className="text-center text-gray-500">No internship openings available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
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
                    <p className="text-sm text-green-700 mt-2 font-medium">
                      High-performing interns may receive stipend or full-time offers.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Why We're Different Section */}
        <div className="mt-24 bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-gray-200">
          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              More Than an Internship — A Career Launchpad
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              We’re here for the <strong className="text-purple-700">doers, dreamers, and future leaders</strong>. 
              If you’re ready to prove your talent, we’re ready to open doors.
            </p>
          </div>

          <ul className="space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8 list-disc max-w-4xl mx-auto">
            <li>
              <strong className="text-[#6A4BB1]">Career-first evaluation:</strong> Our internships double as hiring trials. Top performers are <span className="text-purple-600 font-medium">interviewed and placed</span> in full-time or stipend-based roles.
            </li>
            <li>
              <strong className="text-[#6A4BB1]">Hands-on, outcome-driven work:</strong> You won’t waste time on mock projects. Instead, you’ll handle real assignments that matter.
            </li>
            <li>
              <strong className="text-[#6A4BB1]">No paywalls. Ever:</strong> Applying and working with us is <span className="text-purple-600 font-medium">completely free</span>. Talent is your ticket, not your wallet.
            </li>
            <li>
              <strong className="text-[#6A4BB1]">Certifications & recognition:</strong> Every intern receives a verified certificate of internship. But the real win? <span className="text-purple-600 font-medium">Career growth</span>.
            </li>
            <li>
              <strong className="text-[#6A4BB1]">Support beyond the screen:</strong> We provide <span className="text-purple-600 font-medium">24/7 career guidance, mental wellness support, and mentorship</span> so you’re never alone in the journey.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


