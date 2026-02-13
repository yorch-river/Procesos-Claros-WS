
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, Settings, ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Diagnóstico de Procesos y Madurez",
      problem: "No sabes si el problema es tu equipo, tus procesos o que realmente te falta software.",
      includes: [
        "Auditoría de flujo de trabajo actual.",
        "Identificación de cuellos de botella y 'fugas' de rentabilidad.",
        "Test de madurez operativa para digitalización.",
        "Informe de hallazgos y prioridades."
      ],
      result: "Claridad total sobre el estado real de tu operación y qué debe arreglarse antes de invertir en sistemas."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Sistematización y Documentación",
      problem: "Tu empresa depende de que tú estés ahí o de que los empleados clave no se vayan.",
      includes: [
        "Mapeo de procesos clave (Ventas, Compras, Almacén, Administración).",
        "Definición de responsables y KPIs.",
        "Manuales de operación ligeros y prácticos.",
        "Eliminación de duplicidades en tareas."
      ],
      result: "Un negocio que funciona bajo reglas claras, reduciendo el error humano y facilitando la delegación."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Preparación para Digitalización",
      problem: "Quieres comprar un ERP pero no sabes cómo elegir ni qué pedirle al proveedor.",
      includes: [
        "Definición de requerimientos técnicos y funcionales.",
        "Limpieza de datos previa (catálogos, maestros).",
        "Acompañamiento en la selección de proveedores (independiente).",
        "Plan de gestión del cambio para el equipo."
      ],
      result: "Una implementación de software exitosa, en tiempo y presupuesto, alineada con tus procesos reales."
    }
  ];

  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Servicios de Consultoría Estratégica</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ayudo a pymes a pasar del caos operativo a la eficiencia sistematizada. Sin tecnicismos, con enfoque en tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm flex flex-col hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-500 mb-8 italic text-sm">" {service.problem} "</p>
              
              <div className="flex-grow">
                <h3 className="font-semibold text-slate-800 mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex gap-2 text-slate-600 text-sm">
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6 mt-6">
                <h4 className="font-bold text-slate-900 mb-2">Resultado esperado:</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-8">{service.result}</p>
                <Link to="/contacto" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Consultar sobre este servicio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
