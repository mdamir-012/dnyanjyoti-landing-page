import React, { useEffect, useState } from 'react';
const slides = [
  {
    id: 1,
    image: 'https://cdn-fikdi.nitrocdn.com/jMPRxdBtzdyhpLnQAckZGMhPAXVBimeo/assets/images/optimized/rev-ca42595/www.dnyanjyoti.com/wp-content/uploads/2023/12/image-10-224x300.png',
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
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transform transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-full scale-95'
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            </div>
            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <div className="max-w-3xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 transform transition-all duration-700 delay-100 translate-y-0 opacity-100">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 transform transition-all duration-700 delay-200">
                    {slide.description}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onClick={handlePrev}
        onKeyDown={(e) => handleKeyDown(e, handlePrev)}
        aria-label="Previous slide"
        tabIndex={0}
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onClick={handleNext}
        onKeyDown={(e) => handleKeyDown(e, handleNext)}
        aria-label="Next slide"
        tabIndex={0}
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => handleDotClick(index)}
            onKeyDown={(e) => handleKeyDown(e, () => handleDotClick(index))}
            aria-label={`Go to slide ${index + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
      {/* Play/Pause Button */}
      <button
        className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm hover:scale-110"
        onClick={() => setIsPlaying(!isPlaying)}
        onKeyDown={(e) => handleKeyDown(e, () => setIsPlaying(!isPlaying))}
        aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        tabIndex={0}
      >
        {isPlaying ? (
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
              d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
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
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
export default Slider;