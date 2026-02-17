import React from 'react';
import { 
  Scissors, MapPin, Phone, Instagram, Clock, Star, 
  CheckCircle2, Quote, ArrowRight, ShieldCheck, 
  Music, Heart, Users, ExternalLink, Facebook 
} from 'lucide-react'; // Importei o ícone do Facebook
import Navbar from './components/Navbar';
import { BUSINESS_INFO, SERVICES, REVIEWS, IMAGES } from './constants';
import { BarberProvider, useBarber } from './context/BarberContext';
import AdminModal from './components/AdminModal';
import mapaImg from './assets/images/mapa-localizacao.webp'; 

const MAP_SOURCE = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200&sat=-100"; // Use mapaImg se tiver o print

const MainContent: React.FC = () => {
  const { info, services } = useBarber();

  return (
    // TEMA: BLUE (Azul) para transmitir "Zelo" e confiança
    <div className="min-h-screen flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      <Navbar />
      <AdminModal />

      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.interior[0].url} 
            alt="Interior Barbearia Zelo" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/90 to-stone-950"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 md:pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-blue-600/10 border border-blue-600/20 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Star className="text-blue-500 fill-blue-500" size={14} />
              <span className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em]">O Seu Barbeiro em Arcozelo</span>
              <div className="hidden md:block w-1 h-1 bg-blue-600/30 rounded-full mx-1"></div>
              <span className="text-stone-400 text-xs font-medium uppercase tracking-widest hidden md:inline">4.9 Estrelas no Google</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-8xl font-bold mb-8 leading-[1.1] text-white">
              A Arte de Cuidar <br />
              com <span className="text-blue-600 italic">Zelo</span> e Estilo.
            </h2>
            
            <p className="text-stone-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light">
              Profissionalismo, simpatia e preços acessíveis. Venha conhecer o espaço do Sérgio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
              <a 
                href={info.bookingUrl} 
                target="_blank" 
                rel="noreferrer"
                className="bg-blue-700 hover:bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/20 group"
              >
                Agendar Agora <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#servicos" 
                className="bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-5 rounded-full text-lg font-bold text-white text-center transition-all"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-16 md:py-24 bg-stone-950 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: ShieldCheck, title: "Qualidade Garantida", text: "Conhecedor da arte com bom gosto e dedicação." },
              { icon: Users, title: "Simpatia do Dono", text: "Atendimento cuidado onde todos são bem-vindos." },
              { icon: CheckCircle2, title: "Preço Justo", text: "Excelente qualidade no serviço prestado a um valor acessível." }
            ].map((item, index) => (
              <div key={index} className="relative group p-4 md:p-0 rounded-2xl md:rounded-none bg-stone-900/20 md:bg-transparent border md:border-none border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif italic text-white">{item.title}</h3>
                </div>
                <p className="text-stone-500 leading-relaxed text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 md:py-32 bg-stone-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-blue-500 text-sm font-bold uppercase tracking-[0.4em] mb-4">Tabela de Preços</h4>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">Nossos Serviços</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-6xl mx-auto">
            {services.map((s) => (
              <div key={s.id} className="group flex justify-between items-start border-b border-white/5 pb-8 hover:border-blue-600/30 transition-all">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors font-serif text-white">{s.name}</h3>
                  <p className="text-stone-500 text-sm">{s.description}</p>
                </div>
                <div className="text-blue-600 font-bold text-2xl pl-6 whitespace-nowrap">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 md:py-32 bg-stone-950 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-stone-900 shadow-2xl aspect-square">
                <img src={IMAGES.interior[1].url} alt="Sérgio Barbearia Zelo" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-700 p-6 rounded-2xl max-w-xs shadow-2xl z-20">
                <Quote className="text-white/30 mb-2" size={24} />
                <p className="text-white font-bold text-sm">"Bom profissional, conhecedor da arte e com bom gosto."</p>
                <p className="text-white/70 text-xs mt-2 uppercase font-black">Manuel Oliveira</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
                Sérgio <br /><span className="text-blue-500 italic">O Profissional</span>
              </h2>
              <div className="space-y-6 text-stone-400 font-light">
                <p>Com quase 5 estrelas no Google, a Barbearia Zelo é referência em Arcozelo. O nome diz tudo: aqui cuidamos do seu cabelo e barba com o máximo zelo.</p>
                <p>Seja para um corte moderno ou clássico, o Sérgio está pronto para o receber com simpatia e profissionalismo.</p>
              </div>
            </div>
        </div>
      </section>

      {/* CRÍTICAS */}
      <section id="criticas" className="py-20 bg-stone-900/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold mb-4 text-white">Clientes Satisfeitos</h2>
            <div className="flex justify-center gap-2 text-blue-500">
               {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {REVIEWS.map((r) => (
              <div key={r.id} className="bg-stone-900/40 p-8 rounded-3xl border border-white/5 flex flex-col justify-between">
                <p className="text-stone-300 italic mb-6">"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={r.avatar} alt={r.author} className="w-10 h-10 rounded-full border border-blue-600/50" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{r.author}</h4>
                    <p className="text-stone-600 text-xs">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-stone-950">
        <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl font-bold mb-10 text-white">Visite-nos</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <MapPin className="text-blue-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Arcozelo</h4><p className="text-stone-500">{info.address}, {info.city}</p></div>
              </div>
              <div className="flex gap-6">
                <Clock className="text-blue-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Horário</h4><p className="text-stone-500">{info.openingHours}</p></div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-blue-500" size={28} />
                <div><h4 className="text-white font-bold text-lg">Telemóvel</h4><p className="text-stone-300 text-2xl font-bold">{info.phone}</p></div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 h-[500px] rounded-[3rem] overflow-hidden border-8 border-stone-900 shadow-2xl relative">
            <a href={info.googleMapsUrl} target="_blank" rel="noreferrer" className="block w-full h-full relative cursor-pointer">
              <img src={MAP_SOURCE} alt="Mapa" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl animate-bounce-slow">Abrir no Google Maps</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-stone-950 border-t border-white/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-700 rounded-2xl flex items-center justify-center text-white"><Scissors size={24} /></div>
            <div className="text-left">
              <h1 className="font-serif text-2xl font-bold text-white leading-none">{info.name}</h1>
              <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">Arcozelo</p>
            </div>
          </div>
          <p className="text-stone-600 text-xs uppercase tracking-widest">© {new Date().getFullYear()} {info.name}</p>
        </div>
      </footer>
      
      {/* Botão Flutuante (Facebook/Zap) */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href={info.bookingUrl} target="_blank" className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform">
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BarberProvider>
      <MainContent />
    </BarberProvider>
  );
};

export default App;