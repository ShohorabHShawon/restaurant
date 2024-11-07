import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className="flex justify-between items-center text-white max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center space-x-6">
          <Image src="/logo.svg" alt="Logo" width={50} height={50} />
          <Link href="/" className="text-3xl font-bold">
            Restaurant
          </Link>
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
        <button className="bg-[#FEBF00] text-black font-bold px-4 py-2">
          BOOK A TABLE
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
