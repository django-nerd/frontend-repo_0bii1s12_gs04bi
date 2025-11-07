import { CheckCircle2, Shield, Timer } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-100 blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-slate-100 blur-3xl opacity-70" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Consulenza per la Pubblica Amministrazione e soluzioni tecnologiche
            </h1>
            <p className="mt-5 text-lg text-slate-700">
              Supportiamo gli enti in ogni fase: dal RUP alle procedure di gara, fino alla gestione dei progetti PNRR.
              Relazione continua, ascolto ed empatia. Esecuzione rapida entro 15 giorni.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contatti" className="px-6 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition-colors">
                Parla con noi
              </a>
              <a href="#servizi" className="px-6 py-3 rounded-md border border-sky-200 text-sky-700 hover:bg-sky-50 transition-colors">
                Scopri i servizi
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-sky-600" /> Esperti di PA</div>
              <div className="flex items-center gap-2"><Shield className="text-sky-600" /> Conformità e trasparenza</div>
              <div className="flex items-center gap-2"><Timer className="text-sky-600" /> Entro 15 giorni</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-100 to-slate-100 p-1 shadow-sm">
              <div className="w-full h-full rounded-lg bg-white grid place-items-center">
                <div className="text-center p-8">
                  <div className="text-6xl">🏛️</div>
                  <p className="mt-3 text-slate-600">Tecnologia e metodo al servizio degli enti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
