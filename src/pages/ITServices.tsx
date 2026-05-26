import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Bot, Globe, Smartphone, Cloud, GitBranch, Palette, TestTube, Plug, Layers, CheckCircle } from 'lucide-react'
import { itServices, techStack } from '../data'
import { PageHeader } from '../components/ui/Section'

const iconMap: Record<string, any> = { Code2, Bot, Globe, Smartphone, Cloud, GitBranch, Palette, TestTube, Plug, Layers }

export default function ITServices() {
  return (
    <div>
      <PageHeader
        badge="IT Services"
        title="Enterprise Technology"
        highlight="Solutions"
        description="We build high-performance digital ecosystems using React.js, Node.js, AWS, and advanced ML concepts to drive your competitive advantage."
      />

      {/* Technology Marquee */}
      <section className="py-12 bg-[#0B1120] border-b border-white/6 overflow-hidden">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap w-max hover:[animation-play-state:paused] items-center">
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center">
              <div className="mx-12 flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span className="text-white font-black text-2xl tracking-tighter uppercase">{tech.name}</span>
              </div>
              {i % 3 === 0 && (
                <div className="mx-8 w-16 h-8 opacity-30">
                  <img src="/logo.png" alt="CGS" className="w-full h-full object-contain brightness-0 invert" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {itServices.map((svc, i) => {
              const Icon = iconMap[svc.icon] || Code2
              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass rounded-[3rem] p-10 md:p-14 border border-white/8 hover:border-blue-500/30 transition-all group shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 blur-3xl -mr-20 -mt-20 group-hover:bg-white/10 transition-all" />
                  <div className="flex flex-col xl:flex-row items-start gap-10 relative z-10">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500" style={{ background: `${svc.color}15` }}>
                      <Icon size={32} style={{ color: svc.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-3xl mb-6 tracking-tighter group-hover:text-blue-400 transition-colors">{svc.title}</h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">{svc.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {svc.features.map(f => (
                          <div key={f} className="flex items-center gap-4 text-base text-gray-300 font-bold tracking-tight">
                            <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center">
                              <CheckCircle size={16} style={{ color: svc.color }} />
                            </div>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Advanced Engineering</span>
            <h2 className="section-headline text-white mb-8">Our Core <span className="gradient-text">Technology DNA</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">We architect high-performance digital ecosystems using the industry's most sophisticated and reliable technical frameworks.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {techStack.map((tech) => (
              <motion.div 
                key={tech.name} 
                whileHover={{ y: -10 }}
                className="glass rounded-[2.5rem] p-12 border border-white/8 hover:border-blue-500/20 transition-all shadow-2xl group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500" style={{ background: `${tech.color}15` }}>
                  <Code2 size={28} style={{ color: tech.color }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{tech.name}</h3>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-widest opacity-60">Enterprise Verified</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1120] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50" />
            <h2 className="hero-headline text-white mb-10">Architect Your Next <span className="gradient-text">Breakthrough</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Join 150+ market leaders who trust Carrezza Global Solutions to engineer their most critical technology initiatives.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black">Initiate Engineering Proposal <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
