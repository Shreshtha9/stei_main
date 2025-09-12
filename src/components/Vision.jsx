import React from 'react';
import { Check } from 'lucide-react';

const VisionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Main Container with Shadow */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl mt-12 shadow-lg overflow-hidden my-8 md:my-12">
        {/* Red Header Section */}
        <div className="bg-red-500 pt-6 pb-6 md:pt-8 md:pb-8 lg:pt-10 lg:pb-10">
          <div className="px-6 md:px-8 lg:px-12">
            <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3">
              Our Vision
            </h1>
            <div className="w-12 md:w-16 h-1 bg-white"></div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-10">
          
          {/* Bridging the Gap Section */}
          <div className="mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-4 md:mb-5">
              Bridging the Gap
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
              To bridge the gap between aspiration and achievement, through facilitating, real-time 
              interactive learning that transforms.
            </p>
          </div>

          {/* What This Means For You Section */}
          <div className="bg-gray-50 rounded-lg p-4 md:p-6 lg:p-8">
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-5 md:mb-6 lg:mb-8">
              What This Means For You
            </h3>
            
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              {/* First Point */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-800 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  We identify the skills you need to achieve your goals
                </p>
              </div>

              {/* Second Point */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-800 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  We provide interactive learning experiences that develop those skills
                </p>
              </div>

              {/* Third Point */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-red-500 rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-800 text-sm md:text-base lg:text-lg font-medium leading-relaxed">
                  We transform your potential into tangible achievements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;