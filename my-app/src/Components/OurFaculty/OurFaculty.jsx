import React from 'react';

const facultyData = [
    {
        name: "Mr.VAIBHAV PRABHAKARRAO RAUT",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-04-30-at-6.27.12-PM-poet1tbpa9s7q5k4bedooq7cn0sli7d6xmrwa4xjss.jpeg",
        mainTitle: "BYJU'S COMPETITIVE EXAM",
        designation: "Senior Faculty ( MPSC )",
        details: [
            "Senior Faculty of HISTORY AND CURRENT AFFAIRS",
            "at BYJU'S UNACADEMY PLUS and Verified",
            "EDUCATOR.",
            "I am working with UNACADEMY as plus educator",
            "since may 2020,",
            "Barti Lecturer of History",
            "I am working with barti as lecturer of History."
        ]
    },
    {
        name: "Prof.Radharaman Khedkar",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-04-30-at-1.36.26-PM-poeszq4m3ix9xclcihvj596h4738ef2nzal1w011mk.jpeg",
        mainTitle: "Educational qualification- LL.B. M.A. (Hist.)",
        details: [
            "UPSC Mains exam 4 times.",
            "MPSC Rajya Seva Mains Exam.",
            "MH. Judicial Services Exam Interview 2 times, 2019 &",
            "2022.",
            "Bank PO- selection-2013. (Not Joined)",
            "SSC CGL – Qualified for CISF PSI-2012.",
            "(Not appeared in physical)",
            "Law officer Indian Air Force- 2009. (Not Joined)",
            "In coaching since 2014."
        ]
    },
    {
        name: "Prof. Tirupati D.Warpade",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-05-01-at-10.07.22-AM-poet2zmftte48luogenwaxj3dd044l143g4qvl6u0s.jpeg",
        mainTitle: "B.Sc (Agriculture) M.A (Developmental Studies)",
        details: [
            "Teaching in various competative exam related Institutes.",
            "Educator on Unacademy. UPSC, MPSC, CDS, NDA",
            "Teaching since 2017. Worked as a mentor for",
            "Geography, Environment & Ecology, Agriculture,",
            "International Relations. Paper Setter & Evaluator for",
            "Prelims & Mains Test Series."
        ]
    },
    {
        name: "Ramesh Shingade",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-05-16-at-2.27.34-PM-pppnt46dutelp7kpvvp8bwwwx1dcdfnwm2ihdbvybg.jpeg",
        mainTitle: "B. Tech EnTC.",
        details: [
            "UPSC Civil Services 5 Mains and 3",
            "Interviews",
            "Indian Forest Service 3 Mains",
            "MPSC Rajyaseva 3 Mains and 1",
            "Interview",
            "Teaching in Various Prestigious",
            "Institutes Since 2017"
        ]
    },
    {
        name: "Abhishek Thigale",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-05-16-at-1.24.05-PM-pppnt2aph5c11zng6uvz6xdzq9mly1gfxt7ieryqnw.jpeg",
        mainTitle: "MPSC Rajyaseva Mains 4 times",
        details: [
            "PSI Interview",
            "Forest Mains",
            "MPSC RTO 2 Times Main",
            "Bank PO 6, 7 Mains",
            "LIC MainsSSC CGL and CPO Tier 2",
            "UPSC CDS SSB Interview 2 Times",
            "Appeared (Air Force and Navy)",
            "Selected As Bank Officer (Not Joined)",
            "CSAT Book Published Math and",
            "Reasoning"
        ]
    },
    {
        name: "Tushar Ramesh Niley",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-05-16-at-1.03.50-PM-pppnszh6wn8635rjnbo3hg3ly40iay58xf91yy2x6k.jpeg",
        mainTitle: "Dyanprabhodhani: Faculty for GS Geography for UPSC 2009.",
        details: [
            "Dr Ambedkar competitive examination center Dapodi pune:",
            "Faculty for GS geography since 2009 till 2013.",
            "Unique academy Pune: Faculty MPSC English medium",
            "since 2012-2014",
            "Unique Academy Pune: Faculty for UPSC GS geography.",
            "2015- 2020"
        ]
    },
    {
        name: "Mangesh Tawale",
        image: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2022-05-16-at-1.16.25-PM-e1654155722621-pppo1kq3d4zma6r7cr2uh789gnd3wjn6amzd9kne4k.jpeg",
        mainTitle: "B. E. Computer",
        details: [
            "UPSC / MPSC Subject – History",
            "Teaching History since Last 10 Years at",
            "Delhi, Pune, and Major Cities in",
            "Maharashtra"
        ]
    }
];

const OurFaculty = () => {
  
    const firstRow = facultyData.slice(0, 3);
    const secondRow = facultyData.slice(3);

    return (
      <section className="py-12 bg-[#f8f9fa]">
      <div className="container mx-auto px- max-w-[1504px]">
  
          <div className="text-center mb-12">
              <h2 className="text-[40px] font-bold text-[#3a1907] mb-2">
                  Our Faculty
              </h2>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-8">
              {firstRow.map((faculty, index) => (
                  <FacultyCard key={index} faculty={faculty} />
              ))}
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
              {secondRow.map((faculty, index) => (
                  <FacultyCard key={index} faculty={faculty} />
              ))}
          </div>
      </div>
  </section>
    );
};

const FacultyCard = ({ faculty }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full">
  <div className="p-6 flex flex-col items-center">

      <div className="w-[160px] h-[160px] mb-5 rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/200x200?text=Faculty';
              }}
          />
      </div>

  
      <div className="text-center w-full">
          <h3 className="text-[22px] font-bold text-[#333] mb-3 leading-tight">
              {faculty.name}
          </h3>
          <p className="text-[#ff4c1c] text-[15px] font-medium mb-4">
              {faculty.mainTitle}
          </p>
          <div className="space-y-[6px]">
              {faculty.details.map((detail, idx) => (
                  <p key={idx} className="text-[#ff4c1c] text-[14px] leading-relaxed px-2">
                      {detail}
                  </p>
              ))}
          </div>
      </div>
  </div>
</div>
);

export default OurFaculty; 