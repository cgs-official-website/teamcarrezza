import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Landmark, ShoppingCart, Truck, Cpu, GraduationCap, Factory, Home, Plane, Zap } from 'lucide-react'
import { industries } from '../data'
import { PageHeader } from '../components/ui/Section'

const iconMap: Record<string, any> = { Heart, Landmark, ShoppingCart, Truck, Cpu, GraduationCap, Factory, Home, Plane, Zap }

const caseHighlights = [
  { industry: 'Healthcare', result: 'Reduced patient wait time by 40% with AI triage system', color: '#EF4444' },
  { industry: 'FinTech', result: '$500M+ daily transactions on trading platform we built', color: '#F59E0B' },
  { industry: 'E-Commerce', result: '+230% conversion rate for a top-10 online retailer', color: '#10B981' },
  { industry: 'Logistics', result: '1M+ shipments tracked in real-time across 50 countries', color: '#3B82F6' },
]

export default function Industries() {
  return (
    <div>
      <PageHeader
        badge="Industries"
        title="Domain Expertise Across"
        highlight="Key Industries"
        description="We bring deep, battle-tested domain knowledge to every engagement — delivering solutions that account for sector-specific regulations, workflows, and competitive dynamics."
      />

      {/* Industries Grid */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Cpu
              return (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-[3rem] p-12 border border-white/8 hover:border-blue-500/30 transition-all text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/5 blur-3xl -mt-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_15px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ background: `${ind.color}15` }}>
                    <Icon size={32} style={{ color: ind.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-6 text-2xl tracking-tighter relative z-10 group-hover:text-blue-400 transition-colors">{ind.label}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium relative z-10">{ind.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Highlights */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Proven Results</span>
            <h2 className="section-headline text-white mb-8">Global Impact, <span className="gradient-text">Quantified</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Our sector-specific expertise has delivered measurable transformation for world-class enterprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {caseHighlights.map(({ industry, result, color }) => (
              <div key={industry} className="glass rounded-[3rem] p-12 md:p-16 border border-white/8 flex items-center gap-10 hover:border-blue-500/30 transition-all shadow-[0_30px_70px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/[0.02]" />
                <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ background: `${color}20` }}>
                  <span className="text-4xl font-black" style={{ color }}>{industry[0]}</span>
                </div>
                <div className="relative z-10">
                  <div className="text-xs text-gray-500 font-black uppercase tracking-[0.4em] mb-4 opacity-70">{industry} Sector</div>
                  <div className="text-white text-2xl md:text-3xl font-bold leading-tight tracking-tighter">{result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom text-center">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] -mr-32 -mt-32" />
            <span className="badge mb-10">Regulatory Architecture</span>
            <h2 className="hero-headline text-white mb-10">Built for <span className="gradient-text">Regulated Global Sectors</span></h2>
            <p className="text-gray-400 text-2xl max-w-4xl mx-auto mb-20 leading-relaxed font-medium">Every line of code and every operational workflow is architected to exceed the most stringent international security and regulatory frameworks.</p>
            
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-20">
              {['HIPAA (Healthcare)', 'PCI-DSS v4.0 (Finance)', 'GDPR & CCPA (Privacy)'].map(r => (
                <span key={r} className="glass px-8 py-5 rounded-[1.5rem] border border-white/10 text-gray-200 text-lg font-black tracking-tight shadow-xl hover:border-blue-500/40 hover:bg-blue-500/5 transition-all uppercase">{r}</span>
              ))}
            </div>

            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black uppercase tracking-widest">Consult Domain Experts <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
