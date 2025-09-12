import React from 'react';

const InspirationCorner = () => {
  const quotes = [
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      bgColor: "bg-red-50",
      borderColor: "border-red-300"
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      bgColor: "bg-green-50",
      borderColor: "border-green-300"
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
      bgColor: "bg-green-50",
      borderColor: "border-green-300"
    },
    {
      text: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300"
    },
    {
      text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
      author: "Mother Teresa",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-300"
    }
  ];

  const handleExploreMore = () => {
    // Navigate to inspiration page - replace with your actual navigation logic
    window.location.href = '/inspiration';
  };

  return (
    <div className="max-w-7xl mx-auto -mt-8 px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-700 mb-4">
          Inspiration Corner
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover wisdom and motivation from our collection of inspirational quotes.
        </p>
      </div>

      {/* Quotes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={`${quote.bgColor} ${quote.borderColor} border-l-4 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group`}
          >
            <blockquote className="text-gray-800 italic text-base leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
              "{quote.text}"
            </blockquote>
            <cite className="text-gray-700 font-medium text-sm not-italic group-hover:text-gray-800 transition-colors duration-300">
              — {quote.author}
            </cite>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="text-center">
        <button
          onClick={handleExploreMore}
          className="bg-red-700 text-white px-8 py-3 rounded-md font-medium text-base hover:bg-red-800 active:bg-red-900 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Explore More Inspiration
        </button>
      </div>
    </div>
  );
};

export default InspirationCorner;