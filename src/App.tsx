/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, PlayCircle, Star, Heart, Clock, ShieldCheck, ArrowRight, Zap, X, ChevronLeft, ChevronRight } from "lucide-react";

const COVER_IMAGE = "https://i.ibb.co/DfzsnZ88/Captura-de-tela-2026-03-18-040428.png";

const SOCIAL_PROOFS = [
  "https://i.ibb.co/kgXMFRDn/testimonial-1.jpg",
  "https://i.ibb.co/R44kktNv/testimonial-2.jpg",
  "https://i.ibb.co/k60xXM6k/testimonial-3.jpg",
  "https://i.ibb.co/R4chLr5B/testimonial-4.jpg",
  "https://i.ibb.co/YB9xgczq/testimonial-5.jpg",
];

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-rose-500/30 overflow-x-hidden">
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-[#1a1a1a] rounded-[2.5rem] border border-white/10 p-8 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6">
                <button onClick={() => setShowPopup(false)} className="text-white/40 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] uppercase bg-emerald-600 text-white rounded-full">
                  <Star className="w-3 h-3 fill-white" />
                  Upgrade Premium
                </div>

                <h3 className="text-2xl font-serif italic mb-4">Confirme seu Acesso</h3>
                
                <div className="space-y-3 mb-8 text-left max-w-[240px] mx-auto">
                  <FeatureItem text="Este Dorama Completo em HD" />
                  <FeatureItem text="+3.500 Doramas, Séries e Filmes (Netflix Asiática)" />
                  <FeatureItem text="Grupo VIP com lançamentos diários" />
                  <FeatureItem text="Acesso Vitalício sem mensalidades" />
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 mb-8">
                  <span className="block text-emerald-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Pagamento Único</span>
                  <div className="flex flex-col items-center">
                    <span className="text-rose-500 text-sm font-bold line-through opacity-60 mb-1">R$ 49,90</span>
                    <span className="text-5xl font-black text-emerald-400 tracking-tighter">R$ 12,00</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout?product_id=TuT5ZF'}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-sm transition-all active:scale-95 shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2"
                  >
                    CONCLUIR MINHA COMPRA <CheckCircle className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => window.location.href = 'https://pay.lowify.com.br/checkout?product_id=s0Tp3X'}
                    className="w-full py-2 bg-white/5 hover:bg-white/10 text-white/30 rounded-xl font-bold text-[9px] transition-all active:scale-95 uppercase tracking-widest"
                  >
                    NÃO, QUERO APENAS O DORAMA
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Mobile-First Hero Section */}
      <header className="relative w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={COVER_IMAGE}
            alt="Só Mais Uma Vez Background"
            className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 pt-16 pb-12 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black tracking-[0.2em] uppercase bg-rose-600 text-white rounded-full shadow-lg shadow-rose-600/20">
              <Zap className="w-3 h-3 fill-white" />
              Sucesso no Brasil
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-serif italic mb-4 tracking-tighter leading-tight">
              Só Mais Uma Vez
            </h1>
            
            <p className="text-base text-gray-300 max-w-sm mx-auto leading-relaxed font-light mb-8">
              A história que parou o país. Assista agora ao dorama completo em alta definição.
            </p>

            {/* Main Poster for Mobile */}
            <div className="max-w-[280px] mx-auto mb-10 relative group">
              <div className="absolute -inset-2 bg-rose-600/20 blur-xl rounded-full"></div>
              <img
                src={COVER_IMAGE}
                alt="Só Mais Uma Vez Poster"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Sales Body */}
      <main className="px-5 pb-24 space-y-12">
        
        {/* Video Preview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-rose-500 font-black text-[14px] uppercase tracking-[0.4em] mb-6">Assista uma Prévia</h2>
          <div className="max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* @ts-ignore */}
            <wistia-player media-id="q7yt2tqh12" aspect="0.5633802816901409"></wistia-player>
          </div>
        </motion.section>

        {/* The Offer Box - Mobile Optimized */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#151515] p-6 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4">
            <Heart className="w-6 h-6 text-rose-600 fill-rose-600/20" />
          </div>

          {/* Pricing Area - Centered and Green - Moved Above Description */}
          <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/5 mb-8 text-center">
            <span className="block text-rose-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Oferta Exclusiva</span>
            <div className="flex flex-col items-center gap-1">
              <span className="text-5xl sm:text-6xl font-black text-emerald-400 tracking-tighter">R$ 5,00</span>
              <span className="text-rose-500 text-[10px] font-black uppercase tracking-widest mt-2">Pagamento Único</span>
            </div>
          </div>

          <h2 className="text-2xl font-serif mb-6 text-center">Acesso Vitalício ao Dorama Completo</h2>
          
          <div className="space-y-4 mb-8">
            <FeatureItem text="Temporada Completa (Todos os episódios)" />
            <FeatureItem text="Qualidade HD (Alta Definição)" />
            <FeatureItem text="Acesso Vitalício e Imediato" />
            <FeatureItem text="Sem mensalidades (Pagamento único)" />
          </div>

          {/* CTA Button */}
          <button 
            onClick={() => setShowPopup(true)}
            className="w-full py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-2xl font-black text-lg transition-all active:scale-95 shadow-xl shadow-rose-600/20 flex items-center justify-center gap-3"
          >
            <PlayCircle className="w-6 h-6" />
            QUERO ASSISTIR AGORA
          </button>

          <div className="mt-6 space-y-2 text-center opacity-60">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">Compra 100% Segura</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Zap className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">Entrega Imediata</span>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Carousel */}
        <section className="space-y-6">
          <div className="text-center">
            <h3 className="text-rose-500 font-bold text-xs uppercase tracking-[0.3em] mb-2">Provas Sociais</h3>
            <p className="text-white/60 text-[10px] uppercase tracking-widest">Veja o que nossos alunos estão dizendo</p>
          </div>
          
          <SocialProofCarousel />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#151515] rounded-2xl border border-white/5 text-center">
              <div className="text-emerald-400 font-black text-xl mb-1">98%</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Satisfação</div>
            </div>
            <div className="p-4 bg-[#151515] rounded-2xl border border-white/5 text-center">
              <div className="text-rose-500 font-black text-xl mb-1">+15k</div>
              <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Alunos VIP</div>
            </div>
          </div>
        </section>

      </main>

      {/* Simplified Mobile Footer */}
      <footer className="bg-[#050505] py-12 px-6 border-t border-white/5 text-center">
        <h4 className="font-serif italic text-xl mb-4">Só Mais Uma Vez</h4>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest leading-loose">
          Dorama Premium Brasil<br/>
          Todos os direitos reservados © 2026
        </p>
      </footer>

      {/* Sticky Bottom Bar for Mobile Conversion */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-50 bg-gradient-to-t from-black to-transparent pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button 
            onClick={() => setShowPopup(true)}
            className="w-full py-4 bg-rose-600 text-white rounded-xl font-black text-sm shadow-2xl flex items-center justify-center gap-2 animate-bounce-subtle"
          >
            QUERO ASSISTIR COMPLETO - 5,00 <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SocialProofCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SOCIAL_PROOFS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[320px] mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
      <div 
        className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {SOCIAL_PROOFS.map((src, i) => (
          <div key={i} className="min-w-full flex items-center justify-center p-1">
            <img 
              src={src} 
              alt={`Depoimento ${i + 1}`} 
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {SOCIAL_PROOFS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === i ? 'bg-rose-500 w-6' : 'bg-white/20 w-1.5'
            }`}
          />
        ))}
      </div>

      {/* Glass Overlay for depth */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2rem]"></div>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full bg-emerald-600/10 flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-3 h-3 text-emerald-500" />
      </div>
      <span className="text-gray-300 text-sm font-medium">{text}</span>
    </div>
  );
}

function TestimonialCard({ name, text }: { name: string, text: string }) {
  return (
    <div className="p-6 bg-[#151515] rounded-2xl border border-white/5">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-gray-400 text-sm italic mb-4">"{text}"</p>
      <div className="text-[10px] font-black uppercase tracking-widest text-white">{name}</div>
    </div>
  );
}

function TrustItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed max-w-[240px] mx-auto">{description}</p>
    </div>
  );
}



