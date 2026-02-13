
import React from 'react';
import { AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

const BeforeERP: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Antes de implementar un ERP: Lo que nadie te dice.</h1>
      
      <p className="text-xl text-slate-600 mb-12 leading-relaxed">
        El mercado del software de gestión está lleno de promesas. Te dicen que con su herramienta tendrás "control total", "visibilidad 360" y "eficiencia máxima". Pero la realidad es que el 70% de las implementaciones de ERP fallan o se exceden masivamente en presupuesto.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <AlertCircle className="text-amber-500" /> ¿Por qué fallan las implementaciones en pymes?
        </h2>
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 space-y-4">
          <p className="text-slate-700"><strong>1. Falta de definición de procesos:</strong> El software pregunta "cómo haces X", y el dueño responde "bueno, depende de quién lo haga". Eso es el fin del proyecto.</p>
          <p className="text-slate-700"><strong>2. Creer que el software trae las reglas:</strong> Un ERP es una cáscara vacía. Si no tienes reglas de negocio claras, el software no las inventará por ti.</p>
          <p className="text-slate-700"><strong>3. Resistencia al cambio ignorada:</strong> Si tu equipo no entiende por qué el nuevo orden es mejor, encontrarán la forma de boicotear el sistema.</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
          <HelpCircle className="text-blue-500" /> Señales de que el problema NO es el software
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Diferentes personas hacen la misma tarea de formas distintas.",
            "La información se duplica en varios Excel 'personales'.",
            "Nadie sabe exactamente dónde está un pedido en cada momento.",
            "Los errores se descubren cuando el cliente se queja.",
            "Dependes de una persona clave que 'lo tiene todo en la cabeza'.",
            "Tienes un sistema hoy pero nadie lo usa bien o está desactualizado."
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-slate-300 flex-shrink-0" />
              <span className="text-slate-600 text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-blue-50 p-10 rounded-3xl border-2 border-blue-100 mb-16">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Qué debes tener claro antes de comprar</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
            <p className="text-slate-700"><strong>Tu Mapa de Procesos:</strong> Cómo fluye el valor desde que entra un cliente hasta que cobras.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
            <p className="text-slate-700"><strong>Tus Reglas de Excepción:</strong> Qué pasa cuando algo sale mal. El software necesita saberlo.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
            <p className="text-slate-700"><strong>Tu Nivel de Madurez:</strong> ¿Tu equipo está listo para la disciplina que exige un sistema?</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-slate-900 text-white p-12 rounded-3xl">
        <h3 className="text-2xl font-bold mb-4">¿No estás seguro de por dónde empezar?</h3>
        <p className="text-slate-400 mb-8">Realiza mi diagnóstico de madurez operativa y obtén una hoja de ruta clara.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
          Quiero el Diagnóstico Gratuito
        </button>
      </div>
    </div>
  );
};

export default BeforeERP;
