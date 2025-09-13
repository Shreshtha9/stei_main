import React from 'react';

const ProductsServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Products & Services
          </h1>
        </div>

        {/* Personalised Coaching Section */}
        <div className="mb-16">
          <div className="bg-red-600 text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-xl md:text-2xl font-semibold">Personalised Coaching</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {/* Individualised Support */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Individualised Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get personalised guidance for self-discovery and empowerment.
              </p>
            </div>

            {/* Coaching for Success */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Coaching for Success
              </h3>
              <p className="text-gray-600 mb-4">
                Cultivate confidence and enhance personal impact.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Workshops Section */}
        <div className="mb-16">
          <div className="bg-red-600 text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-xl md:text-2xl font-semibold">Interactive Workshops</h2>
          </div>

          {/* iACE Series */}
          <div className="mt-8 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              <span className="text-red-600">i</span>ACE Series
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* iACE Interviews */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-red-600">i</span>ACE Interviews
                </h4>
                <p className="text-gray-600 mb-4">Flagship Workshop</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                  Learn more →
                </a>
              </div>

              {/* iACE Conversational Fluency */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-red-600">i</span>ACE Conversational Fluency
                </h4>
                <p className="text-gray-600 mb-4">Enhance your communication skills</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                  Learn more →
                </a>
              </div>

              {/* iACE Individual Impact */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  <span className="text-red-600">i</span>ACE Individual Impact
                </h4>
                <p className="text-gray-600 mb-4">Make a lasting impression</p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Self-Growth Workshops */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Self-Growth Workshops
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Chaos to Calm */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Chaos to Calm
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Find your center in a chaotic world
                </p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors text-sm">
                  Learn more →
                </a>
              </div>

              {/* Critical Thinking */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Critical Thinking
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Develop analytical problem-solving skills
                </p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors text-sm">
                  Learn more →
                </a>
              </div>

              {/* Listening Skills */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Listening Skills
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Master the art of active listening
                </p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors text-sm">
                  Learn more →
                </a>
              </div>

              {/* Self in Sync */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-red-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Self in Sync
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Align your actions with your authentic self
                </p>
                <a href="#" className="text-red-600 font-medium hover:text-red-700 transition-colors text-sm">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* The Strength of SHE Section */}
        <div className="mb-16">
          <div className="bg-red-600 text-white px-6 py-4 rounded-t-lg">
            <h2 className="text-xl md:text-2xl font-semibold">The Strength of SHE</h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-b-lg shadow-md border-l border-r border-b border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                You rise. You lead. You excel.
              </h3>
              <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                Empowering women to discover their unique strengths and leverage them for personal and professional growth.
              </p>
              <a href="#" className="inline-block text-red-600 font-medium text-lg hover:text-red-700 transition-colors">
                Discover more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsServices;