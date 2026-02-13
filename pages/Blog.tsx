
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "¿Realmente necesitas un ERP o necesitas orden?",
      excerpt: "Muchas empresas culpan a la tecnología cuando el problema es la falta de procesos claros. Aprende a distinguir la raíz del caos.",
      date: "12 Mar 2024",
      category: "Estrategia"
    },
    {
      title: "Por qué los ERP fallan en pymes",
      excerpt: "Las estadísticas son aterradoras. Analizamos los 3 errores más comunes que cometen los dueños de pymes al digitalizar.",
      date: "05 Mar 2024",
      category: "Tecnología"
    },
    {
      title: "Cómo saber si tu empresa está lista para digitalizar",
      excerpt: "Un checklist de 10 puntos para evaluar tu madurez operativa antes de firmar cualquier contrato de software.",
      date: "28 Feb 2024",
      category: "Guía"
    },
    {
      title: "Señales de desorden operativo en empresas en crecimiento",
      excerpt: "Si creces pero sientes que el beneficio se escapa por las manos, es probable que tus procesos no estén escalando.",
      date: "20 Feb 2024",
      category: "Gestión"
    },
    {
      title: "ERP vs Procesos: ¿Qué va primero?",
      excerpt: "El huevo o la gallina de la gestión empresarial. Te explicamos por qué invertir el orden es una receta para el desastre.",
      date: "15 Feb 2024",
      category: "Opinión"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Recursos y Artículos</h1>
          <p className="text-xl text-slate-600">Ideas claras para mejorar la gestión de tu negocio, sin complicaciones técnicas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                <img src={`https://picsum.photos/seed/${i}/600/400`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
              </div>
              <div className="flex items-center gap-4 text-sm text-blue-600 font-bold uppercase tracking-wider mb-4">
                <span>{post.category}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400 font-normal">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-slate-900 font-bold border-b-2 border-blue-600 pb-1">
                Leer artículo <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">¿Quieres profundizar más?</h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">Suscríbete para recibir mi newsletter quincenal: "Operaciones con Sentido Común" para dueños de pymes.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Tu email profesional" className="flex-grow px-6 py-4 rounded-xl text-slate-900 outline-none focus:ring-2 ring-blue-500" />
            <button className="bg-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;
