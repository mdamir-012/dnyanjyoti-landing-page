import React from 'react';
import { Link } from 'react-router-dom';
const civilServicesData = [
  {
    id: 1,
    title: 'MPSC',
    description: 'The Maharashtra Public Service Commission is a body created by the Constitution of India under article 315 to select officers for civil service jobs in the Indian state of Maharashtra according to the merits of the applicants and the rules of reservation.',
    link: '/courses/mpsc'
  },
  {
    id: 2,
    title: 'UPSC',
    description: 'The Civil Services Examination is a nationwide competitive examination in India conducted by the Union Public Service Commission for recruitment to various Civil Services of the Government of India, including the Indian Administrative Service, Indian Foreign Service, and Indian Police Service.',
    link: '/courses/upsc'
  }
];
const engineeringMedicalData = [
  {
    id: 1,
    title: 'Pre Nurture & Career Foundation 6th to 10th',
    description: 'Foundation exams for 6th to 10th-grade students asses score subjects like Math\'s, Science, Language arts, & Social Studies to gauge readiness for advanced coursework. They determine a student\'s preparedness for higher education levels.',
    link: '/courses/foundation'
  },
  {
    id: 2,
    title: 'JEE (Main + Adv) Exam',
    description: 'JEE Main is for admission in NITs, IITs and other State/Central funded engineering colleges. JEE Advanced is for admission in IITs (premier engineering institutes in India.) In order to be eligible for JEE Advanced, Candidates need to clear JEE Main.',
    link: '/courses/jee'
  },
  {
    id: 3,
    title: 'NEET (UG) Exam',
    description: 'All India Pre-Medical Test (AIPMT), for student who wish to pursue undergraduate medical (MBBS), Dental (BDS) & Ayush (BAMS, BUMS, BHMS, etc.) Courses in Government and Private institutions in India & also for those intending to pursue primary medical qualification abroad.',
    link: '/courses/neet'
  },
  {
    id: 4,
    title: 'MHT-CET Exam',
    description: 'All India Pre-Medical Test (AIPMT), for student who wish to pursue undergraduate medical (MBBS), Dental (BDS) & Ayush (BAMS, BUMS, BHMS, etc.) Courses in Government and Private institutions in India & also for those intending to pursue primary medical qualification abroad.',
    link: '/courses/mht-cet'
  }
];
const DemoClassBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#4A2912] to-[#E97F3C] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
    
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 animate-fade-in">
              Contact Us To Attend Free Demo Class
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Experience our teaching methodology and meet our expert faculty
            </p>
          </div>
      
          <Link
            to="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-[#4A2912] font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-[#4A2912] hover:text-white hover:shadow-lg transform hover:scale-105"
          >
            <span className="relative z-10">Contact</span>
            <svg
              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
 
      <div className="absolute top-0 right-0 -mt-4 -mr-4">
        <div className="w-24 h-24 bg-white/10 rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4">
        <div className="w-16 h-16 bg-white/10 rounded-full"></div>
      </div>
    </div>
  );
};
const CourseSection = ({ title, courses }) => {
  return (
    <div className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4A2912] mb-6">
          {title}
        </h2>
        <div className="w-24 h-1 bg-[#E97F3C] mx-auto mb-8"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl overflow-hidden"
          >
        
            <div className="h-1 bg-[#E97F3C]"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#4A2912] mb-6 text-center">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-8 text-center leading-relaxed">
                {course.description}
              </p>
              <div className="flex justify-center">
                <Link
                  to={course.link}
                  className="inline-flex items-center px-6 py-3 bg-[#E97F3C] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D16D2F]"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <div className="w-16 h-1 bg-yellow-400"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const CivilServices = () => {
  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-4 mt-16">
        {/* Civil Services Section */}
        <CourseSection title="Civil Services" courses={civilServicesData} />
        {/* Engineering & Medical Section */}
        <CourseSection title="Engineering & Medical Courses" courses={engineeringMedicalData} />
        {/* CTA Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-[#4A2912] rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your Journey Today
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join Dnyanjyoti's comprehensive coaching programs and take the first step towards your dream career
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#E97F3C] text-white font-semibold rounded-lg transition-all duration-300 hover:bg-[#D16D2F]"
            >
              Schedule Free Classes
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div> */}
      </div>
      <DemoClassBanner />
    </section>
  );
};
export default CivilServices;