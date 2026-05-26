import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Headphones, Clock, Users, BarChart3, Globe, Shield } from 'lucide-react'
import { bpoServices } from '../data'
import { PageHeader } from '../components/ui/Section'

const metrics = [
  { icon: Clock, value: '< 30s', label: 'Avg. Response Time' },
  { icon: Users, value: '500+', label: 'Dedicated Agents' },
  { icon: BarChart3, value: '94%', label: 'CSAT Score' },
  { icon: Globe, value: '15+', label: 'Languages Supported' },
]

const colorDot = (color: string) => <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />

export default function BPOServices() {
  return (
    <div>
      <PageHeader
        badge="BPO Services"
        title="World-Class Business Process"
        highlight="Outsourcing"
        description="Scalable, cost-efficient BPO solutions that augment your team with expert agents, advanced technology, and 24/7 operational excellence."
      />

      {/* BPO Metrics */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {metrics.map(({ icon: Icon, value, label }) => (
              <div key={label} className="glass rounded-[2.5rem] p-10 md:p-12 text-center border border-white/8 hover:border-purple-500/30 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all shadow-inner">
                  <Icon size={28} className="text-purple-400" />
                </div>
                <div className="text-5xl font-black gradient-text mb-4 tracking-tighter">{value}</div>
                <div className="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {bpoServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-[3rem] p-12 md:p-16 border border-white/8 hover:border-purple-500/40 transition-all shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 blur-[80px] -mr-24 -mt-24 group-hover:bg-purple-500/10 transition-all" />
                <div className="flex flex-col xl:flex-row items-start gap-10 relative z-10">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-[0_15px_40px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500" style={{ background: `${svc.color}15` }}>
                    <Headphones size={32} style={{ color: svc.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-3xl mb-6 tracking-tighter group-hover:text-purple-400 transition-colors">{svc.title}</h3>
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
            ))}
          </div>
        </div>
      </section>

      {/* Why BPO */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="badge mb-8">Strategic Outsourcing</span>
            <h2 className="section-headline text-white mb-10 leading-[1.1]">Reduce Operational Costs by <span className="gradient-text">Up to 60%</span></h2>
            <p className="text-gray-400 text-2xl leading-relaxed mb-12 font-medium">Our BPO ecosystem combines elite global talent with intelligent workflow automation to deliver superior results at enterprise-grade efficiency.</p>
            <div className="space-y-6">
              {[
                'Global compliance & uncompromising data privacy',
                'Elite multi-layered quality assurance protocols',
                'Real-time analytical performance dashboards',
                'Rapid operational scaling (up or down in 72 hours)',
                'Fully managed strategic onboarding & training'
              ].map(p => (
                <div key={p} className="flex items-center gap-6 text-gray-200 text-lg font-bold tracking-tight group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-all">
                    <CheckCircle size={24} className="text-green-400" />
                  </div>
                  {p}
                </div>
              ))}
            </div>
            <div className="mt-16 flex flex-wrap gap-8">
              <Link to="/contact" className="btn-primary py-5 px-12 text-lg shadow-2xl shadow-purple-500/20">Initiate BPO Audit <ArrowRight size={22} className="ml-2" /></Link>
            </div>
          </div>
          <div className="glass rounded-[4rem] p-14 md:p-20 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-purple-500/[0.02]" />
            <div className="flex items-center gap-6 mb-12 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/15 flex items-center justify-center shadow-inner border border-purple-500/20"><Shield size={32} className="text-purple-400" /></div>
              <div>
                <div className="text-2xl font-bold text-white mb-1 tracking-tighter">Enterprise Compliance</div>
                <div className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">Institutional Grade Security</div>
              </div>
            </div>
            <div className="space-y-6 relative z-10">
              {[
                'ISO 27001 Information Security Management',
                'HIPAA Certified (Healthcare Operations)',
                'PCI-DSS v4.0 (Financial Infrastructure)',
                'GDPR & CCPA Data Sovereignty Ready',
                'SOC 2 Type II Independent Audit',
                'End-to-End Operational Encryption'
              ].map(c => (
                <div key={c} className="flex items-center gap-5 py-5 border-b border-white/5 last:border-0 group">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-all">
                    <CheckCircle size={18} className="text-green-400" />
                  </div>
                  <span className="text-gray-200 text-lg font-black tracking-tight uppercase opacity-80 group-hover:opacity-100 transition-all">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#080E1C] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] -mr-32 -mt-32" />
            <h2 className="hero-headline text-white mb-10 leading-tight">Scale Your Operations <span className="gradient-text">Efficiently</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Get a custom BPO architectural proposal tailored to your volume and requirements. Our experts will design an elite team that integrates seamlessly with your goals.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-purple-500/20 hover:scale-105 transition-transform font-black">Request Architectural Proposal <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
