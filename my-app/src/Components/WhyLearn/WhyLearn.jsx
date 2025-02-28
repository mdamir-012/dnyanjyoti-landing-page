import React from 'react';
const features = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Mentoring By Faculties",
    description: "Faculty members share experiences, expertise, and advice on research, teaching, and other professional concerns with less experienced colleagues."
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Mock Tests & Test Series",
    description: "Free Online Test Series & Mock Tests for UPSC, MPSC, Banking Other Govt. Exams."
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Counseling",
    description: "We take one-on-one counseling sessions before the start of preparation and classes."
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Valuable Guidance Till Success",
    description: "Expert & Experienced Faculty. Mentors with great enthusiasm. Personal guidance to all until success."
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Equipped Infrastructure",
    description: "Well Equipped classrooms, library and study room."
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Timely Syllabus",
    description: "Every student covers the entire syllabus well beforehand with time for revision"
  },
  {
    id: 7,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Small Batch Size",
    description: "We take only 40 admissions in every batch, not more. Students to get equal attention from the faculty."
  },
  {
    id: 8,
    icon: (
      <svg className="w-12 h-12 text-coral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Material Support System",
    description: "Updated study materials, written notes, video lectures and printed materials are provided."
  }
];
const WhyLearn = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4A2912] mb-6">
          Why Learn @ Dnyanjyoti
        </h2>
        <div className="w-24 h-1 bg-[#E97F3C] mx-auto"></div>
      </div>
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-center mb-4 text-[#E97F3C]">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold text-[#4A2912] text-center mb-3">
              {feature.title}
            </h3>
     
            <p className="text-[#65A79F] text-center text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    {/* Scroll to Top Button */}
    <div className="fixed bottom-8 right-8">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-[#FFB84C] hover:bg-[#E97F3C] text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  </section>
  )
}

export default WhyLearn
