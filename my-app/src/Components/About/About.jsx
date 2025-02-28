import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">

      <div className="mb-16">
        <div className="w-full h-px bg-[#E97F3C] opacity-20"></div>
      </div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A2912] mb-6">
          About Dnyanjyoti Academy
        </h2>
        <div className="w-24 h-1 bg-[#E97F3C] mx-auto mb-8"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          DNYANJYOTIEDUCATION, Pune was founded by Dr.Vishal Bhedurkar (Account and Finance officer, Govt. of Maharashtra).
          Director himself has achieved success in the field of competitive exams. His aim is to make a substantial difference
          in society through the field of education. The Academy has become a renowned and well established name in the arena
          of coaching for Civil Services Examinations. During more than last ten years since its commencement, it has carved
          out a niche for itself as a reliable, student-centric, and result oriented institute in the field of civil services
          coaching, be it state level or central level.
        </p>

        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-[#E97F3C] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#D16D2F] focus:outline-none focus:ring-2 focus:ring-[#E97F3C] focus:ring-offset-2"
          >
            Read More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
  
      <div className="mt-16">
        <div className="w-full h-px bg-[#E97F3C] opacity-20"></div>
      </div>
      {/* Director's Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-[#4A2912] mb-4">
          Director Speaks
          </h3>
          
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-[2px] bg-[#E97F3C]"></div>
          <div className="w-3 h-3 mx-2 rounded-full bg-[#E97F3C]"></div>
          <div className="w-16 h-[2px] bg-[#E97F3C]"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#E97F3C]">
            <img
              src="https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2022/06/210270772_1068134077323954_88033730262245445_n.jpg"
              alt="Dr. Vishal Bhedurkar - Director"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-2xl text-left">
            <h4 className="text-2xl font-bold text-[#4A2912] mb-4">
              Dr. Vishal Bhedurkar
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Life is full of innumerable abilities. We are all a treasure trove of possibilities. We have full of both positive and negative energy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Competitive exams are the mantra of a successful career for the youth today. Dnyanjyoti Education provides you with information, guidance and facilities for various competitions like UPSC, MPSC, BANK, SSC, RAILWAYS etc.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Dnyanjyoti Education is working with the aim of Lighting the life. Enter with an open mind, study hard and enlighten your life and the life of your family. Dnyanjyoti is always with you.
            </p>
            <p className="text-[#E97F3C] font-semibold mt-4">
              Founder of Dnyanjyoti Education
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
