import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { processSteps } from '../data'
import { PageHeader } from '../components/ui/Section'

const icons: Record<string, string> = { Search: '🔍', Layout: '🏗️', Code2: '⚡', TestTube: '🧪', Rocket: '🚀', TrendingUp: '📈' }

export default function Process() {
  return (
    <div>
      <PageHeader
        badge="Our Process"
        title="How We Deliver"
        highlight="Excellence"
        description="A proven, agile-driven methodology refined over 12 years and 500+ projects — designed for transparency, speed, and predictable outcomes."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-cyan-500/0 -translate-x-1/2" />
            
            <div className="space-y-32 md:space-y-48">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-16 md:gap-32 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 glass rounded-[3rem] p-12 md:p-16 border border-white/8 hover:border-blue-500/30 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.4)] group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-3xl -mr-20 -mt-20 group-hover:bg-blue-500/10 transition-all" />
                    <div className="flex items-center gap-8 mb-10">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-5xl shadow-inner group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                        {icons[step.icon] || '⚙️'}
                      </div>
                      <div>
                        <div className="text-xs text-blue-500 font-black uppercase tracking-[0.4em] mb-2 opacity-70">Phase 0{step.step}</div>
                        <h3 className="text-3xl font-bold text-white tracking-tight">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xl leading-relaxed font-medium">{step.description}</p>
                  </div>

                  {/* Center bubble */}
                  <div className="relative z-20 flex-shrink-0 w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-3xl shadow-[0_20px_50px_rgba(59,130,246,0.4)] rotate-[15deg] group-hover:rotate-0 transition-transform duration-700 border-4 border-white/10">
                    {step.step}
                  </div>

                  {/* Empty flex for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Strategic Frameworks</span>
            <h2 className="section-headline text-white mb-8">Flexible <span className="gradient-text">Engagement Models</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Engineered to fit your specific scale, velocity, and business objectives.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Fixed Price', desc: 'Best for well-defined projects with clear scope. Predictable cost and timeline with milestone-based deliveries.', features: ['Guaranteed Scope & Timeline', 'Milestone-Based Payments', 'Absolute Risk Mitigation', 'Crystal Clear Deliverables'] },
              { title: 'Time & Material', desc: 'Ideal for evolving requirements. Pay for actual time and resources used with full transparency and agile control.', features: ['Dynamic Scope Management', 'Flexible Bi-Weekly Billing', 'Instant Scaling Control', '100% Process Transparency'] },
              { title: 'Dedicated Team', desc: 'A full-time elite extension of your in-house team, fully embedded in your culture, tools, and technical processes.', features: ['Full-Time Expert Resources', 'Direct Management Control', '100% IP & Asset Ownership', 'Long-Term Strategic Partnership'] },
            ].map(({ title, desc, features }) => (
              <div key={title} className="glass rounded-[3rem] p-12 border border-white/8 hover:border-blue-500/30 transition-all shadow-2xl flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 group-hover:opacity-100 transition-all" />
                <h3 className="font-bold text-white text-3xl mb-6 tracking-tighter group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-1 font-medium">{desc}</p>
                <div className="space-y-4 pt-10 border-t border-white/5">
                  {features.map(f => (
                    <div key={f} className="flex items-center gap-4 text-gray-300 text-sm font-black uppercase tracking-widest">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0B1120] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <h2 className="hero-headline text-white mb-10">Let's Discuss Your <span className="gradient-text">Project Roadmap</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Our expert solution architects are ready to guide you through the optimal process and engagement model for your specific needs.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black">Schedule Strategy Call <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
