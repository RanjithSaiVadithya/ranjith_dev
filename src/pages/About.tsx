import React from 'react';
import { BookOpen, Coffee, Code, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Passionate Full Stack Developer
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-indigo mx-auto lg:max-w-3xl">
            <p className="text-gray-500 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working
              on diverse projects that have shaped my expertise in both frontend and backend
              technologies. My journey in tech started with a deep curiosity about how things work
              on the web, which led me to pursue a career in full stack development.
            </p>
            
            <p className="text-gray-500 leading-relaxed mt-4">
              I specialize in building scalable web applications using modern technologies and best
              practices. My approach to development focuses on creating clean, maintainable code
              while ensuring an exceptional user experience.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {[
              { name: 'Years Experience', stat: '5+', icon: Code },
              { name: 'Projects Completed', stat: '50+', icon: Coffee },
              { name: 'Clients Served', stat: '30+', icon: Users },
              { name: 'Learning Hours', stat: '1000+', icon: BookOpen },
            ].map((item) => (
              <div key={item.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-3xl font-semibold text-indigo-600">{item.stat}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Experience */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
          <div className="space-y-8">
            {[
              {
                role: 'Senior Full Stack Developer',
                company: 'Tech Solutions Inc.',
                period: '2020 - Present',
                description: 'Leading development of enterprise web applications using React and Node.js.',
              },
              {
                role: 'Full Stack Developer',
                company: 'Digital Innovations Co.',
                period: '2018 - 2020',
                description: 'Developed and maintained multiple client projects using modern web technologies.',
              },
              {
                role: 'Junior Developer',
                company: 'StartUp Labs',
                period: '2017 - 2018',
                description: 'Started career working on frontend development with React and Angular.',
              },
            ].map((job) => (
              <div key={job.role} className="relative">
                <div className="relative pl-8 border-l-2 border-indigo-200">
                  <h4 className="text-lg font-bold text-gray-900">{job.role}</h4>
                  <p className="text-sm text-indigo-600 font-semibold">{job.company}</p>
                  <p className="text-sm text-gray-500">{job.period}</p>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}