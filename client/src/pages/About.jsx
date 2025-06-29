import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-[#ffffff] to-[#f5f7fa] min-h-screen text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 lg:px-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-10">
          About AdacodeAI
        </h1>
        <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          We are not just a company — we are a movement empowering students with job-ready skills and helping companies hire pre-evaluated, performance-backed talent. Our AI-driven internship platform bridges the gap between learning and employment, offering end-to-end support from training to hiring.
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

      {/* What We Do Section */}
      <section className="bg-gradient-to-b from-[#f9f9fb] to-[#ffffff] py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Internships That Matter</h3>
              <p className="text-gray-600 text-md">
                We offer internships that go beyond certificates. Interns solve real problems, present their work, and build portfolios — preparing them for real job roles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Company Partnerships</h3>
              <p className="text-gray-600 text-md">
                We partner with startups and growing companies to provide them with shortlisted, performance-evaluated candidates, ready to join based on exact role-fit.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">Zero-Cost Hiring Support</h3>
              <p className="text-gray-600 text-md">
                Companies don’t pay a single rupee. We manage candidate evaluation, interviews, and shortlisting — saving them time, effort, and hiring costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-16 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Build With Us?</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a student looking to grow your career or a company ready to discover the right talent — AdacodeAI is here to support you.
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
