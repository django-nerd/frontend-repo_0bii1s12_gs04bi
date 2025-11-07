import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  return (
    <section id="contatti" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Contattaci</h2>
          <p className="mt-3 text-slate-600">Scrivici i tuoi bisogni: rispondiamo velocemente e pianifichiamo un confronto.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-slate-700">Ente</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Comune di…" />
              </div>
              <div>
                <label className="block text-sm text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="nome@ente.it" />
              </div>
              <div>
                <label className="block text-sm text-slate-700">Messaggio</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Raccontaci l’esigenza" />
              </div>
              <button type="submit" className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">
                Invia richiesta
              </button>
              {status === 'sent' && (
                <p className="text-sm text-green-700">Richiesta inviata! Ti contatteremo a breve.</p>
              )}
            </div>
          </form>

          <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Contatto diretto</h3>
            <p className="mt-2 text-slate-600">Siamo disponibili per un confronto immediato.</p>
            <div className="mt-6 space-y-3">
              <a href="mailto:info@blueconsult.it" className="flex items-center gap-3 text-slate-700 hover:text-sky-700">
                <Mail className="w-5 h-5 text-sky-600" /> info@blueconsult.it
              </a>
              <a href="tel:+39000000000" className="flex items-center gap-3 text-slate-700 hover:text-sky-700">
                <Phone className="w-5 h-5 text-sky-600" /> +39 000 000 0000
              </a>
            </div>
            <div className="mt-8 rounded-lg bg-sky-50 p-4 text-sky-800">
              Tempi di esecuzione garantiti: consegna in 15 giorni.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
