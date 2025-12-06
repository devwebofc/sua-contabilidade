import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center font-bold text-lg text-white">V</div>
              <span className="text-lg font-bold text-white">VISÃO</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Contabilidade digital humanizada. Simplificamos a burocracia para você focar no que importa: seu sucesso.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Abertura de Empresa</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Migração de Contabilidade</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Declaração IRPF</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">BPO Financeiro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Atendimento</h4>
            <p className="text-sm text-gray-400 mb-2">Segunda a Sexta: 08h às 18h</p>
            <p className="text-sm text-gray-400 mb-4">Plantão para emergências via WhatsApp.</p>
            <div className="inline-block bg-white/5 px-3 py-1 rounded text-xs text-brand-blue border border-brand-blue/20">
              CRC-MG 00000/O
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Visão Contabilidade. Todos os direitos reservados.
          </p>
          <div className="text-xs text-gray-600 flex gap-4">
            <a href="#" className="hover:text-gray-400">Termos de Uso</a>
            <a href="#" className="hover:text-gray-400">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};