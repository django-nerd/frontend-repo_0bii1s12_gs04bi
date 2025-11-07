import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#servizi', label: 'Servizi' },
    { href: '#metodo', label: 'Metodo' },
    { href: '#contatti', label: 'Contatti' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-sky-500/90 flex items-center justify-center text-white font-bold">PA</div>
            <span className="font-semibold text-slate-800">BlueConsult</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-sky-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contatti" className="inline-flex items-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors">
              Richiedi consulenza
            </a>
          </nav>

          <button aria-label="Apri menu" className="md:hidden p-2" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700"
            >
              Richiedi consulenza
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
