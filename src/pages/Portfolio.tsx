import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioProjects } from '../data'
import { PageHeader } from '../components/ui/Section'

const categories = ['All', 'Healthcare Platform', 'FinTech Solution', 'E-Commerce Platform', 'Logistics Technology', 'HR Technology', 'BPO Transformation']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? portfolioProjects : portfolioProjects.filter(p => p.category === active)

  return (
    <div>
      <PageHeader
        badge="Portfolio"
        title="Work That Drives"
        highlight="Real Results"
        description="Explore our portfolio of 500+ projects delivered across industries. Each engagement is a story of innovation, partnership, and measurable business impact."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                  active === cat
                    ? 'bg-blue-500 text-white shadow-2xl shadow-blue-500/40 scale-110 z-10'
                    : 'glass border border-white/8 text-gray-400 hover:text-white hover:border-blue-500/30 hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-[3rem] overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all group shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col"
              >
                <div className="h-3 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}aa)` }} />
                <div className="p-10 md:p-14 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2.5 rounded-full mb-8 inline-block border shadow-inner w-fit"
                    style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}>
                    {p.category}
                  </span>
                  <h3 className="font-bold text-white text-3xl mb-6 tracking-tighter leading-tight group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 line-clamp-4 flex-1 font-medium">{p.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/6 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-white/6 flex flex-wrap gap-4">
                    {p.metrics.map(m => (
                      <span key={m} className="text-[11px] font-black uppercase tracking-widest text-gray-200 bg-white/10 px-5 py-2.5 rounded-2xl shadow-inner border border-white/5">{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#080E1C] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50" />
            <h2 className="hero-headline text-white mb-10">Let's Build Your <span className="gradient-text">Success Story</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Ready to join our elite roster of global clients? Partner with us to architect the next generation of your digital ecosystem.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black">Initiate Your Project <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
