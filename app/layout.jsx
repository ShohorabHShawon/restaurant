import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
</style>;

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/BebasNeue-Regular.ttf',
  variable: '--font-geist-mono',
  weight: '400',
});

export const metadata = {
  title: 'Restaurant',
  description: 'Restaurant Web App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
