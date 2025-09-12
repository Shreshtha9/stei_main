import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Globe, Shield, Eye, RefreshCw } from 'lucide-react';

const Footer = () => {
return (

<footer className="bg-red-600 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
{/* Main Footer Content */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
{/* Logo and Description */}
<div className="lg:col-span-1">{/* Logo with white background, using an image file */}
 <div className="bg-white rounded-lg p-3 w-fit mb-6">
 <img
src="/images/logo.png" // Replace with the actual path to your logo image file
alt="Stei Logo"
className="h-14 w-auto" // Adjust the height and width as needed
/>
 </div>
  <p className="text-white text-sm lg:text-base leading-relaxed max-w-xs">
 We are dedicated to empowering individuals through personalised coaching and interactive workshops designed to enhance personal and professional growth.
</p>

{/* Social Media Icons with improved visibility */}
<div className="flex space-x-4 mt-6">
<a
 href="https://www.facebook.com/share/1QYavBGR35/"
target="_blank"
rel="noopener noreferrer"
className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors duration-200" >
<Facebook className="h-5 w-5 text-black" />
</a>
<a
href="https://www.instagram.com/stei_edutech?igsh=MWt3MTJlenJvNXgzNg=="
target="_blank"
rel="noopener noreferrer"
className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors duration-200"
>
<Instagram className="h-5 w-5 text-black" />
</a>
 <a 
 href="https://www.linkedin.com/company/stei-edutech-llp/"
target="_blank"
 rel="noopener noreferrer"
 className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors duration-200" >
<Linkedin className="h-5 w-5 text-black" />
</a>
</div>
</div>

 {/* Quick Links */}
<div className="lg:col-span-1">
<div className="flex items-center  mb-6">
 <Globe className="h-5 w-5 mr-2" />
<h3 className="text-lg lg:text-xl font-semibold">Quick Links</h3>
 </div>
 <ul className="space-y-3 mt-6">
<li>
 <a
 href="/about-us"
 className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
 >
<span className="mr-2">›</span>
 About Us
 </a>
 </li>
 <li>
 <a
 href="/workshops"
 className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
 >
<span className="mr-2">›</span>
 Workshops
 </a>
 </li>
 </ul>
 </div>

{/* Policies */}
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<Shield className="h-5 w-5 mr-2" />
<h3 className="text-lg lg:text-xl font-semibold">Policies</h3>
 </div>
 <ul className="space-y-3">
 <li>
 <a
 href="/terms-conditions"
className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
 >
<span className="mr-2">›</span>
Terms & Conditions
</a>
 </li>
 <li>
 <a
href="/cookie-policy"
 className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
>
<span className="mr-2">›</span>
 Cookie Policy
 </a>
</li>
 <li>
 <a
href="/privacy-policy"
 className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
 >
 <span className="mr-2">›</span>
Privacy Policy
 </a>
 </li>
 <li>
 <a
 href="/refund-cancellation"
 className="text-white hover:text-gray-200 hover:underline text-sm lg:text-base transition-colors duration-200 flex items-center"
 >
 <span className="mr-2">›</span>
 Refund & Cancellation
</a>
</li>
</ul>
 </div>

 {/* Contact Info */}
 <div className="lg:col-span-1">
<div className="flex items-center mb-6">
 <Mail className="h-5 w-5 mr-2" />
<h3 className="text-lg lg:text-xl font-semibold">Contact Info</h3>
 </div>

 {/* Address */}
<div className="mb-6">
<div className="flex items-start mb-2">
 <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
 <div>
 <p className="text-sm lg:text-base font-medium">stei EDUTECH LLP</p>
 <p className="text-sm lg:text-base">1ST FLOOR, SAI HILL SEVA SANGH,</p>
 <p className="text-sm lg:text-base">PASCAL WADI, MADH ISLAND,</p>
 <p className="text-sm lg:text-base">MALAD (W), MUMBAI - 400061</p>
 </div>
</div>
 </div>

 {/* Email */}
 <div className="flex items-center">
 <Mail className="h-5 w-5 mr-2" />
<a
 href="mailto:support@stei.pro"
className="text-white hover:text-gray-200 text-sm lg:text-base transition-colors duration-200"
 >
support@stei.pro
 </a>
 </div>
</div>
 </div>

{/* Footer Bottom */}
<div className="border-t border-red-500 mt-8 lg:mt-12 pt-6">
<div className="text-center">
 <p className="text-sm lg:text-base">
 © 2025{' '}
 <a
href="/"
className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
 >
 stei
 </a>
. All Rights Reserved.
 </p>
</div>
 </div>
</div>
 </footer>
);

};

export default Footer;