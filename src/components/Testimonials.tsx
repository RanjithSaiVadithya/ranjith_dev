import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'CEO at TechCorp',
    review: 'Working with Vadithya was an absolute pleasure. His technical expertise and attention to detail resulted in an outstanding product that exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'CTO at InnovateTech',
    review: 'Vadithya\'s full-stack expertise helped us deliver a complex project on time. His problem-solving skills and commitment to quality are exceptional.',
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    designation: 'Product Manager at WebSolutions',
    review: 'The website Vadithya developed for us is not only beautiful but also performs exceptionally well. His understanding of both frontend and backend technologies is impressive.',
  },
];

export default function Testimonials() {
  return (
    <div className="py-16 bg-[#003C43]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#E3FEF7]">Client Testimonials</h2>
          <p className="mt-4 text-xl text-[#77B0AA]">
            What my clients say about working with me
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[#135D66] rounded-lg p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Quote className="h-8 w-8 text-[#77B0AA] mb-4" />
              <p className="text-[#E3FEF7] mb-6">{testimonial.review}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-[#E3FEF7] font-semibold">{testimonial.name}</h4>
                  <p className="text-[#77B0AA] text-sm">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}