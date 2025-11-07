import { ClipboardList, Handshake, Gavel, FileSpreadsheet, ServerCog } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: 'Supporto al RUP',
    desc:
      'Affiancamento operativo e strategico al Responsabile Unico del Procedimento in tutte le fasi del ciclo di vita.'
  },
  {
    icon: Gavel,
    title: 'Procedure di gara',
    desc:
      'Predisposizione atti, capitolati e gestione delle procedure di appalto nel rispetto del Codice degli Appalti.'
  },
  {
    icon: FileSpreadsheet,
    title: 'PNRR e rendicontazione',
    desc:
      'Pianificazione, monitoraggio KPI, caricamento a sistema e rendicontazione delle misure del PNRR.'
  },
  {
    icon: ServerCog,
    title: 'Soluzioni tecnologiche',
    desc:
      'Software e integrazioni per digitalizzare processi amministrativi e migliorare l’efficienza.'
  },
  {
    icon: ClipboardList,
    title: 'Compliance e trasparenza',
    desc:
      'Adeguamento normativo, trasparenza e anticorruzione con documentazione chiara e verificabile.'
  },
];

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold text-slate-900">Servizi</h2>
          <p className="mt-3 text-slate-600">Interventi modulabili e risultati misurabili. Seleziona solo ciò che ti serve.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="h-full rounded-xl border border-sky-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
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
