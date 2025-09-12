import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FounderPopup from './FounderPopupProps';
import FreeWebinarsSection from "./free-webinars-section";
import InspirationCorner from './InspirationalCorner';

// SteiText component for consistent branding
const SteiText = ({ className = '' }) => (
  <span className={`font-bold text-red-600 ${className}`}>STEI</span>
);


const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [missionLoaded, setMissionLoaded] = useState(false);
   const [hoveredCard, setHoveredCard] = useState(null);
  const [showTestimonialPopup, setShowTestimonialPopup] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showWorkshopTestimonialPopup, setShowWorkshopTestimonialPopup] = useState(false);
  const sectionRef = useRef(null);
  const [showFounderPopup, setShowFounderPopup] = useState(false);

  const openTestimonialPopup = (name, role, image, fullText) => {
    setSelectedTestimonial({ name, role, image, fullText });
    setShowTestimonialPopup(true);
  };

  const closeTestimonialPopup = () => {
    setShowTestimonialPopup(false);
  };

  const openWorkshopTestimonialPopup = () => {
    setShowWorkshopTestimonialPopup(true);
  };

  const closeWorkshopTestimonialPopup = () => {
    setShowWorkshopTestimonialPopup(false);
  };
  
  
  const slides = [
    {
      id: 1,
      title: "Empowering Individuals",
      subtitle: "Building confidence through personalised coaching in an engaging, inclusive environment",
      backgroundImage: "/images/banner-1.png"
    },
    {
      id: 2,
      title: "Presence-Driven Learning - You Show Up. You Shift. That's the Deal.",
      subtitle: "No recordings. No passive downloads. No distractions.",
      backgroundImage: "/images/workshop-training.jpg"
    }
  ];
  const features = [
  {
    id: 1,
    title: "Self-Growth Platform",
    description: "Your foundation for personal and professional development.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/self%20growth-Dq9NfPnNHwyrcF74kLvUGEtF76kWSh.webp",
    link: "/about#unique",
  },
  {
    id: 2,
    title: "Live Interactive Sessions",
    description: "Real-time interactive sessions designed to engage, enable and inspire growth.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Live%20interactive%20sessions.jpg-rRo36EGhvpYrpvR6spxWltwjTgttBb.jpeg",
    link: "/about#mentors",
  },
  {
    id: 3,
    title: "Focused on Transformation",
    description: "Practical, actionable strategies for measurable results.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_t5c26yt5c26yt5c2.jpg-iLd396GsgAk6yYL6qyrMcLGkb517JQ.jpeg",
    link: "/products-services#iace",
  },
  {
    id: 4,
    title: "Bilingual Accessibility",
    description: "Workshops in both English and Hindi languages for our diverse audience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bilingual%20accessability.jpg-9c1YWaJ3sO2Dbdnhv260dbpXs78sfS.jpeg",
    link: "/about#support",
  },
];
const movementCards = [
  {
    id: 1,
    title: "Community",
    description: "We are a community dedicated to enablement and empowerment",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Community-sm0HExoBL5SyfCgT99q4n3teC3xbb1.jpeg",
    link: "/join",
  },
  {
    id: 2,
    title: "Personal Growth",
    description: "Embark on a transformative journey with us.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personal%20Growth-h4qVreduaeoD2W1gieEJCEUy2TuKkO.png",
    link: "/workshops",
  },
  {
    id: 3,
    title: "Empowerment",
    description: "Identify and reach your full potential.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Empowerment%20Image-nWpx4toFPPhhZYmmmAtydQ0mEdCzUQ.jpeg",
    link: "/stories",
  },
];
 const workshopTestimonials = [
    {
      name: "Amit",
      company: "Agribid Private Limited",
      designation: "Software Tester",
      testimonial: "The iACE Interviews workshop gave me clear ideas about what HR people look for in candidates. It helped me see my strengths and match them to the company's goals. The hands-on approach also boosted my confidence.",
      image: "/images/amit.jpg"
    },
    {
      name: "Gaurav",
      company: "Agribid Private Limited", 
      designation: "Product Manager",
      testimonial: "The iACE Interviews workshop showed me what HR professionals expect. It helped me see my strengths more clearly and how they fit the company's goals.",
      image: "/images/gaurav.jpg"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // Mission section loading
  useEffect(() => {
    setMissionLoaded(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Slider Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-shrink-0 w-full h-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0  bg-opacity-20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full">
                <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 w-full">
                  <div className="max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
                    {/* Main Title */}
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Red Underline */}
                    <div className="w-12 xs:w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-0.5 xs:h-0.5 sm:h-1 md:h-1 lg:h-1.5 xl:h-2 bg-red-600 mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10"></div>
                    
                    {/* Subtitle */}
                    <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl text-white font-light leading-relaxed max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10 2xl:left-12 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 xl:p-5 2xl:p-6 transition-all duration-200 group touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 xs:right-3 sm:right-4 md:right-6 lg:right-8 xl:right-10 2xl:right-12 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 xs:p-2.5 sm:p-3 md:p-3.5 lg:p-4 xl:p-5 2xl:p-6 transition-all duration-200 group touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 2xl:bottom-16 left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10 2xl:left-12 z-20 flex space-x-2 xs:space-x-2.5 sm:space-x-3 md:space-x-3.5 lg:space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 rounded-full transition-all duration-300 touch-manipulation ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 xs:h-0.5 sm:h-1 md:h-1 lg:h-1.5 xl:h-2 2xl:h-2.5 bg-black bg-opacity-20 z-20">
          <div 
            className="h-full bg-red-600 transition-all duration-300 ease-out"
            style={{ 
              width: `${((currentSlide + 1) / slides.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-gray-50">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-[#900000]">
            Our Mission
          </h2>
          
          {!missionLoaded ? (
            <div className="min-h-40 flex items-center justify-center py-6">
              <div className="w-8 h-8 xs:w-12 xs:h-12 sm:w-16 sm:h-16 border-2 xs:border-3 sm:border-4 border-[#D40F14] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="bg-white rounded-md xs:rounded-lg sm:rounded-xl shadow-sm xs:shadow-md sm:shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Spinning STEI Logo */}
                <div className="flex justify-center items-center p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 bg-gray-50 order-1">
                  <div className="scale-75 xs:scale-90 sm:scale-100 md:scale-110 lg:scale-125 xl:scale-150">
                    <div className="relative w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                      <svg
                        className="w-full h-full animate-spin"
                        viewBox="0 0 100 100"
                        style={{
                          transform: "rotate(45.96deg)",
                          animationDuration: "20s"
                        }}
                      >
                        <defs>
                          <path id="circlePath" d="M50,50 m-35,0a35,35 0 1,1 70,0a35,35 0 1,1 -70,0"></path>
                        </defs>
                        <text fontSize="3.5" fontWeight="bold" fill="black">
                          <textPath href="#circlePath" startOffset="0%">
                            🔴 EMPOWERING INDIVIDUALS • EMPOWERING INDIVIDUALS •
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 flex items-center">
                          <SteiText />
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10 space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 order-2">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#900000]">
                    Accessibility and Empowerment
                  </h3>

                  <div className="space-y-1 xs:space-y-1.5 sm:space-y-2 md:space-y-3">
                    <div>
                      <h4 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#900000]">
                        Accessibility
                      </h4>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Learning Anytime, Anywhere and for Anyone & Everyone
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#900000]">
                        Empowerment
                      </h4>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                        Joining individuals on their journey of self-discovery and growth
                      </p>
                    </div>

                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed pt-1 xs:pt-2 sm:pt-3">
                      At <SteiText />, we are dedicated to making transformative education accessible to all, regardless of
                      location or background. We believe in empowering each person to reach their full potential through
                      guidance, tools, and mindset development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
        <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* What Makes STEI Unique Section */}
        <div className="text-center mb-16 relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What Makes <SteiText className="mx-1" /> Unique
          </h2>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the <SteiText className="mx-1" /> difference and how our unique approach can help you achieve your
            goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <a
              href={feature.link}
              key={feature.id}
              className={`group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 block ${
                hoveredCard === feature.id ? "scale-105 shadow-xl z-10" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredCard === feature.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-red-600/90 to-transparent opacity-0 transition-opacity duration-500 ${
                    hoveredCard === feature.id ? "opacity-70" : ""
                  }`}
                />
              </div>

              <div className="p-4 relative">
                <div
                  className={`absolute top-0 left-0 w-1 h-0 bg-red-600 transition-all duration-500 ${
                    hoveredCard === feature.id ? "h-full" : ""
                  }`}
                />
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
    {/* Free Webinars Section */}
        <div className="mt-24 mb-16">
          <FreeWebinarsSection />
        </div>
  
          <div className="mt-24 mb-16 py-12 px-6 rounded-xl bg-red-50 border border-red-200">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Join the <SteiText className="mx-1" /> Movement
            </h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto">
            {movementCards.map((card) => (
              <div key={card.id} className="flex-1 mb-6 md:mb-0">
                <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col shadow-md hover:shadow-xl">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full ${card.id === 3 ? "object-contain object-top scale-110" : "object-cover"}`}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow border border-t-0 border-gray-200 rounded-b-lg">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-red-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Banner */}
            <div className="bg-red-600 text-white p-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded-md">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/STEI-Logo-%281%29-w1Rbxxbadl9g4ybZTrCkoRLIpufLlB.png"
                      alt="STEI Logo"
                      className="h-10 w-auto"
                    />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold">
                    <span className="bg-black px-3 py-2 rounded-full">
                      stei launches its i<span className="text-red-900">ACE</span> Series Workshops
                    </span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Workshop Content */}
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left side - Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interview-AHezjrq6rAtFTyuvdGRFzfvCPMOrul.jpeg"
                      alt="STEI Interview Workshop Session"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                      i<span className="text-red-600">ACE</span> Interviews
                    </h2>
                    <p className="text-xl md:text-2xl font-bold text-red-600">Flagship Workshop</p>
                  </div>

                  <div>
                    <p className="text-lg md:text-xl mb-2">Conducted by</p>
                    <button
                      onClick={() => setShowFounderPopup(true)}
                      className="text-blue-600 text-lg md:text-xl hover:underline border-none bg-transparent cursor-pointer"
                    >
                      DR. SANDHYA TEWARI (LIFE COACH & MENTOR)
                    </button>
                  </div>

                  <p className="text-gray-700">
                    Interview Skills Workshop is designed to help participants build confidence and master the art of
                    acing interviews. It covers key aspects such as understanding employer expectations and answering
                    common and behavioural questions effectively whilst presenting oneself professionally. Gain
                    practical tips and insight on addressing FAQs by HR to enhance your chances of success.
                  </p>
                  
                  <div className="mt-6">
                    <button
                      onClick={openWorkshopTestimonialPopup}
                      className="bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors duration-300"
                    >
                      See What Our Participants Say
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workshops Cards Section */}
        <div className="mt-24 py-16 px-6 rounded-xl bg-red-50 border border-red-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Workshops</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of interactive workshops designed to enhance your skills and boost your confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Workshop Card 1 - Updated with new content */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Interview-mvBLBc80AiuspNNDwl3KTe0RtDZXtw.jpeg"
                  alt="STEI iACE Series Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  i<span className="text-red-900 font-bold">ACE</span> Series
                </h3>
                <p className="text-gray-600 mb-4">
                  The i<span className="text-red-900 font-bold">ACE</span> series is designed to help you ace
                  interviews, improve conversational fluency, and create a lasting impact, transforming confidence into
                  empowerment.
                </p>
              </div>
            </div>

            {/* Workshop Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/self%20growth-n6N0uU7pdGBM4IxESBbxwxlC56ZAc9.webp"
                  alt="Self-growth Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  <span className="text-red-900">Self-growth</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  Self-growth workshops are curated for those who aspire to evolve, build resilience, present with
                  purpose, and strengthen their drive for success.
                </p>
              </div>
            </div>

            {/* Workshop Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Individual%20Impact%20copy-K0eqsUG7AnCSBD9TvSY3xAqnixXtbR.jpeg"
                  alt="The Strength of She Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  The Strength of <span className="text-red-900">She</span>
                </h3>
                <p className="text-gray-600 mb-4">
                  An interactive, reflective workshop for women who carry it all—yet are often unseen. Step in. Claim
                  your power. Discover resilience, and strengthen their drive for success.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/workshops"
              className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-700 transition-colors duration-300 inline-block"
            >
              View All Workshops
            </a>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 py-16 px-6 bg-gray-50 rounded-xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Personal Experience with Mentor</h2>
            <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from individuals who have transformed their lives through our mentorship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
            {/* Testimonial 1 - With provided image */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%201.jpg-m1c8D9k45kuJroQB2oIPTN2lho1G7K.jpeg"
                    alt="Salman Rajkotwala"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-14 text-center">
                <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">
                  "I had the privilege of being associated with Sandhya Mam between 2011 and 2013, and the impact she
                  had on my life goes far beyond Business Communication. As a mentor, she didn't just teach us the
                  fundamentals of business and management but also transformed my entire personality and vision..."
                </p>
                <button
                  onClick={() =>
                    openTestimonialPopup(
                      "Salman Rajkotwala",
                      "Al Wathba Insurance",
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%201.jpg-m1c8D9k45kuJroQB2oIPTN2lho1G7K.jpeg",
                      "I had the privilege of being associated with Sandhya Mam between 2011 and 2013, and the impact she had on my life goes far beyond Business Communication. As a mentor, she didn't just teach us the fundamentals of business and management but also transformed my entire personality and vision. Her ability to recognize potential and nurture talent is unparalleled—she truly has a keen eye for discovering and honing skills in people. What sets Sandhya Mam apart is her holistic approach to mentorship. Whether it was refining our communication skills, sharpening our leadership abilities, or instilling a deep understanding of business strategies, she equipped us with the tools to excel in every aspect of life. Her passion for empowering students and constantly sharing valuable knowledge makes her an exceptional educator and guide. She didn't just teach us; she inspired us to be better versions of ourselves. I am grateful for her mentorship, which continues to influence my personal and professional journey.",
                    )
                  }
                  className="text-red-600 font-medium hover:underline mt-2"
                >
                  Read More
                </button>
                <h4 className="text-lg font-bold text-gray-800 mt-4">Salman Rajkotwala</h4>
                <p className="text-red-600">Al Wathba Insurance</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%202.jpg-BUheIKGGtmjLMFMB0JnmB1TB9axQu5.jpeg"
                    alt="Shahzann A Dadachanji"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-14 text-center">
                <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">
                  "Dr. Sandhya Tewari was my professor during my Post-Graduate Diploma in Pharmaceutical Management in
                  2006-07. She taught us Human Resource Management and played an instrumental role in shaping our
                  personalities for placements and interviews..."
                </p>
                <button
                  onClick={() =>
                    openTestimonialPopup(
                      "Shahzann A Dadachanji",
                      "PHARMACEUTICAL MANAGEMENT",
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%202.jpg-BUheIKGGtmjLMFMB0JnmB1TB9axQu5.jpeg",
                      "Dr. Sandhya Tewari was my professor during my Post-Graduate Diploma in Pharmaceutical Management in 2006-07. She taught us Human Resource Management and played an instrumental role in shaping our personalities for placements and interviews. Her lectures were always insightful, packed with real-world knowledge, and her teaching methods were incredibly motivating. What sets Dr. Tewari apart is her ability to blend kindness and empathy with the precision of giving constructive feedback that propels you forward. Her unwavering commitment to nurturing talent left a lasting impression on me, and even after all these years, she remains someone I deeply respect and look up to for her wisdom and guidance. Today, as a creative professional in market research, with over a decade of experience in clinical research and digital marketing, and with being a consultant for budding brands, I still find myself inspired by the lessons she imparted. Her emphasis on building confidence and honing professional skills has been invaluable in my professional and personal journey. I wish Dr. Tewari all the very best for her new venture, STEI. I am certain she will continue to create dynamic professionals and inspire countless others through her remarkable career, just as she inspired me. Lots of love and light",
                    )
                  }
                  className="text-red-600 font-medium hover:underline mt-2"
                >
                  Read More
                </button>
                <h4 className="text-lg font-bold text-gray-800 mt-4">Shahzann A Dadachanji</h4>
                <p className="text-red-600">PHARMACEUTICAL MANAGEMENT</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%203.jpg-RPoHDTr2UwPrqbO7D2FdgSI4bmTS9h.jpeg"
                    alt="Vrinda Menon"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-14 text-center">
                <svg className="w-10 h-10 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 mb-4">
                  "Professor Sandhya offers you the precious gift of the ability to renew your sense of self-confidence.
                  Having shaped a lot of who I am today, this special bond with Professor is something I will always
                  hold close to my heart."
                </p>
                <button
                  onClick={() =>
                    openTestimonialPopup(
                      "Vrinda Menon",
                      "Entrata India Pvt Ltd",
                      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/testimonal%203.jpg-RPoHDTr2UwPrqbO7D2FdgSI4bmTS9h.jpeg",
                      "I write this testimonial to express my sincere gratitude and admiration for Professor Sandhya Tiwari. I feel obliged to have been one of her students in the year 2011-2013, when I was studying for my Masters. While it is no news that she is an exceptional educator, what makes her special for the likes of me is how well she sees right through you! We have all struggled with self-doubt & uncertainty during our learning years, & it isn't uncommon to find people who have well-meaning suggestions to offer at this stage. But finding someone who works with you, helping you find your own answers – jackpot! Many can offer you encouragement in life, Professor Sandhya offers you the precious gift of the ability to renew your sense of self-confidence. One other distinctive power Professor Sandhya has, that I have forever looked up to & have always strived to emulate, is to always speak clearly and directly, no matter what. Calling a spade, a spade is after all not everyone's cup of tea! Having shaped a lot of who I am today, this special bond with Professor is something I will always hold close to my heart…",
                    )
                  }
                  className="text-red-600 font-medium hover:underline mt-2"
                >
                  Read More
                </button>
                <h4 className="text-lg font-bold text-gray-800 mt-4">Vrinda Menon</h4>
                <p className="text-red-600">Entrata India Pvt Ltd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Popup */}
        {showTestimonialPopup && selectedTestimonial && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600">
                      <img
                        src={selectedTestimonial.image}
                        alt={selectedTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{selectedTestimonial.name}</h3>
                      <p className="text-red-600">{selectedTestimonial.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeTestimonialPopup}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-6">
                  <svg className="w-10 h-10 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedTestimonial.fullText}</p>
                </div>

                <div className="text-center">
                  <button
                    onClick={closeTestimonialPopup}
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workshop Testimonial Popup */}
        {showWorkshopTestimonialPopup && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Workshop Participants Experience</h3>
                    <p className="text-gray-600">Hear from our iACE Interviews workshop participants</p>
                  </div>
                  <button
                    onClick={closeWorkshopTestimonialPopup}
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 mt-16">
                  {workshopTestimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-6 relative">
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="pt-14 text-center">
                        <svg className="w-8 h-8 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-gray-700 mb-4 text-base leading-relaxed">
                          "{testimonial.testimonial}"
                        </p>
                        <h4 className="text-xl font-bold text-gray-800 mt-4">{testimonial.name}</h4>
                        <p className="text-red-600 font-medium text-lg">{testimonial.designation}</p>
                        <p className="text-gray-600 text-base">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={closeWorkshopTestimonialPopup}
                    className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
        </section>
           {/* Add the FounderPopup at the end */}
      {showFounderPopup && (
        <FounderPopup 
          isOpen={showFounderPopup} 
          onClose={() => setShowFounderPopup(false)} 
        />
      )}
      <InspirationCorner/>
    </div>
  );
};

export default HomePage;