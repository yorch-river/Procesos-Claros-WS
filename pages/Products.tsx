
import React from 'react';
import { ShoppingCart, Check, Star } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      id: "kit-1",
      name: "Kit de Autodiagnóstico Operativo",
      tagline: "¿Tu empresa está lista para un ERP?",
      description: "Ideal para dueños que quieren una evaluación objetiva antes de gastar millones en software. No compres a ciegas.",
      price: "CLP $39.000",
      features: [
        "Test de madurez de procesos (Excel interactivo).",
        "Guía de interpretación de resultados.",
        "Checklist de señales de alerta operativa.",
        "Plantilla de cálculo de ROI potencial para ERP."
      ],
      cta: "Comprar ahora"
    },
    {
      id: "kit-2",
      name: "Kit de Sistematización Pyme",
      tagline: "Ordena tu casa antes de digitalizar.",
      description: "El paso a paso para documentar tus procesos clave sin complicaciones burocráticas ni ISOs aburridas.",
      price: "CLP $129.000",
      features: [
        "Guía metodológica 'Sistematización Ágil'.",
        "Plantillas de descripción de puestos y procesos.",
        "Ejemplos reales de flujogramas de negocio.",
        "Vídeo-clase: Cómo evitar la resistencia del equipo."
      ],
      cta: "Comprar ahora"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Productos Digitales</h1>
          <p className="text-xl text-slate-600">Herramientas accionables para que tú mismo empieces el cambio en tu empresa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white border-2 border-slate-100 rounded-3xl p-10 flex flex-col relative overflow-hidden group hover:border-blue-200 transition-colors">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-3xl font-bold">
                {product.price}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h2>
              <p className="text-blue-600 font-medium mb-6">{product.tagline}</p>
              <p className="text-slate-600 mb-8 leading-relaxed">{product.description}</p>
              
              <div className="flex-grow space-y-4 mb-10">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                {product.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-amber-50 rounded-3xl p-10 border border-amber-100 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
          </div>
          <p className="text-lg text-slate-700 italic mb-6">
            "El kit de autodiagnóstico nos ahorró una mala inversión de más de $20.000.000 en un ERP para el que no estábamos listos. Ordenamos primero y hoy el sistema nuevo funciona perfecto."
          </p>
          <p className="font-bold text-slate-900">— Javier M., Dueño de Comercializadora</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
