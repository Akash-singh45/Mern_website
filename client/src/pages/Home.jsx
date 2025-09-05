import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import '../index.css';
import { Star } from 'lucide-react';

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
    image: "/static/images/student3.png",
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
      <section className="min-h-[80vh] flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-16 py-16 gap-16 bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="max-w-2xl animate-fade-in-up text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-sm">
            Smart AI Solutions, Strategic Hiring Partnerships & Job-Ready Internships
          </h1>
          <p className="text-base lg:text-lg text-gray-700 mb-8 leading-relaxed">
            At <strong className="text-indigo-700">AdacodeAI</strong>, we design <span className="text-purple-600 font-medium">intelligent, data-powered solutions</span> that empower businesses to thrive — while cultivating the next generation of AI professionals through <strong>impact-driven internships</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="/internships">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg shadow-lg transition duration-300 ease-in-out">
                🎓 Apply for Internship
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="border-indigo-500 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full text-lg transition duration-300 ease-in-out">
                🏢 Partner with Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-lg animate-fade-in-right">
          <img
            src="/static/images/adacode-hero.jpg"
            alt="AdacodeAI AI Solutions"
            className="w-full h-auto rounded-3xl shadow-2xl"
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
      <section className="bg-gradient-to-br from-violet-50 to-white py-20 px-6 md:px-28 rounded-3xl shadow-xl mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/static/images/internship-illustration.jpg"
            alt="Internship at AdacodeAI"
            className="w-full max-w-xl h-auto mx-auto rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-4">
  Internship Openings That Lead to Real Jobs
</h2>
<p className="text-gray-700 text-lg mb-6 leading-relaxed">
  <strong>These aren’t training simulations — they’re real openings.</strong> At <span className="text-purple-600 font-semibold">AdacodeAI</span>, we give you a chance to prove your skills through outcome-driven internships. 
  Perform well, and you could land a <strong>full-time role or stipend-based position</strong> — either with us or with our partner companies. Whether it's <span className="text-purple-600 font-medium">AI, Data, Web Development</span> or Business — these internships are built to lead you directly into the workforce.
</p>

            <Link to="/internships">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 shadow">
                Apply Now for Internships
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Partnership Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6 md:px-20 rounded-3xl shadow-xl mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/static/images/partner-with-us.png"
            alt="Partner with AdacodeAI"
            className="w-full max-w-md mx-auto"
          />
          <div>
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">Struggling to Hire? Let’s Change That.</h2>
            <p className="text-gray-700 text-lg mb-6">
              <strong>Hiring shouldn’t be hard.</strong> We evaluate, mentor, and prepare candidates to meet your tech needs. Whether you’re a startup or an enterprise — <span className="text-indigo-600 font-semibold">our recruitment support is free and frictionless</span>.
            </p>
            <Link to="/partner">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 shadow">
                Partner With Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-gradient-to-r from-white via-violet-50 to-purple-50 py-20 px-6 md:px-20 rounded-3xl shadow-xl mt-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/static/images/empathy-support.png"
            alt="Career Advice"
            className="max-w-md mx-auto"
          />
          <div>
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Here to Support You, Always 💜</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>Lost in your journey? We’re here.</strong> Whether it’s career guidance, mentorship, or mental support, <span className="font-semibold text-indigo-700">AdacodeAI</span> is more than a platform — it’s a community that stands by you. <strong>And the best part? It’s absolutely free — whether you're our intern or not.</strong>
            </p>

            <a
              href="mailto:adacodeai@gmail.com"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 shadow"
            >
              📨 Reach Out Anytime
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-br from-white to-slate-100 py-24 px-6 md:px-28 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="w-full max-w-xl animate-fade-in-up">
          <img
            src="/static/images/ai-collaboration.jpg"
            alt="AI Collaboration"
            className="w-full h-auto rounded-3xl shadow-xl"
          />
        </div>
        <div className="max-w-xl animate-fade-in-right">
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-500">
            Powering AI Solutions & Careers — with Heart, Code, and Commitment
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>We aren’t just building tools — we’re building futures.</strong> AdacodeAI merges <span className="text-indigo-600 font-medium">technology, talent, and empathy</span> to shape career-ready professionals and empower startups with smart tech solutions.
          </p>
          <Link to="/about">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>


      {/* Success Stories */}
      <section className="bg-white py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Student Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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







