import React from 'react';
import { BookOpen, Coffee, Code, Users } from 'lucide-react';

export default function About() {
  const experience = [
    {
      role: 'Junior Developer',
      company: 'SpiderHit',
      period: '2024 - 2025',
      description: 'Started my career by working on frontend development using React. Learned and applied modern web development practices.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Profile"
            className="rounded-full shadow-lg w-80 h-80 object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Passionate Full Stack Developer
          </p>

          <div className="mt-6 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              I am a web developer with 1 year of experience in creating responsive and efficient web applications. I started my journey in technology with a curiosity to understand how websites work, and this passion turned into a profession.
            </p>

            <p className="text-gray-600 leading-relaxed">
              My focus is on building clean, user-friendly, and scalable web applications. I enjoy working with modern tools and frameworks to ensure the best results. 
            </p>

            <p className="text-gray-600 leading-relaxed">
              I have completed my B.Tech in Electrical and Electronics Engineering (EEE) from Ananta Lakshmi Institute of Technology and Sciences, affiliated with JNTUA. My educational background has strengthened my problem-solving skills and technical understanding.
            </p>
          </div>

          {/* Icons Section */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Code className="h-6 w-6 text-blue-500 mr-3" />
              <p className="text-gray-600">1+ Years Experience</p>
            </div>
            <div className="flex items-center">
              <Coffee className="h-6 w-6 text-blue-500 mr-3" />
              <p className="text-gray-600">10+ Projects Completed</p>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 text-blue-500 mr-3" />
              <p className="text-gray-600">10+ Clients Served</p>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-6 w-6 text-blue-500 mr-3" />
              <p className="text-gray-600">Continuous Learner</p>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      {/* <div className="mt-16 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-8">Work Experience</h3>
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.role} className="relative">
              <div className="relative pl-8 border-l-4 border-blue-500">
                <h4 className="text-lg font-bold text-gray-900">{job.role}</h4>
                <p className="text-sm text-blue-600 font-semibold">{job.company}</p>
                <p className="text-sm text-gray-500">{job.period}</p>
                <p className="mt-2 text-gray-600">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
