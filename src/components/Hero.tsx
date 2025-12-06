import React from 'react';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider animate-pulse">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Atendimento Online Agora
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="text-brand-blue">Sua Contabilidade</span> com a excelência de quem é referência.
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg">
            10 anos transformando números em resultados. Atendimento 100% digital em todo o Brasil para quem busca eficiência e redução de impostos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button icon={<ArrowRight size={20} />} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Falar com um especialista
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
              Conhecer serviços
            </Button>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-blue" />
              <span>Abertura em 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-blue" />
              <span>Suporte Humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-brand-blue" />
              <span>Sede Própria</span>
            </div>
          </div>
        </div>

        {/* Right Image/Graphic */}
        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in-up">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Contabilidade Moderna" 
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
            {/* Floating Card 1 */}
            <div className="absolute top-6 right-6 bg-brand-dark/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl max-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-xs text-gray-400">Economia tributária</p>
              <p className="text-xl font-bold text-white mt-1">+ R$ 12k/ano</p>
            </div>
             {/* Floating Card 2 */}
            <div className="absolute bottom-6 left-6 bg-brand-blue p-4 rounded-xl shadow-xl max-w-[200px]">
              <p className="text-xs text-blue-100 font-medium mb-1">Clientes Satisfeitos</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">1000+</span>
                <div className="flex -space-x-2">
                   <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-brand-blue"></div>
                   <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-brand-blue"></div>
                   <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-brand-blue"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute -bottom-10 -right-10 text-white/5">
             <svg width="200" height="200" viewBox="0 0 200 200">
                <defs>
                   <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                   </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#dots)"></rect>
             </svg>
          </div>
        </div>

      </div>
    </section>
  );
};