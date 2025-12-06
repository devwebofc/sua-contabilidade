import React from 'react';
import { Button } from './Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 md:order-1">
             {/* Main Image */}
             <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
               <img 
                 src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Equipe Visão Contabilidade" 
                 className="w-full object-cover"
               />
               <div className="absolute inset-0 bg-brand-blue/10 mix-blend-overlay"></div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-blue/20 rounded-2xl z-0"></div>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-blue rounded-full blur-[80px] opacity-40"></div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Quem Somos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Mais que contadores, parceiros estratégicos.</h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A <strong className="text-white">Visão Contabilidade</strong> nasceu com um propósito claro: simplificar a gestão contábil de empresas e pessoas físicas através da tecnologia, sem perder o contato humano.
              </p>
              <p>
                Com mais de <strong className="text-white">10 anos de mercado</strong>, desenvolvemos uma metodologia proprietária que une segurança jurídica, inteligência tributária e agilidade digital.
              </p>
              <p>
                Não somos apenas geradores de guias de impostos. Somos consultores que analisam seus números para encontrar oportunidades legais de economia e crescimento.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="text-center px-4 py-2 border border-white/10 rounded-lg bg-white/5">
                <span className="block text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-gray-400">Online</span>
              </div>
              <div className="text-center px-4 py-2 border border-white/10 rounded-lg bg-white/5">
                <span className="block text-2xl font-bold text-white">BR</span>
                <span className="text-xs text-gray-400">Atuação Nacional</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};