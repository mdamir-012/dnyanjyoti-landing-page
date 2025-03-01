import React, { useState } from 'react';

const GoogleReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Sapana Palve",
      avatar: "SP",
      rating: 5,
      time: "2 years ago",
      review: "Thanks you so much sirBetter online teaching and notes provide free , wonderful webinar series bettering",
      avatarColor: "bg-purple-200"
    },
    {
      name: "shailesh gurav",
      avatar: "SG",
      rating: 5,
      time: "2 years ago",
      review: "sir whatever you do so much for all students...that too free sir alway bappa blessed you.....thank u so much sir..❤️",
      avatarColor: "bg-blue-200"
    },
    {
      name: "Samiksha Jamanik",
      avatar: "S",
      rating: 5,
      time: "2 years ago",
      review: "Very nice session Sir. For Cleared Information to gives about competitive Exams Thank you very much .",
      avatarColor: "bg-pink-500"
    },
    {
      name: "Gaurav Chavan",
      avatar: "G",
      rating: 5,
      time: "2 years ago",
      review: "Very nice coaching institutes. Really helpful for your study.",
      avatarColor: "bg-gray-400"
    },
    {
      name: "Shweta Kalbende",
      avatar: "G",
      rating: 5,
      time: "2 years ago",
      review: "Sir I got the notes today. As I go through it, they are incredible and concise. I value the insights and guidance you provide us and truly appreciate your efforts of co-ordinating the online platform by providing hard copies of notes. Thank you very much Sir.",
      avatarColor: "bg-gray-400"
    }
  ];

  const mainReview = {
    name: "Dnyanjyoti Education - Best UPSC & MPSC Classes In Pune Maharashtra",
    rating: 4.8,
    totalReviews: 878,
    avatar: "https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/desktop/optimized/rev-ca42595/lh3.googleusercontent.com/places/AJDFj42XKGjpeF4xYYXXA-wEWY1c4lQrjKwjdnKUztaBeHAFTNZWXKyauoESTNP0SH-KFmG0GUN8SJ0uOxQSZV2XOlqXz9q4KQlB1HA=s1600-w300-h300" // Add your logo path here
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <div className="w-full py-8 md:py-16 bg-gray-50">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Main Review Card */}
          <div className="w-full md:w-[400px] p-6 bg-white rounded-lg shadow-md">
            <div className="flex gap-4">
              <img 
                src={mainReview.avatar} 
                alt="Dnyanjyoti Logo"
                className="w-[48px] h-[48px] rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-[15px] font-medium text-gray-800 leading-tight mb-2">
                  {mainReview.name}
                </h3>
                <div className="flex items-center mb-1">
                  <span className="text-[28px] font-bold text-gray-800 leading-none mr-2">{mainReview.rating}</span>
                  <div className="flex gap-[2px]">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-[18px] h-[18px] ${i < Math.floor(mainReview.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[13px] text-gray-600 mb-3">
                  Based on {mainReview.totalReviews} reviews
                </p>
                <a 
                  href="https://www.google.com/search?q=dnyanjyoti+education" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#4285f4] text-white text-[13px] rounded-[4px] hover:bg-blue-600 transition-colors"
                >
                  <img 
                    src="https://www.google.com/favicon.ico" 
                    alt="Google" 
                    className="w-4 h-4"
                  />
                  review us on Google
                </a>
              </div>
            </div>
          </div>

          {/* Review Cards Carousel */}
          <div className="relative w-full">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="w-full min-w-full flex-shrink-0 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${review.avatarColor}`}>
                        {review.name.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800">{review.name}</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-[2px]">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">{review.time}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-4">{review.review}</p>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevSlide}
              className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 z-10"
              aria-label="Previous review"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 z-10"
              aria-label="Next review"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviews;
