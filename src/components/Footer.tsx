import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#003C43] text-[#E3FEF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-[#77B0AA]" />
              <span className="ml-2 text-xl font-bold">Vadithya Ranjith Sai</span>
            </div>
            <p className="mt-4 text-[#77B0AA]">
              Full Stack Developer specializing in creating beautiful and functional web applications.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="https://github.com" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:ranjithsaivadithya14@gmail.com" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#77B0AA] hover:text-[#E3FEF7]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#77B0AA]">
              <li><a href='mailto:ranjithsaivadithya14@gmail.com'>ranjithsaivadithya14@gmail.com</a></li>
              <li><a href='+91 9440754054'>+91 9440754054</a></li>
              <li>Anantapur Andra Pradesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#135D66] text-center text-[#77B0AA]">
          <p>&copy; {new Date().getFullYear()} Vadithya Ranjith Sai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}