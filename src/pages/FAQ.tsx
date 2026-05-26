import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data'
import { PageHeader } from '../components/ui/Section'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      <PageHeader
        badge="FAQ"
        title="Frequently Asked"
        highlight="Questions"
        description="Everything you need to know about working with Carrezza Global Solutions. Can't find your answer? Contact us directly."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom max-w-5xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass rounded-[2rem] border transition-all duration-500 overflow-hidden shadow-2xl ${open === i ? 'border-blue-500/40 ring-1 ring-blue-500/10 bg-white/[0.03]' : 'border-white/8 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full px-10 py-8 md:py-10 flex items-center justify-between text-left group transition-all"
                >
                  <span className={`font-black text-lg md:text-2xl tracking-tighter transition-colors max-w-3xl leading-tight ${open === i ? 'text-blue-400' : 'text-gray-200 group-hover:text-white'}`}>{faq.q}</span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ml-6 transition-all shadow-inner ${open === i ? 'bg-blue-500/20 text-blue-400 rotate-180' : 'bg-white/5 text-gray-500 group-hover:bg-white/10'}`}>
                    <ChevronDown size={28} />
                  </div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-10 pb-10 text-gray-400 text-lg md:text-xl leading-relaxed border-t border-white/5 pt-10 font-medium max-w-4xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 glass rounded-[4rem] p-16 md:p-24 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden text-center group">
            <div className="absolute inset-0 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-all" />
            <div className="relative z-10">
              <h3 className="hero-headline text-white mb-8 tracking-tighter">Still Seeking <span className="gradient-text">Clarity?</span></h3>
              <p className="text-gray-400 text-2xl mb-16 leading-relaxed max-w-3xl mx-auto font-medium">Our elite technical solution architects are available for a deep-dive consultation to architect a roadmap tailored to your institutional requirements.</p>
              <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black uppercase tracking-widest">Connect with an Architect <ArrowRight size={26} className="ml-2" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
