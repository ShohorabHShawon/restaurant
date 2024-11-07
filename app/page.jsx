import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#BD1F17] to-[#A51D13] h-screen flex justify-center items-center">
        <HeroSection />
      </section>
      {/* About  */}
      <section id="about" className=""></section>

      {/* Menu  */}
      <section id="menu" className=""></section>

      {/* Contact  */}
      <section id="contact" className="">
        <div></div>
      </section>
    </div>
  );
}
