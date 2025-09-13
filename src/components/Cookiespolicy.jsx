import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>
          <p className="text-gray-800 leading-relaxed text-base mb-8">
            At stei, we are committed to protecting your privacy and ensuring a transparent user experience. This Cookie Policy explains how and why we use cookies on our website. By continuing to browse or use our website, you agree to our use of cookies in accordance with this policy.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            1. What Are Cookies?
          </h2>
          <p className="text-gray-800 leading-relaxed text-base">
            Cookies are small text files stored on your device (computer, smartphone, or tablet) when you visit a website. They help websites recognise your device, enhance functionality, and improve the user experience. Cookies may be temporary (session cookies) or permanent (persistent cookies).
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            2. How We Use Cookies
          </h2>
          <p className="text-gray-800 leading-relaxed text-base mb-4">
            We use cookies for several reasons, including:
          </p>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Essential Cookies:</span> These are necessary for the website to function properly, enabling core features such as secure login and account management.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Performance and Analytics Cookies:</span> These cookies help us understand how visitors interact with our website, allowing us to improve usability and performance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Functional Cookies:</span> These cookies enable enhanced functionality, such as remembering user preferences and personalisation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Advertising and Third-Party Cookies:</span> These cookies are used by third-party services to deliver relevant advertisements and track the effectiveness of marketing campaigns.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            3. Types of Cookies We Use
          </h2>
          <p className="text-gray-800 leading-relaxed text-base mb-6">
            Our website may use the following types of cookies:
          </p>
          
          {/* Cookie Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Type of Cookie
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Purpose
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Session Cookies
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Essential for navigation and security
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Expires when you close the browser
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Persistent Cookies
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Saves preferences and improves experience
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Remains on your device until deleted
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Analytics Cookies
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Tracks website usage for performance improvements
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Varies (Google Analytics: up to 2 years)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Third-Party Cookies
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Used for advertising and social media integration
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-800">
                    Varies by provider
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            4. Managing and Disabling Cookies
          </h2>
          <p className="text-gray-800 leading-relaxed text-base mb-4">
            You have the right to control and disable cookies. You can manage your cookie preferences by:
          </p>
          <ul className="space-y-3 text-gray-800 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                Adjusting your browser settings to block or delete cookies. Most browsers provide options to refuse or delete cookies.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                Opting out of third-party advertising cookies
              </span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed text-base">
            Please note that disabling cookies may impact the functionality of our website and certain features may not work as intended.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            5. Third-Party Cookies
          </h2>
          <p className="text-gray-800 leading-relaxed text-base mb-4">
            Some third-party services we use may place cookies on your device for tracking and analytics purposes. These include:
          </p>
          <ul className="space-y-3 text-gray-800 mb-4">
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Google Analytics</span> – To analyse website traffic and user behaviour.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Facebook Pixel</span> – For marketing and advertising optimisation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
              <span className="leading-relaxed text-base">
                <span className="font-semibold">Payment Gateways</span> – To facilitate secure transactions.
              </span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed text-base">
            We encourage you to review their privacy policies for more information on how they handle your data.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            6. Updates to This Cookie Policy
          </h2>
          <p className="text-gray-800 leading-relaxed text-base">
            We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about our cookie practices.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            7. Contact Us
          </h2>
          <p className="text-gray-800 leading-relaxed text-base mb-4">
            If you have any questions about our Cookie Policy or data practices, please contact us.
          </p>
          <p className="text-gray-800 leading-relaxed text-base">
            By using our website, you consent to our use of cookies in accordance with this policy.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Last updated: March 27, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;