
import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mb-8">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">¡Gracias por tu mensaje!</h1>
        <p className="text-xl text-slate-600 mb-8">He recibido tu información. Me pondré en contacto contigo en las próximas 24-48 horas para agendar tu diagnóstico gratuito.</p>
        <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Empecemos a ordenar tu negocio.</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Responde estas breves preguntas y te contactaré para una sesión de diagnóstico gratuita de 30 minutos donde evaluaremos tus procesos actuales.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Directo</h4>
                  <p className="text-slate-600">hola@procesosclaros.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">LinkedIn</h4>
                  <p className="text-slate-600">linkedin.com/in/consultorpyme</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                  <input type="text" required className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 ring-blue-500 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Empresa</label>
                  <input type="text" required className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 ring-blue-500 transition-all" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Profesional</label>
                <input type="email" required className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 ring-blue-500 transition-all" placeholder="tu@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">¿Qué está pasando hoy en tu negocio?</label>
                <textarea rows={4} required className="w-full px-5 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 ring-blue-500 transition-all" placeholder="Cuéntame brevemente tus retos operativos..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                Solicitar Diagnóstico <Send className="w-5 h-5" />
              </button>
              <p className="text-xs text-slate-400 text-center">Tus datos están seguros y serán tratados con absoluta confidencialidad.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
