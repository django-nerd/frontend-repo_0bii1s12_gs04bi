import { Clock, MessageSquare, Workflow } from 'lucide-react';

export default function Method() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Ascolto e analisi',
      desc: 'Kickoff con l’ente, raccolta fabbisogni e definizione KPI e responsabilità.'
    },
    {
      icon: Workflow,
      title: 'Esecuzione rapida',
      desc: 'Roadmap operativa con sprint di 15 giorni per rilasci veloci e verificabili.'
    },
    {
      icon: Clock,
      title: 'Monitoraggio continuo',
      desc: 'Reportistica chiara, punti di controllo condivisi e canale diretto di comunicazione.'
    }
  ];

  return (
    <section id="metodo" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Il nostro metodo</h2>
          <p className="mt-3 text-slate-600">Concretezza, trasparenza e tempi certi. Ogni progetto ha obiettivi misurabili.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="w-11 h-11 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
