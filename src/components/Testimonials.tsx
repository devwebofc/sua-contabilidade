import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Empresário (Varejo)",
      content: "Trocar de contador foi a melhor decisão. A Visão organizou meu caixa e me ajudou a economizar quase 20% em impostos no primeiro ano.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Fernanda Lima",
      role: "Médica",
      content: "Sempre tive dor de cabeça com IRPF. Com eles, foi tudo 100% online, rápido e sem stress. O atendimento via WhatsApp é sensacional.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Consultor TI",
      content: "Precisava de NF avulsa urgente para um projeto. Resolveram em menos de 1 hora. Eficiência que nunca vi em outro escritório.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">O que nossos clientes dizem</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 p-8 rounded-2xl border border-white/5 relative">
              <Quote className="absolute top-6 right-6 text-brand-blue/20 w-10 h-10" />
              
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-blue/50" />
                <div>
                  <h4 className="text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-brand-blue text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};