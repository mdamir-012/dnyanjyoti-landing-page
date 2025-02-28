import React from 'react';

const Scholorship = () => {
  const scholarshipStats = [
    {
      icon: "★",
      number: "10,00,000",
      description: "Worth Of Scholarship Awarded"
    },
    {
      icon: "👍",
      number: "100+",
      description: "Student Awarded Scholarship"
    },
    {
      icon: "🏆",
      number: "Upto 50%",
      description: "Scholarship Provided To Students"
    }
  ];

  return (
    <div className="w-full py-16">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#4a2c2a] mb-6">
            Scholarships
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Scholarships to bright and deserving candidates based on their academic record and financial background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scholarshipStats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl text-black mb-6">
                {stat.icon === "★" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                )}
                {stat.icon === "👍" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 20h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1H2v11zm19.83-7.12c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66-.23-.45-.52-.86-.88-1.22L14 2 7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.84C7 18.95 8.05 20 9.34 20h8.11c.7 0 1.36-.37 1.72-.97l2.66-6.15z"/>
                  </svg>
                )}
                {stat.icon === "🏆" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zm-7 7c-1.66 0-3-1.34-3-3V5h6v4c0 1.66-1.34 3-3 3z"/>
                  </svg>
                )}
              </div>
              <div className="text-[#ff6b4b] text-4xl font-bold mb-4">
                {stat.number}
              </div>
              <p className="text-gray-700 text-lg">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholorship;
