import React from 'react';
import { FileText, Calculator, Briefcase, Gavel, ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import { Service } from '../types';
import { Button } from './Button';

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'irpf',
      title: 'Declaração IRPF',
      description: 'Evite a malha fina. Análise completa de caixa e bens para garantir a menor alíquota legal.',
      icon: Calculator,
      badge: 'Vagas Limitadas',
      price: 'A partir de R$ 150',
      cta: 'Regularizar Agora'
    },
    {
      id: 'nf',
      title: 'Nota Fiscal Avulsa',
      description: 'Emissão rápida e segura para autônomos e empresas. Resolvemos a burocracia em minutos.',
      icon: FileText,
      badge: 'Entrega em 30min',
      cta: 'Emitir Nota'
    },
    {
      id: 'licitacao',
      title: 'Licitações',
      description: 'Assessoria completa para sua empresa vender para o governo. Organize sua documentação.',
      icon: Gavel,
      badge: 'Potencial de Lucro',
      cta: 'Consultar Especialista'
    },
    {
      id: 'contratos',
      title: 'Abertura de Empresa',
      description: 'Processo 100% digital. Definimos o melhor regime tributário para você pagar menos impostos.',
      icon: Briefcase,
      badge: 'Mais Procurado',
      price: 'Grátis no Plano Anual',
      cta: 'Abrir Minha Empresa'
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-2">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Soluções completas para você e sua empresa</h3>
          <p className="text-gray-400 text-lg">
            Da pessoa física à gestão empresarial complexa, temos a expertise necessária para simplificar sua vida financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group glass-card p-6 rounded-2xl hover:border-brand-blue/30 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center text-brand-blue border border-white/5 shadow-inner">
                  <service.icon size={24} />
                </div>
                {service.badge && (
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${
                    index === 0 ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 
                    index === 3 ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' :
                    'bg-gray-800 text-gray-400'
                  }`}>
                    {service.badge}
                  </span>
                )}
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              {service.price && (
                <div className="mb-4 pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-500 mb-1">Investimento estimado</p>
                  <p className="text-white font-semibold">{service.price}</p>
                </div>
              )}

              <Button 
                variant="outline" 
                fullWidth 
                className="mt-auto group-hover:bg-brand-blue group-hover:text-white"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Benefits Strip */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
          <div className="flex gap-4">
             <div className="text-brand-blue"><Zap className="w-8 h-8"/></div>
             <div>
               <h4 className="text-white font-bold mb-1">Agilidade Digital</h4>
               <p className="text-sm text-gray-400">Processos resolvidos via WhatsApp e e-mail.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="text-brand-blue"><Shield className="w-8 h-8"/></div>
             <div>
               <h4 className="text-white font-bold mb-1">Segurança Total</h4>
               <p className="text-sm text-gray-400">Seus dados protegidos com criptografia de ponta.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="text-brand-blue"><TrendingUp className="w-8 h-8"/></div>
             <div>
               <h4 className="text-white font-bold mb-1">Foco no Crescimento</h4>
               <p className="text-sm text-gray-400">Nós cuidamos da burocracia, você do seu negócio.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};