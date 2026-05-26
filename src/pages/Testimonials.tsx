import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'
import { PageHeader } from '../components/ui/Section'

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  return (
    <div>
      <PageHeader
        badge="Testimonials"
        title="Stories of"
        highlight="Success"
        description="150+ enterprises trust Carrezza Global Solutions. Here's what our clients have to say about their experience working with us."
      />

      {/* Featured Testimonial */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-24">
            <span className="badge mb-6">Client Experience</span>
            <h2 className="section-headline text-white mb-8">Success Stories <span className="gradient-text">Without Borders</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Join 150+ market leaders who have achieved exponential growth through our strategic technical partnerships.</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="glass rounded-[4rem] p-16 md:p-28 border border-white/10 text-center shadow-[0_40px_120px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              <div className="absolute top-10 left-10 text-blue-500/10 opacity-30 select-none pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.899 14.919 16 16.021 16H19.017C20.118 16 21.021 16.899 21.021 18V21C21.021 22.101 20.118 23 19.017 23H16.021C14.919 23 14.017 22.101 14.017 21ZM14.017 11V8C14.017 6.899 14.919 6 16.021 6H19.017C20.118 6 21.021 6.899 21.021 8V11C21.021 12.101 20.118 13 19.017 13H16.021C14.919 13 14.017 12.101 14.017 11ZM2.983 21L2.983 18C2.983 16.899 3.885 16 4.987 16H7.983C9.084 16 9.987 16.899 9.987 18V21C9.987 22.101 9.084 23 7.983 23H4.987C3.885 23 2.983 22.101 2.983 21ZM2.983 11V8C2.983 6.899 3.885 6 4.987 6H7.983C9.084 6 9.987 6.899 9.987 8V11C9.987 12.101 9.084 13 7.983 13H4.987C3.885 13 2.983 12.101 2.983 11Z" /></svg>
              </div>
              <div className="flex gap-3 justify-center mb-12">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                  <Star key={i} size={32} className="text-yellow-400 fill-yellow-400 shadow-2xl" />
                ))}
              </div>
              <p className="text-white text-3xl md:text-5xl leading-[1.2] mb-16 italic font-black tracking-tighter">"{testimonials[idx].text}"</p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center font-black text-white text-3xl shadow-2xl border-4 border-white/20">
                  {testimonials[idx].avatar}
                </div>
                <div className="md:text-left">
                  <div className="text-3xl font-black text-white mb-2 tracking-tighter">{testimonials[idx].name}</div>
                  <div className="text-blue-400 font-black text-base uppercase tracking-[0.3em] mb-2">{testimonials[idx].role} @ {testimonials[idx].company}</div>
                  <div className="text-gray-500 font-black text-xs uppercase tracking-[0.4em] opacity-80">{testimonials[idx].country} Operations</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-8 mt-16">
            <button onClick={() => setIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-16 h-16 glass rounded-3xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all shadow-xl group active:scale-95">
              <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-4 items-center">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`rounded-full transition-all duration-700 ${i === idx ? 'bg-blue-500 w-12 h-3 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-white/10 w-3 h-3 hover:bg-white/30'}`} />
              ))}
            </div>
            <button onClick={() => setIdx(i => (i + 1) % testimonials.length)}
              className="w-16 h-16 glass rounded-3xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all shadow-xl group active:scale-95">
              <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Wall of Innovation</span>
            <h2 className="section-headline text-white mb-8">Trusted by Global <span className="gradient-text">Thought Leaders</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {testimonials.map((t, i) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass rounded-[3rem] p-12 border border-white/8 hover:border-blue-500/30 transition-all shadow-2xl flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
                <div className="flex gap-1.5 mb-10 relative z-10">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-400 text-xl leading-relaxed mb-12 italic flex-1 font-medium relative z-10 group-hover:text-gray-300 transition-colors">"{t.text}"</p>
                <div className="flex items-center gap-6 pt-10 border-t border-white/5 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-2xl shadow-2xl group-hover:scale-110 transition-transform duration-500">{t.avatar}</div>
                  <div>
                    <div className="font-bold text-white text-xl tracking-tighter mb-1">{t.name}</div>
                    <div className="text-blue-400 font-black text-xs uppercase tracking-[0.2em] mb-1">{t.role}</div>
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              { value: '98%', label: 'Client Satisfaction Index' },
              { value: '94%', label: 'Executive Retention Rate' },
              { value: '4.9/5', label: 'Global Service Rating' },
              { value: '150+', label: 'Elite Enterprise Partners' },
            ].map(({ value, label }) => (
              <div key={label} className="glass rounded-[2.5rem] p-12 text-center border border-white/8 shadow-2xl hover:border-blue-500/40 transition-all group">
                <div className="text-5xl font-black gradient-text mb-4 tracking-tighter group-hover:scale-110 transition-transform">{value}</div>
                <div className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
