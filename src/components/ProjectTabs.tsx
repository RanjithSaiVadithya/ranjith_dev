import React, { useState } from 'react';

const projects = {
  react: [
    {
      title: 'E-commerce Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      description: 'Modern dashboard with React and Material UI',
    },
    {
      title: 'Social Media App',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      description: 'Full-featured social media platform',
    },
  ],
  laravel: [
    {
      title: 'CRM System',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      description: 'Customer relationship management system',
    },
  ],
  ecommerce: [
    {
      title: 'Online Store',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      description: 'WooCommerce-based online store',
    },
  ],
  wordpress: [
    {
      title: 'Corporate Website',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
      description: 'Custom WordPress theme development',
    },
  ],
};

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('react');

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Projects</h2>
          <p className="mt-4 text-xl text-gray-500">
            Some of my best work from my professional career
          </p>
        </div>

        <div className="mt-12">
          {/* Tabs */}
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            {Object.entries({
              react: 'React.js Projects',
              laravel: 'Laravel Projects',
              ecommerce: 'E-commerce',
              wordpress: 'WordPress',
            }).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                  activeTab === key
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects[activeTab as keyof typeof projects].map((project, index) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-sm opacity-90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}