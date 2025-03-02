import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-11-300x199.png',
    title: 'Welcome to Dnyanjyoti',
    description: 'Empowering minds through quality education',
    buttonText: 'Explore Courses',
    buttonLink: '/courses'
  },
  {
    id: 2,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-11-300x199.png',
    title: 'Expert Faculty',
    description: 'Learn from the best educators in the industry',
    buttonText: 'Meet Our Teachers',
    buttonLink: '/faculty'
  },
  {
    id: 3,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-12-300x199.png',
    title: 'Interactive Learning',
    description: 'Engaging content and personalized attention',
    buttonText: 'Start Learning',
    buttonLink: '/register'
  },

  {
    id: 4,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-10-224x300.png',
    title: 'Welcome to Dnyanjyoti',
    description: 'Empowering minds through quality education',
    buttonText: 'Explore Courses',
    buttonLink: '/courses'
  },
  {
    id: 5,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-11-300x199.png',
    title: 'Expert Faculty',
    description: 'Learn from the best educators in the industry',
    buttonText: 'Meet Our Teachers',
    buttonLink: '/faculty'
  },
  {
    id: 6,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-12-300x199.png',
    title: 'Interactive Learning',
    description: 'Engaging content and personalized attention',
    buttonText: 'Start Learning',
    buttonLink: '/register'
  },
  {
    id: 7,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-10-224x300.png',
    title: 'Welcome to Dnyanjyoti',
    description: 'Empowering minds through quality education',
    buttonText: 'Explore Courses',
    buttonLink: '/courses'
  },
  {
    id: 8,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-11-300x199.png',
    title: 'Expert Faculty',
    description: 'Learn from the best educators in the industry',
    buttonText: 'Meet Our Teachers',
    buttonLink: '/faculty'
  },
  {
    id: 9,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-12-300x199.png',
    title: 'Interactive Learning',
    description: 'Engaging content and personalized attention',
    buttonText: 'Start Learning',
    buttonLink: '/register'
  },
  {
    id: 10,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-10-224x300.png',
    title: 'Welcome to Dnyanjyoti',
    description: 'Empowering minds through quality education',
    buttonText: 'Explore Courses',
    buttonLink: '/courses'
  },
  {
    id: 11,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-11-300x199.png',
    title: 'Expert Faculty',
    description: 'Learn from the best educators in the industry',
    buttonText: 'Meet Our Teachers',
    buttonLink: '/faculty'
  },
  {
    id: 12,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-12-300x199.png',
    title: 'Interactive Learning',
    description: 'Engaging content and personalized attention',
    buttonText: 'Start Learning',
    buttonLink: '/register'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      action();
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px] overflow-hidden bg-gray-100">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transform transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="flex h-full">
              {/* Image Container */}
              <div className="w-1/3 h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-contain"
                />
              </div>
              
              {/* Content Container */}
              <div className="w-2/3 h-full flex items-center bg-gradient-to-r from-[#E97F3C] to-[#D16D2F] px-8">
                <div className="max-w-lg">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-200 mb-4">
                    {slide.description}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-white text-[#E97F3C] font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-100"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#E97F3C] rounded-full p-2 transition-all"
        onClick={handlePrev}
        onKeyDown={(e) => handleKeyDown(e, handlePrev)}
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#E97F3C] rounded-full p-2 transition-all"
        onClick={handleNext}
        onKeyDown={(e) => handleKeyDown(e, handleNext)}
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1 max-w-[80%]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => handleKeyDown(e, () => handleDotClick(index))}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      
      <button
        className="absolute bottom-2 right-2 bg-white/80 hover:bg-white text-[#E97F3C] rounded-full p-2 transition-all"
        onClick={() => setIsPlaying(!isPlaying)}
        onKeyDown={(e) => handleKeyDown(e, () => setIsPlaying(!isPlaying))}
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
      >
        {isPlaying ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Slider;