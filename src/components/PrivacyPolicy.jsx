import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-red-600 text-white py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-4xl">
        {/* Last Updated */}
        <div className="text-right mb-8 md:mb-12">
          <p className="text-gray-500 text-sm md:text-base">
            Last Updated: August 29, 2025
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            Introduction
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed">
            Welcome to stei! Your privacy is important to us. Whether you want to learn a new skill, train your teams, 
            or share what you know with the world, you're in the right place. As an online empowering platform, we're 
            here to help you achieve your goals and transform yourself. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website and use our services, including 
            accessing our pre-recorded online training workshops.
          </p>
        </section>

        {/* Section 1: Information We Collect */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            1. Information We Collect
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6">
            We may collect and process the following types of information:
          </p>
          <ul className="space-y-4 md:space-y-6">
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Personal Information:</span> Name, email address, phone number, and payment details when you register or purchase access to our workshops.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Account Information:</span> Login credentials and preferences related to your stei account.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Usage Data:</span> Information about how you interact with our website, including pages visited, time spent on pages, and access logs.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Device Information:</span> IP address, browser type, device type, and operating system.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Payment Information:</span> If you purchase any services, we may collect payment details through a secure third-party payment gateway.
            </li>
          </ul>
        </section>

        {/* Section 2: How We Use Your Information */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6">
            We use the collected information to:
          </p>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-gray-800 text-base md:text-lg">
              • Provide, maintain, and improve our website and services.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              • Process transactions and manage subscriptions.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              • Personalise your learning experience and recommend relevant workshops.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              • Communicate with you regarding account updates, promotions, and support.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              • Prevent fraud, enforce our Terms of Service, and comply with legal obligations.
            </li>
          </ul>
        </section>

        {/* Section 3: Sharing Your Information */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            3. Sharing Your Information
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6">
            We do not sell or rent your personal information. However, we may share it with:
          </p>
          <ul className="space-y-4 md:space-y-6">
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Service Providers:</span> Third-party companies assisting in payment processing, analytics, customer support, and marketing.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Legal Compliance:</span> If required by law or to protect the rights and safety of stei and its users.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Business Transfers:</span> In case of a merger, acquisition, or asset sale, your information may be transferred.
            </li>
          </ul>
        </section>

        {/* Section 4: Data Security */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            4. Data Security
          </h2>
          <p className="text-gray-800 text-base md:text-lg">
            We take appropriate measures to protect your information from unauthorised access, alteration, 
            disclosure, or destruction. However, no method of data transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* Section 5: Your Rights and Choices */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            5. Your Rights and Choices
          </h2>
          <ul className="space-y-4 md:space-y-6">
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Access & Correction:</span> You may request access to your personal data and correct inaccuracies.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Opt-Out:</span> You can unsubscribe from promotional emails at any time.
            </li>
            <li className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Account Deletion:</span> You may request account deletion by contacting us.
            </li>
          </ul>
        </section>

        {/* Section 6: Cookies & Tracking Technologies */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            6. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-800 text-base md:text-lg">
            We use cookies and similar tracking technologies to enhance user experience, analyse traffic, and 
            improve our services. You can manage cookie preferences through your browser settings.
          </p>
        </section>

        {/* Section 7: Third-Party Links */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            7. Third-Party Links
          </h2>
          <p className="text-gray-800 text-base md:text-lg">
            Our website may contain links to third-party websites. We are not responsible for their privacy practices. 
            We encourage you to review their policies before providing personal data.
          </p>
        </section>

        {/* Section 8: Changes to This Policy */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            8. Changes to This Policy
          </h2>
          <p className="text-gray-800 text-base md:text-lg">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated 
            revision date. Your continued use of our services after changes take effect constitutes acceptance of the 
            revised policy.
          </p>
        </section>

        {/* Section 9: Contact Us */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6">
            9. Contact Us
          </h2>
          <p className="text-gray-800 text-base md:text-lg mb-4 md:mb-6">
            If you have any questions regarding this Privacy Policy, please contact us at:
          </p>
          <div className="space-y-2 md:space-y-3">
            <p className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Email:</span> <span className="text-red-600">support@stei.pro</span>
            </p>
            <p className="text-gray-800 text-base md:text-lg">
              <span className="font-semibold">Website:</span> <span className="text-red-600">https://stei.pro/</span>
            </p>
          </div>
        </section>

        {/* Footer Statement */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 mt-8 md:mt-12">
          <p className="text-gray-800 text-base md:text-lg font-medium text-center">
            By using stei, you consent to the terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;