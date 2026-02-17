import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Críticas', href: '#criticas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 shadow-xl border-b border-blue-900/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Scissors size={24} />
          </div>
          <div>
            <h1 className="font-serif text-xl font-bold text-white leading-none">Zelo</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">Barbearia</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-stone-300 hover:text-blue-500 transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href={BUSINESS_INFO.bookingUrl} target="_blank" rel="noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-900/20 uppercase tracking-wide transition-all transform hover:scale-105">
            Ligar Agora
          </a>
        </div>

        <button className="md:hidden text-stone-100" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-stone-950 border-t border-stone-800 animate-in slide-in-from-top">
          <div className="flex flex-col p-6 gap-6 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium text-stone-100 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;