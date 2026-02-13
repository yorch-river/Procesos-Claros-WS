
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Check, AlertTriangle, FileText, ShoppingBag, Mail, User, BookOpen, Info, Home as HomeIcon } from 'lucide-react';
import Home from './pages/Home';
import BeforeERP from './pages/BeforeERP';
import Services from './pages/Services';
import Products from './pages/Products';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Antes del ERP', path: '/antes-del-erp' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Productos', path: '/productos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Sobre Mí', path: '/sobre-mi' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-slate-800">
                PROCESOS<span className="text-blue-600">CLAROS</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:space-x-8 md:items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'border-blue-600 text-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Diagnóstico Gratuito
            </Link>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-b border-slate-100">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'bg-blue-50 border-blue-600 text-blue-700'
                    : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'
                } block pl-3 pr-4 py-3 border-l-4 text-base font-medium`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-bold tracking-tight text-white mb-6 block">
            PROCESOS<span className="text-blue-400">CLAROS</span>
          </span>
          <p className="text-slate-400 max-w-sm mb-6">
            Consultoría independiente enfocada en ordenar y sistematizar pymes antes de su transformación digital. Ayudamos a dueños de negocio a recuperar el control.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/antes-del-erp" className="hover:text-blue-400 transition-colors">Antes del ERP</Link></li>
            <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Servicios</Link></li>
            <li><Link to="/productos" className="hover:text-blue-400 transition-colors">Productos Digitales</Link></li>
            <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Recursos / Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Contacto</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@procesosclaros.com</li>
            <li className="flex items-center gap-2 underline"><Link to="/contacto">Solicitar Diagnóstico</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Procesos Claros. Consultoría Independiente para Pymes.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/antes-del-erp" element={<BeforeERP />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
