import React, { useState } from 'react';
import { Send, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0f0f0f] to-brand-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Vamos escalar seu negócio?</h2>
            <p className="text-gray-400 text-lg mb-10">
              Preencha o formulário e receba um diagnóstico inicial gratuito dos nossos especialistas. Respondemos em até 30 minutos em horário comercial.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">WhatsApp</h4>
                  <p className="text-gray-400">(34) 99999-9999</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">E-mail</h4>
                  <p className="text-gray-400">contato@visaocontabilidade.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Sede</h4>
                  <p className="text-gray-400">Patrocínio - MG (Atendimento Nacional)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Um de nossos contadores entrará em contato em breve.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-brand-blue hover:text-white underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">Interesse Principal</label>
                  <select 
                    id="service"
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors appearance-none"
                  >
                    <option value="abertura">Abertura de Empresa</option>
                    <option value="migracao">Trocar de Contador</option>
                    <option value="irpf">Imposto de Renda (IRPF)</option>
                    <option value="licitacao">Licitações</option>
                    <option value="outro">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Mensagem (Opcional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={3}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={isSubmitting}
                  className="mt-4"
                  icon={isSubmitting ? null : <Send size={18} />}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Grátis'}
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  Seus dados estão protegidos. Não enviamos spam.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};