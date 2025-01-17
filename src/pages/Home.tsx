import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TechStack from '../components/TechStack';
import ProjectTabs from '../components/ProjectTabs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E3FEF7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#003C43] via-[#135D66] to-[#77B0AA]">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-8 pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl tracking-tight font-extrabold text-[#E3FEF7] sm:text-5xl md:text-6xl">
                  <span className="block">Hi, I'm Vadithya Ranjith Sai</span>
                  <span className="block text-[#77B0AA]">Full Stack Developer</span>
                </h1>
                <p className="mt-3 text-base text-[#E3FEF7] sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Building beautiful, responsive, and user-friendly web applications
                  with modern technologies. Passionate about creating seamless user
                  experiences and robust backend solutions.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#003C43] bg-[#E3FEF7] hover:bg-[#77B0AA] md:py-4 md:text-lg md:px-10"
                    >
                      Get in touch
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="mt-8 flex space-x-6">
                  <a href="https://github.com" className="text-[#E3FEF7] hover:text-[#77B0AA]">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="https://linkedin.com" className="text-[#E3FEF7] hover:text-[#77B0AA]">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="mailto:contact@example.com" className="text-[#E3FEF7] hover:text-[#77B0AA]">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="relative h-96 w-full">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/web-developer-working-on-project-5691689-4759871.png"
                  alt="Web Developer"
                  className="absolute inset-0 w-full h-full object-contain animate-float"
                />
                {/* Floating Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-8 h-8 bg-[#77B0AA] rounded-full animate-float-slow"></div>
                  <div className="absolute top-20 right-20 w-6 h-6 bg-[#135D66] rounded-full animate-float-slower"></div>
                  <div className="absolute bottom-20 left-20 w-10 h-10 bg-[#E3FEF7] rounded-full animate-float-slowest"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <TechStack />

      {/* Projects Section */}
      <ProjectTabs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}