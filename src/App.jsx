import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Method from './components/Method';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="py-10 border-t border-sky-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600">© {new Date().getFullYear()} BlueConsult — Tutti i diritti riservati</p>
        <div className="text-slate-500 text-sm">Colori: celeste, grigio chiaro e bianco</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Method />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
