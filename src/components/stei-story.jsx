import React from 'react';
import { ArrowLeft } from 'lucide-react';

const SteiStoryPage = () => {
  const handleBackToAbout = () => {
    // Navigate to about page
    console.log('Navigating to About page');
    // In a real app, you would use router navigation like:
    // navigate('/about') or history.push('/about')
  };

  const handleExploreWorkshops = () => {
    // Navigate to workshops page
    console.log('Navigating to Workshops page');
    // In a real app, you would use router navigation like:
    // navigate('/workshops') or history.push('/workshops')
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gradient-to-r from-black/70 to-black/30">
          {/* Simulated background image with people */}
          <div className="absolute inset-0 bg-gray-800"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/images/banner-1.png')"
            }}
          ></div>
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Back to About Button */}
            <div className="pt-6 md:pt-8 lg:pt-12 px-4 md:px-8 lg:px-16 xl:px-24">
              <button 
                onClick={handleBackToAbout}
                className="flex items-center text-white hover:text-gray-300 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="text-sm md:text-base">Back to About</span>
              </button>
            </div>

            {/* Hero Content */}
            <div className="flex-1 flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-24">
              <div className="max-w-2xl">
                <h1 className="text-white mb-4">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light">The </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light">
                    ste<span className="text-[#900000]">i</span>
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-light"> Story</span>
                </h1>
                <div className="flex items-center mb-2">
                  <h2 className="text-white text-lg md:text-xl lg:text-2xl font-light">Empowering Individuals</h2>
                </div>
                <div className="w-16 h-0.5 bg-[#900000]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Journey Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-8 md:mb-12">
            Our Journey of Empowerment
          </h2>

          {/* Main Description */}
          <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            The world is full of potential, but many talented individuals struggle to bridge the gap between aspiration 
            and achievement. Often, it's not a lack of knowledge holding them back—it's the lack of exposure, 
            opportunity, and real-time learning experiences that can truly transform them.
          </div>

          {/* STEI Introduction */}
          <div className="mb-8 md:mb-12">
            <p className="text-[#900000] text-lg md:text-xl font-medium mb-6 text-center md:text-left">
              That's where stei steps in.
            </p>

            <div className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 space-y-4">
              <p>
                <span className="font-medium">stei was founded with a simple yet powerful mission: Accessibility & Empowerment.</span> We believe that 
                learning should be anytime, anywhere, for anyone & everyone. More than just skills, we focus on self-
                discovery and growth, ensuring that every individual has the tools they need to show up confidently, 
                communicate effectively, and take charge of their success.
              </p>

              <p>
                Through our interactive, hands-on workshops, we aren't just skilling people—we're building a movement. 
                A community of thinkers, doers, and achievers who recognise that personal development isn't a luxury—
                it's a necessity.
              </p>
            </div>

            {/* Quote Block */}
            <div className="border-l-4 border-[#900000] pl-6 my-8 md:my-12">
              <div className="space-y-2 text-gray-700 text-base md:text-lg">
                <p className="font-medium">Is it easy? No.</p>
                <p className="font-medium">Is it doable? Absolutely.</p>
                <p className="font-medium">And no one has to do it alone.</p>
              </div>
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              The journey has just begun, and we're here to bridge the gap, one transformation at a time.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              Join us. Let's grow together.
            </h3>
            
            <button 
              onClick={handleExploreWorkshops}
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Workshops
            </button>
          </div>
        </div>
      </div>

      {/* Three Pillars Section */}
      <div className="bg-gray-50 py-12 md:py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Accessibility */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Accessibility
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Learning opportunities that are accessible to everyone, 
                regardless of background or experience level.
              </p>
            </div>

            {/* Empowerment */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Empowerment
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Equipping individuals with the confidence and skills to 
                take charge of their personal and professional growth.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Building a supportive network of like-minded individuals 
                committed to continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteiStoryPage;