import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';

// Geist Sans font (you may not be using it in the example, but it's included in the setup)
const geistSans = localFont({
  src: './fonts/GeistVF.woff', // Keep this if needed
  variable: '--font-geist-sans',
  weight: '100 900',
});

// Bebas Neue font
const bebasNeue = localFont({
  src: './fonts/BebasNeue-Regular.ttf', // Correct font path, placed in the 'public/fonts' folder
  variable: '--font-bebas-neue', // Name it appropriately
  weight: '400', // Bebas Neue is typically used for heavier weights, but you can adjust if needed
});

export const metadata = {
  title: 'Restaurant',
  description: 'Restaurant Web App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${bebasNeue.variable} antialiased`} // Use Bebas Neue here
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
