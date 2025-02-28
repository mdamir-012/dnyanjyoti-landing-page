import React from 'react';
import { Link } from 'react-router-dom';
const courses = [
  {
    id: 1,
    title: 'UPSC MPSC Foundation',
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/12538006776.png',
    description: 'Comprehensive preparation for UPSC and MPSC examinations',
    link: '/courses/upsc-mpsc'
  },
  {
    id: 2,
    title: 'Pre. Foundation Class 6th to 10th',
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-4.png',
    description: 'Strong foundation for academic excellence',
    link: '/courses/pre-foundation'
  },
  {
    id: 3,
    title: 'JEE (Mains + Adv) IIT-JEE',
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-5.png',
    description: 'Expert guidance for JEE preparation',
    link: '/courses/jee'
  },
  {
    id: 4,
    title: 'NEET UG',
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-6.png',
    description: 'Comprehensive medical entrance preparation',
    link: '/courses/neet'
  },
  {
    id: 5,
    title: 'MHT-CET',
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-7.png',
    description: 'Specialized coaching for MHT-CET exam',
    link: '/courses/mht-cet'
  }
];
const Courses = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of courses designed to help you achieve your academic and career goals
          </p>
        </div>
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.link}
              className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Course Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-6 py-2 bg-white text-gray-800 font-semibold rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </span>
                </div>
              </div>
              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Enroll Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link
            to="/all-courses"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View All Courses
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
    </section>
  );
};
export default Courses;