import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center text-white max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center space-x-6">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <Link href="/" className="text-3xl font-bold">
            Restaurant
          </Link>

          <div className="space-x-6 hidden lg:flex">
            <Link href="/" className="text-md">
              Home
            </Link>
            <Link href="/about" className="text-md">
              About
            </Link>

            <Link href="/menu" className="text-md">
              Menu
            </Link>
            <Link href="/services" className="text-md">
              Services
            </Link>

            <Link href="/contact" className="text-md">
              Contact
            </Link>
          </div>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white lg:hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <button className="bg-[#FEBF00] text-black font-bold px-4 py-2 hidden lg:flex">
          BOOK A TABLE
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
