import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-white to-[#f5f7fa] min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 lg:px-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-6 leading-tight">
          Where Talent Meets Opportunity
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We’re not a course platform. Not a certificate factory. We're a mission-driven movement — connecting skilled minds with real opportunities, driven by mentorship, performance, and heart.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-16 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-semibold mb-4 text-purple-700">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To empower aspiring tech professionals through hands-on, industry-relevant internships in AI, Web Development, Data Science, and more. We guide them to build real-world projects and showcase their capabilities to future employers.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            To become the most trusted talent-building platform that not only nurtures student potential but also transforms the way companies discover and hire future tech leaders — all with zero cost to them.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gradient-to-b from-[#f9f9fb] to-[#ffffff] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">🧠 Learn by Doing</h3>
              <p className="text-gray-600 text-md">
                Interns apply their skills in real business environments. No simulations. No fluff.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">📊 Evaluate with Proof</h3>
              <p className="text-gray-600 text-md">
                Performance data, project outcomes, and mentor reviews form a real resume.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">🚀 Get Hired</h3>
              <p className="text-gray-600 text-md">
                Best performers are interviewed and placed with us or our hiring partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Support Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white py-16 px-6 md:px-20 text-center rounded-2xl shadow-md mt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Because You’re More Than Just a Resume</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
          Feeling lost or unsure about your path? At <span className="font-semibold text-purple-700">AdacodeAI</span>, we believe every individual deserves a chance to be heard and supported.
          Whether you're struggling with career decisions, mental clarity, or life direction — you can talk to us.
          Our team offers <span className="font-semibold text-green-600">free, heartfelt support and career guidance</span>, even if you're not part of our internship program.
          This is our promise — because real growth begins with care and connection.
        </p>
        <a
          href="mailto:adacodeai@gmail.com"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-purple-700 transition"
        >
          Get Free Support
        </a>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-16 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Build the Future With Us?</h2>
          <p className="text-gray-600 mb-6">
            Whether you're launching your tech career or hiring your next rockstar — AdacodeAI is where talent finds its purpose.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/internships">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-lg">
                Apply for Internships
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="text-purple-600 border-purple-600 px-6 py-2 rounded-full text-lg">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

