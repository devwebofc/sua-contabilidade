import React from 'react';
import { Users, Clock, ShieldCheck, Trophy } from 'lucide-react';
import { Stat } from '../types';

export const Stats: React.FC = () => {
  const stats: Stat[] = [
    { id: 1, value: "10+", label: "Anos de Experiência", icon: Clock },
    { id: 2, value: "1.2k+", label: "Clientes Atendidos", icon: Users },
    { id: 3, value: "98%", label: "Satisfação", icon: ShieldCheck },
    { id: 4, value: "R$ 5mi", label: "Economizados em Impostos", icon: Trophy },
  ];

  return (
    <section className="py-12 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};