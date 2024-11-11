'use client';
import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div>
      {' '}
      {/* Social Media Links */}
      <div className="flex justify-center gap-6 m-8 p-10 mx-10">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-700 border-2 rounded-full border-gray-400 p-4"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-700 border-2 rounded-full border-gray-400 p-4"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-blue-700 border-2 rounded-full border-gray-400 p-4"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
