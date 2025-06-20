import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '../index.css'; // Ensure Tailwind & custom styles are loaded

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-24 gap-12">
        {/* Text Content */}
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Smart AI Solutions, Strategic Hiring Partnerships & JOb-Ready Internships
          </h1>
          <p className="text-lg text-gray-700 mb-8">
           At AdacodeAI, we build intelligent, data-driven solutions that help modern businesses stay ahead—while simultaneously nurturing the next generation of AI and tech professionals through real-world, outcome-focused internships. Our dual mission is to drive innovation for companies and create career-launching opportunities for aspiring talent.
          </p>
          <div className="flex gap-4">
            <Link to="/internships">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg">
                Apply for Internship
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="text-blue-600 border-blue-600 px-6 py-2 rounded-full text-lg">
                Partner with Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Static Image */}
        <div className="w-full max-w-xl animate-fade-in">
          <img
            src="/static/images/adacode-hero.png"
            alt="AdacodeAI Working on AI Solutions"
            className="w-full h-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* Features / Stats Section */}
      <section className="py-20 px-6 md:px-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-4xl font-bold text-blue-700 mb-2">1200+</h2>
          <p className="text-gray-600">Interns trained across AI, ML, Web Dev & Python</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-4xl font-bold text-purple-700 mb-2">90%+</h2>
          <p className="text-gray-600">Placed or hired through real-world project evaluations</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-4xl font-bold text-pink-600 mb-2">50+</h2>
          <p className="text-gray-600">Startups and companies hiring through AdacodeAI</p>
        </div>
      </section>

      {/* Vision / About Section */}
      <section className="py-24 px-6 md:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full max-w-xl animate-fade-in-up">
          <img
            src="/static/images/ai-collaboration.png"
            alt="AI Collaboration"
            className="w-full h-auto rounded-xl drop-shadow-lg"
          />
        </div>
        <div className="max-w-xl animate-fade-in-right">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Empowering Innovation Through Talent & Technology</h2>
          <p className="text-lg text-gray-700 mb-6">
            AdacodeAI is where cutting-edge AI solutions meet exceptional talent development. We collaborate with startups and enterprises to build intelligent systems while offering immersive, project-based internships that prepare future-ready professionals. Our mission is to simplify hiring through evaluated, job-capable candidates and deliver impactful solutions through innovation-driven teams.
          </p>
          <Link to="/about">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}





