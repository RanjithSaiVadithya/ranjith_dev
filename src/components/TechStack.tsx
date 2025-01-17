import React from 'react';

const technologies = [
  {
    name: 'React.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 'expert',
  },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    proficiency: 'expert',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    proficiency: 'expert',
  },
  {
    name: 'WordPress',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    proficiency: 'expert',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    proficiency: 'known',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    proficiency: 'known',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    proficiency: 'known',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    proficiency: 'known',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    proficiency: 'known',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    proficiency: 'known',
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    proficiency: 'known',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    proficiency: 'known',
  },
];

export default function TechStack() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Technologies & Skills</h2>
          <p className="mt-4 text-xl text-gray-500">
            Technologies I've worked with throughout my career
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="overflow-x-auto pb-4 mask-fade-edges">
            <div className="flex space-x-8 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className={`flex flex-col items-center space-y-2 min-w-[100px] ${
                    tech.proficiency === 'expert' ? 'scale-110' : ''
                  }`}
                >
                  <div className={`p-4 rounded-lg bg-gray-50 ${
                    tech.proficiency === 'expert' ? 'ring-2 ring-indigo-500' : ''
                  }`}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className={`text-sm font-medium ${
                    tech.proficiency === 'expert' ? 'text-indigo-600' : 'text-gray-600'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}