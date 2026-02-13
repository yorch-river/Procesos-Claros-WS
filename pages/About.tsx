
import React from 'react';
import { Shield, User, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-48 h-48 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden shadow-xl border-4 border-white">
             <img src="https://picsum.photos/seed/consultant/400/400" alt="Consultor" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Ayudo a pymes a recuperar el control.</h1>
            <p className="text-xl text-blue-600 font-medium">Consultor Independiente de Procesos y Operaciones.</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-700 space-y-8 text-lg leading-relaxed">
          <p>
            Tras más de 10 años acompañando a empresas en proyectos de digitalización, me di cuenta de una verdad incómoda: <strong>el software nunca soluciona los problemas de fondo.</strong>
          </p>
          
          <p>
            Vi a dueños de negocios brillantes tirar millones de pesos en sistemas que nadie usaba, simplemente porque sus procesos internos eran un misterio para ellos mismos.
          </p>

          <p>
            Por eso decidí posicionarme del lado del cliente, no del software. Como consultor independiente, no vendo licencias ni recibo comisiones de ningún ERP. Mi único objetivo es que tu empresa sea rentable y ordenada.
          </p>

          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 my-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Mi Filosofía de Trabajo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Independencia Total</h3>
                  <p className="text-sm text-slate-500">No soy partner de ninguna marca. Te diré la verdad sobre lo que necesitas, aunque eso signifique no comprar nada todavía.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Enfoque en Negocio</h3>
                  <p className="text-sm text-slate-500">No me interesan los tecnicismos. Me interesa que tu equipo trabaje menos tiempo en tareas vacías y tú tengas datos fiables para decidir.</p>
                </div>
              </div>
            </div>
          </div>

          <p>
            He ayudado a decenas de pymes en sectores de distribución, servicios y pequeña industria a documentar su saber-hacer y prepararse para escalar. 
          </p>
          
          <p className="font-semibold text-slate-900">
            ¿Hablamos sobre cómo poner orden en tu casa?
          </p>
          
          <div className="pt-8">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Contactar conmigo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
