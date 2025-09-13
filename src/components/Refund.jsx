import React from 'react';

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-6xl">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
            Refund & Cancellation Policy
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-8 md:mb-12">
            Last updated: March 21, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            At stei, we are dedicated to providing high-quality online interactive workshops and programs that cater to the diverse learning needs of our users. Our workshops are designed to empower individuals with knowledge, skills, and growth opportunities. We understand that circumstances may arise where you need to cancel a purchase or request a refund. This Refund and Cancellation Policy outlines the terms and conditions under which cancellations and refunds are granted. By purchasing and using our services, you agree to the terms stated below.
          </p>
        </div>

        {/* Section 1: Cancellation Policy */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            1. Cancellation Policy
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 leading-relaxed">
            We aim to provide a flexible and user-friendly experience. If you wish to cancel a purchase, please review the following conditions:
          </p>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • You may request a cancellation within 24 hours of making the payment, provided that you have not accessed the content of the workshop. If the workshop has been accessed in any form, cancellation will not be permitted.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Once a workshop has been partially or fully accessed, cancellation is not allowed due to the nature of digital content delivery.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Cancellation requests must be submitted by contacting our customer support team at support@stei.pro with your purchase details, including order number and email ID used for registration.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If the cancellation request meets the eligibility criteria, our team will confirm the cancellation and initiate the refund process, if applicable.
            </li>
          </ul>
        </section>

        {/* Section 2: Refund Policy */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            2. Refund Policy
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 leading-relaxed">
            We want to ensure customer satisfaction while maintaining fairness in our policies. Refund requests are processed as per the following guidelines:
          </p>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Refunds are only applicable if a cancellation request is made within the 24-hour cancellation window and the user has not accessed any part of the workshop content.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If a workshop has been accessed, no refund will be provided, as digital content is considered consumed upon access.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Refunds will be processed within 7-10 business days from the date of approval and will be credited back to the original payment method used during the transaction.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Refunds will not be granted for workshops purchased during promotional offers, discounts, or bundled packages unless a technical issue prevents access.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If a technical issue prevents you from accessing the workshop and our support team is unable to resolve it within a reasonable timeframe, a full refund may be granted upon verification of the issue.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • Refunds will not be issued due to change of mind, incorrect selection of a workshop, or inability to complete the workshop.
            </li>
          </ul>
        </section>

        {/* Section 3: Exceptions and Special Cases */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            3. Exceptions and Special Cases
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 leading-relaxed">
            In certain exceptional cases, refunds or credits may be provided at our discretion:
          </p>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If duplicate payments are made due to a technical error, the excess amount will be refunded after verification.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If stei cancels a workshop or discontinues access to a specific program, users will receive a full refund or an equivalent credit towards another workshop.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              • If a workshop is significantly different from its description or fails to deliver promised content, users may raise a refund request for review.
            </li>
          </ul>
        </section>

        {/* Section 4: How to Request a Refund or Cancellation */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            4. How to Request a Refund or Cancellation
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-4 md:mb-6 leading-relaxed">
            If you believe you qualify for a refund or cancellation under our policy, please follow these steps:
          </p>
          <ol className="space-y-3 md:space-y-4">
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              1. Send an email to our support team at support@stei.pro with the subject line "Refund/Cancellation Request – [Your Order Number]".
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              2. Provide your order number, registered email ID, and reason for requesting a refund or cancellation.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              3. Our team will review your request and respond within 3-5 business days with a decision.
            </li>
            <li className="text-base md:text-lg text-gray-800 leading-relaxed">
              4. If approved, the refund will be processed, and you will receive a confirmation email with transaction details.
            </li>
          </ol>
        </section>

        {/* Section 5: Contact Us */}
        <section className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            5. Contact Us
          </h2>
          <p className="text-base md:text-lg text-gray-800 mb-2 md:mb-3 leading-relaxed">
            For any inquiries related to refunds and cancellations, feel free to reach out to us at:
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <a href="mailto:support@stei.pro" className="text-blue-600 hover:text-blue-800 transition-colors">
              support@stei.pro
            </a>
          </p>
        </section>

        {/* Footer Statement */}
        <div className="border-t border-gray-200 pt-6 md:pt-8 mt-8 md:mt-12">
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            We appreciate your trust in stei and strive to provide a seamless learning experience. By purchasing from stei, you acknowledge and agree to the terms outlined in this Refund and Cancellation Policy.
          </p>
        </div>

      </div>
    </div>
  );
};

export default RefundCancellationPolicy;