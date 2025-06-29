import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '../index.css'; // Ensure Tailwind & custom styles are loaded
import { Star } from 'lucide-react';

// Dummy data (replace with real ones)
const successStories = [
  {
    id: 1,
    name: "Shruti Rathore",
    role: "Data Scientist & full-stack developer",
    image: "/static/images/student1.jpg",
    story:
      "Before joining AdacodeAI, I had basic data science knowledge but no real-world experience. During my internship, I worked with actual datasets, performed data analysis, and built machine learning models that solved business problems. The mentorship and feedback accelerated my growth significantly. Today, I work as a Data Scientist, thanks to the hands-on learning and support from AdacodeAI. The program took me from zero practical experience to confidently deploying models.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nischay Arya",
    role: "Artificial Intelligence Engineer",
    image: "/static/images/student2.jpg",
    story:
      "AdacodeAI empowered me to work on real-world AI and machine learning projects—from predictive analytics to building intelligent systems using Python and advanced ML algorithms. I collaborated with mentors from real companies, gained hands-on exposure to model training, and learned how to build deployable AI pipelines. The project evaluations and feedback helped me boost my confidence and skills. I’m thrilled to share that I secured a full-time role as an AI/ML Engineer—all thanks to the experience, mentorship, and career readiness I gained at AdacodeAI.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tushar Singh",
    role: "Data Visualization Intern",
    image: "/static/images/student3.jpg",
    story:
      "Through AdacodeAI's comprehensive internship, I transformed from a student into a confident professional. The structured interview preparation, hands-on project experience, and dedicated mentorship provided me with all the essential skills and knowledge needed to launch my career successfully.",
    rating: 4.9,
  },
];


export default function Home() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-gradient-to-br from-white to-slate-100 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-24 gap-12">
        <div className="max-w-xl animate-fade-in-up">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Smart AI Solutions, Strategic Hiring Partnerships & Job-Ready Internships
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            At AdacodeAI, we build intelligent, data-driven solutions that help modern businesses stay ahead—while simultaneously nurturing the next generation of AI and tech professionals through real-world, outcome-focused internships.
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

        <div className="w-full max-w-xl animate-fade-in">
          <img
            src="/static/images/adacode-hero.png"
            alt="AdacodeAI Working on AI Solutions"
            className="w-full h-auto drop-shadow-xl rounded-xl"
          />
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Internship Info Section */}
      <section className="bg-white py-20 px-6 md:px-24 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Internship Programs</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
          We offer domain-specific internships in Artificial Intelligence, Data Science, Full Stack Development, Python, Business Analytics, and more. Interns work on real-world projects, receive professional training, and get evaluated for job placements and performance-based stipends.
        </p>
        <Link to="/internships">
          <Button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition">
            View Available Internships
          </Button>
        </Link>
      </section>

      {/* Company Partnership Section */}
      <section className="py-24 px-6 md:px-24 bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Partner with Us for Hiring Support</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We partner with startups and companies to handle hiring from start to finish. We source candidates from our internship programs, conduct evaluations, interviews, and shortlist the best-fit candidates—completely free of cost. Let us do the hard work, so you get top talent without any hassle.
          </p>
          <Link to="/partner">
            <Button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700">
              Start Hiring with Us
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
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
            AdacodeAI is where cutting-edge AI solutions meet exceptional talent development. We simplify hiring by delivering evaluated, job-ready candidates, and support early-stage to large companies with AI, Data, and Software innovations. Let us help you grow—with zero hiring cost.
          </p>
          <Link to="/about">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Student Success Stories Section */}
      <section className="bg-white py-24 px-6 md:px-20">
  <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
    Student Success Stories
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Sidebar with names */}
    <div className="space-y-4">
      {successStories.map((student, idx) => (
        <div
          key={student.id}
          onClick={() => setActive(idx)}
          className={`cursor-pointer px-4 py-3 rounded-lg shadow hover:shadow-md transition ${
            active === idx
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          <p className="font-semibold">{student.name}</p>
          <p className="text-sm">{student.role}</p>
        </div>
      ))}
    </div>
    {/* Story preview */}
    <div className="md:col-span-2 bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col justify-between">
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        {successStories[active].story}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={successStories[active].image}
          alt={successStories[active].name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900">{successStories[active].name}</p>
          <p className="text-sm text-gray-600">{successStories[active].role}</p>
        </div>
        <div className="ml-auto flex items-center gap-1 text-purple-400">
          <Star fill="currentColor" size={18} />
          {successStories[active].rating}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AdacodeAI</h3>
            <p className="text-gray-400">
              Empowering the next generation through internships and AI-driven solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/internships">Internships</Link></li>
              <li><Link to="/partner">Partner with Us</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: adacodeai@gmail.com</p>
            <p className="text-gray-400">Location: India (Remote)</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-10 text-sm">
          &copy; {new Date().getFullYear()} AdacodeAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}






