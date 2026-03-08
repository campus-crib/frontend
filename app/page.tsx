import Features from "./components/landing/Features";
import Hero from "./components/landing/Hero";
import Marquee from "./components/landing/Marquee";
import Navbar from "./components/landing/Navbar";


export default function LandingPage() {
  return (
    <main className="min-h-screen bg-soft-pearl selection:bg-burnt-amber selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Marquee />

      {/* Footer */}
      <footer className="bg-white py-12 px-8 text-center border-t border-warm-grey font-body text-sm text-slate-400">
        © 2026 Campus Crib. Built for the modern student.
      </footer>
    </main>
  );
}