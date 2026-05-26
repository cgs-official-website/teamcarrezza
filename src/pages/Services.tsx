import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Bot, Globe, Smartphone, Cloud, GitBranch, Palette, TestTube, Plug, Layers, TrendingUp, BarChart3, Headphones } from 'lucide-react'
import { itServices, bpoServices } from '../data'
import { PageHeader } from '../components/ui/Section'

const iconMap: Record<string, any> = { 
  Code2, Bot, Globe, Smartphone, Cloud, GitBranch, Palette, TestTube, Plug, Layers, 
  TrendingUp, BarChart3, Headphones 
}

export default function Services() {
  return (
    <div>
      <PageHeader
        badge="Our Services"
        title="Complete IT & BPO"
        highlight="Service Suite"
        description="One partner for all your technology and business process needs — from custom software development to enterprise-scale BPO operations."
      />

      {/* IT Services */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Strategic Technology</span>
            <h2 className="section-headline text-white mb-8">IT & Engineering <span className="gradient-text">Solutions</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Enterprise-grade software architecture, cloud-native infrastructure, and AI-driven transformation delivered by elite global engineers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {itServices.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Code2
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-[3rem] p-12 border border-white/8 hover:border-blue-500/30 transition-all group shadow-2xl flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ background: `${svc.color}15` }}>
                    <Icon size={32} style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-black text-white text-2xl tracking-tighter mb-6 group-hover:text-blue-400 transition-colors relative z-10">{svc.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1 font-medium relative z-10">{svc.description}</p>
                  <div className="space-y-4 pt-10 border-t border-white/5 relative z-10">
                    {svc.features.map(f => (
                      <div key={f} className="flex items-center gap-4 text-gray-300 text-base font-bold tracking-tight">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-24">
            <Link to="/services/it" className="btn-primary py-6 px-14 text-xl shadow-2xl shadow-blue-500/25 font-black uppercase tracking-widest active:scale-95 transition-transform">Explore Engineering Units <ArrowRight size={24} className="ml-3" /></Link>
          </div>
        </div>
      </section>

      {/* BPO Services */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Operational Excellence</span>
            <h2 className="section-headline text-white mb-8">Business Process <span className="gradient-text">Outsourcing</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">World-class operational units delivering high-fidelity customer support and business management at institutional scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {bpoServices.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Layers
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-[3rem] p-12 border border-white/8 hover:border-purple-500/30 transition-all shadow-2xl flex flex-col group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-all" />
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ background: `${svc.color}15` }}>
                    <Icon size={32} style={{ color: svc.color }} />
                  </div>
                  <h3 className="font-black text-white text-2xl tracking-tighter mb-6 group-hover:text-purple-400 transition-colors relative z-10">{svc.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1 font-medium relative z-10">{svc.description}</p>
                  <div className="space-y-4 pt-10 border-t border-white/5 relative z-10">
                    {svc.features.map(f => (
                      <div key={f} className="flex items-center gap-4 text-gray-300 text-base font-bold tracking-tight">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: svc.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
          <div className="text-center mt-24">
            <Link to="/services/bpo" className="btn-primary py-6 px-14 text-xl shadow-2xl shadow-purple-500/25 font-black uppercase tracking-widest active:scale-95 transition-transform" style={{ background: 'linear-gradient(135deg,#8B5CF6,#EC4899)' }}>
              Explore BPO Divisions <ArrowRight size={24} className="ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1120] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-all" />
            <h2 className="hero-headline text-white mb-10">Strategic <span className="gradient-text">Architectural Review</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium">Schedule a diagnostic consultation with our specialized solution architects to evaluate your technical objectives and operational roadmap.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-16 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black uppercase tracking-widest">Initiate Strategy Session <ArrowRight size={26} className="ml-3" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
