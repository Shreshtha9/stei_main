import React, { useState } from 'react';


const OurInspirations = () => {
     const [showTestimonialPopup, setShowTestimonialPopup] = useState(false);
      const [selectedTestimonial, setSelectedTestimonial] = useState(null);
      const [showWorkshopTestimonialPopup, setShowWorkshopTestimonialPopup] = useState(false);
      
  const openTestimonialPopup = (name, role, image, fullText) => {
    setSelectedTestimonial({ name, role, image, fullText });
    setShowTestimonialPopup(true);
  };

  const closeTestimonialPopup = () => {
    setShowTestimonialPopup(false);
  };



  const closeWorkshopTestimonialPopup = () => {
    setShowWorkshopTestimonialPopup(false);
  };
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
return(
    <div>
{/* Testimonials Section */}
        <div className=" py-16 px-6 bg-gray-50 rounded-xl">
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
    );
};
export default OurInspirations;