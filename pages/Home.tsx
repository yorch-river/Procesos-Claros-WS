
import React from 'react';
import { Link } from 'react-router-dom';
// Added X to the imports from lucide-react
import { ChevronRight, Check, AlertTriangle, ArrowRight, ShieldCheck, Search, ClipboardCheck, X } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Antes de implementar un ERP, <span className="text-blue-600">ordena tu negocio.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Muchas pymes creen que necesitan un sistema. En realidad necesitan procesos claros. Evita que la tecnología solo acelere tu desorden actual.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contacto"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
              >
                Haz el diagnóstico gratuito
              </Link>
              <Link
                to="/antes-del-erp"
                className="bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-all"
              >
                ¿Por qué ordenar primero?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: El Problema Real */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Digitalizar no ordena.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-lg text-slate-600">Un ERP no soluciona procesos confusos; los automatiza. Automatizar el desorden solo amplifica los errores.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-lg text-slate-600">La mayoría de las implementaciones de software fallan no por la tecnología, sino por la falta de estructura previa.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-lg text-slate-600">Si tu equipo hoy depende de Excel y la memoria de "el que sabe", un software nuevo será una pesadilla de implementación.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                 <img src="https://picsum.photos/seed/process/600/400" alt="Procesos vs Software" className="rounded-lg object-cover w-full h-full opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Cómo ayudo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Cómo ayudo a tu negocio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Enfocado en resultados operativos, no en jerga técnica.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Diagnóstico de madurez</h3>
              <p className="text-slate-600 leading-relaxed">Evaluamos objetivamente si tu empresa está lista para un sistema o si el caos operativo hará fracasar cualquier intento.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sistematización de procesos</h3>
              <p className="text-slate-600 leading-relaxed">Definimos quién hace qué, cuándo y cómo. Creamos la base de reglas de negocio que el software deberá seguir después.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg transition-shadow bg-slate-50">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Preparación para digitalizar</h3>
              <p className="text-slate-600 leading-relaxed">Te acompañamos a definir tus requerimientos reales para que no compres un software que te sobre (o te falte).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Para quién es / Para quién no */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl border-l-4 border-blue-600 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Esto es para ti si:</h3>
              <ul className="space-y-4">
                {[
                  "Eres dueño o gerente y sientes que pierdes el control de la operación.",
                  "Tu empresa está creciendo y los métodos manuales ya no alcanzan.",
                  "Estás evaluando comprar un ERP pero tienes miedo de tirar el dinero.",
                  "Quieres que tu empresa funcione sin que tú tengas que supervisar cada detalle."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-2xl border-l-4 border-slate-400 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Esto NO es para ti si:</h3>
              <ul className="space-y-4">
                {[
                  "Buscas un instalador de software o un partner de una marca específica.",
                  "Crees que la tecnología sola resolverá los problemas de actitud del equipo.",
                  "No estás dispuesto a cuestionar y cambiar la forma en que operas hoy.",
                  "Quieres 'la solución mágica' sin documentar cómo trabaja tu empresa."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-600 opacity-80">
                    <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">¿Listo para poner orden en tu operación?</h2>
          <p className="text-xl mb-10 text-blue-100">Descarga mi guía gratuita: "5 señales de que tu pyme NO está lista para un ERP (y qué hacer al respecto)".</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
              Descargar Guía Gratuita
            </button>
            <Link to="/contacto" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Solicitar Diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
