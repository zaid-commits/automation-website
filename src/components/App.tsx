import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Installation from './components/Installation';
import Demo from './components/Demo';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <MobileNav />
          <main className="flex-1">
            <Hero />
            <Features />
            <HowItWorks />
            <Installation />
            <Demo />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

