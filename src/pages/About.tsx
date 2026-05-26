import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Shield, Award, Users, CheckCircle } from 'lucide-react'
import { PageHeader } from '../components/ui/Section'
import { stats } from '../data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const team = [
  { name: 'Zulfa Fathima', role: 'Business Development Manager', avatar: 'ZF', bio: 'The strategic mind behind Carrezza growth, driving innovation and ensuring client success.' },
  { name: 'Nasila Parveen', role: 'Administrative Officer', avatar: 'NP', bio: 'Ensures smooth operations, quality control, and process excellence across service verticals.' },
  { name: 'Ayisha', role: 'HR & Talent Director', avatar: 'A', bio: 'Leads hiring, training, development, and builds a strong, empowering workplace culture.' },
]

const values = [
  { icon: Heart, title: 'Client-First Culture', desc: 'Every decision we make is driven by client success, not internal convenience.' },
  { icon: Zap, title: 'Innovation at Core', desc: 'We continuously invest in emerging technologies to keep clients ahead.' },
  { icon: Shield, title: 'Integrity & Trust', desc: 'Transparency, accountability and honesty are non-negotiables.' },
  { icon: Globe, title: 'Global Perspective', desc: 'Diverse teams delivering culturally aware solutions worldwide.' },
]

const workspacePhotos = [
  { url: '/assets/workspace/workspace-1.jpg', title: 'Main Operations Floor' },
  { url: '/assets/workspace/workspace-2.jpg', title: 'Innovation Lab' },
  { url: '/assets/workspace/workspace-3.jpg', title: 'Modern Workstations' },
  { url: '/assets/workspace/workspace-4.jpg', title: 'Collaboration Zone' },
  { url: '/assets/workspace/workspace-5.jpg', title: 'Engineering Hub' },
  { url: '/assets/workspace/workspace-6.jpg', title: 'Strategic Planning Area' },
  { url: '/assets/workspace/workspace-7.jpg', title: 'Team Brainstorming' },
  { url: '/assets/workspace/workspace-8.jpg', title: 'Conference Room' },
  { url: '/assets/workspace/workspace-9.jpg', title: 'Executive Suites' },
  { url: '/assets/workspace/workspace-10.jpg', title: 'Talent Development Wing' },
  { url: '/assets/workspace/workspace-11.jpg', title: 'Creative Studio' },
  { url: '/assets/workspace/workspace-12.jpg', title: 'Tech Support Hub' },
  { url: '/assets/workspace/workspace-13.jpg', title: 'Global Connectivity Lounge' },
  { url: '/assets/workspace/workspace-14.jpg', title: 'Digital Transformation Lab' },
  { url: '/assets/workspace/workspace-15.jpg', title: 'Agile Workspace' },
  { url: '/assets/workspace/workspace-16.jpg', title: 'BPO Excellence Center' },
  { url: '/assets/workspace/workspace-17.jpg', title: 'Client Briefing Room' },
  { url: '/assets/workspace/workspace-18.jpg', title: 'Innovation Showroom' },
  { url: '/assets/workspace/workspace-19.jpg', title: 'Corporate Training Hall' },
]


const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center p-6 glass rounded-2xl border border-white/8 hover:border-blue-500/20 transition-all">
      <div className="text-4xl font-black gradient-text mb-2 tracking-tight">
        {inView ? (
          typeof CountUp === 'function' ? (
            <CountUp end={value} duration={2.5} separator="," />
          ) : (
            <span>{value}</span>
          )
        ) : '0'}{suffix}
      </div>
      <div className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-wider">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <div>
      <PageHeader
        badge="About Us"
        title="Powering Global Business"
        highlight="Through Technology"
        description="We are Carrezza Global Solutions — a premier IT services and BPO company trusted by enterprises across 30+ countries to deliver transformative digital solutions."
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          {[
            { icon: Target, title: 'Our Mission', color: '#3B82F6', text: 'To empower businesses with reliable, scalable, and result-driven outsourcing solutions that enhance operational efficiency, optimize workflows, and support sustainable growth. Through innovation, precision, and a commitment to excellence, we deliver high-quality business solutions tailored to evolving industry needs.' },
            { icon: Eye, title: 'Our Vision', color: '#8B5CF6', text: 'To become a globally recognized business solutions partner distinguished by innovation, operational excellence, and enduring client relationships. We aspire to drive meaningful business transformation by delivering future-focused solutions that create long-term value, efficiency, and growth.' },
          ].map(({ icon: Icon, title, color, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass rounded-[3rem] p-12 md:p-16 border border-white/8 hover:border-blue-500/20 transition-all shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16" />
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500" style={{ background: `${color}18` }}>
                <Icon size={32} style={{ color }} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{title}</h3>
              <p className="text-gray-400 text-xl leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="glass rounded-[3rem] p-16 md:p-24 border border-white/8 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map(s => <StatCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="/founder.jpg" alt="Founder & CEO" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000' }} />
                <div className="absolute bottom-8 left-8">
                  <div className="glass py-3 px-6 rounded-2xl flex items-center gap-3 backdrop-blur-xl border-white/20">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-white font-black text-sm uppercase tracking-widest">Founder & CEO</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div>
              <span className="badge mb-8">Founder Story</span>
              <h2 className="section-headline text-white mb-8">Building Carrezza With <span className="gradient-text">Purpose & Precision</span></h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium mb-10">
                <p>Carrezza was created to redefine how outsourcing works. Instead of transactional support, we built a performance-led BPO ecosystem powered by disciplined processes, modern tools, and people who genuinely care about outcomes.</p>
                <div className="pl-6 border-l-4 border-blue-500 italic text-white/90 text-xl py-2">
                  "We don't just provide services. We build operational engines that help businesses scale with confidence."
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: 'People-first outsourcing model' },
                  { icon: Shield, text: 'Process-driven execution' },
                  { icon: Zap, text: 'Agile & scalable teams' },
                  { icon: Award, text: 'Performance-focused growth' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 glass p-4 rounded-2xl border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 font-bold text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="badge mb-8">Our Journey</span>
            <h2 className="section-headline text-white mb-10">From Local Roots to <span className="gradient-text">Global Ambition</span></h2>
            <div className="space-y-8 text-gray-400 text-xl leading-relaxed font-medium">
              <p>Founded in October 2025, Carrezza Global Solutions was born in Perundurai, Erode, Tamil Nadu with a singular vision: to bridge the gap between regional talent and global enterprise requirements.</p>
              <p>Starting with a core group of passionate engineers and operational experts, we've rapidly built a hub of technical excellence. In early 2026, we expanded our footprint by launching dedicated development and design wings, followed by a robust internship and corporate training program to nurture the next generation of technical talent in Erode.</p>
              <p>Even as a new player, our commitment to technical innovation and absolute reliability is unwavering. We are building the next generation of digital solutions, one breakthrough at a time.</p>
            </div>
            <div className="mt-16 flex flex-wrap gap-8">
              <Link to="/portfolio" className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-blue-500/20">Our Innovation Portfolio <ArrowRight size={22} className="ml-2" /></Link>
              <Link to="/contact" className="btn-outline py-5 px-10 text-lg border-2">Partner With Us</Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { year: 'Oct 2025', event: 'Inception & Launch of US Voice Operations' },
              { year: 'Feb 2026', event: 'Scalable BPO Excellence Achieved' },
              { year: 'Mar 2026', event: 'IT Development & Design Suite Launched' },
              { year: 'Apr 2026', event: 'Design & Dev Internship Program Initated' },
              { year: 'May 2026', event: 'Corporate Training & Strategic Growth' },
              { year: 'Present', event: '10+ Global Strategic Partnerships' },
            ].map(({ year, event }) => (
              <div key={year} className="glass rounded-[2rem] p-10 border border-white/8 hover:border-blue-500/30 transition-all shadow-xl group">
                <div className="text-blue-500 font-black text-3xl mb-4 group-hover:scale-110 transition-transform">{year}</div>
                <div className="text-gray-300 font-bold text-lg leading-snug tracking-tight">{event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Our DNA</span>
            <h2 className="section-headline text-white mb-8">Principles That <span className="gradient-text">Define Us</span></h2>
            <p className="text-gray-400 text-2xl max-w-2xl mx-auto leading-relaxed font-medium">The core values that guide every line of code we write and every operation we manage.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-[2.5rem] p-10 border border-white/8 text-center hover:border-blue-500/25 transition-all shadow-2xl group flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all shadow-inner">
                  <Icon size={30} className="text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-2xl mb-4 tracking-tighter">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace Gallery - Premium Bento Grid */}
      <section className="section-padding bg-[#0B1120] relative overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-blue-500/5 -top-64 -right-64 blur-[120px]" />
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
            <div className="max-w-2xl">
              <span className="badge mb-6">Global Infrastructure</span>
              <h2 className="section-headline text-white mb-8">Architected for <span className="gradient-text">Excellence</span></h2>
              <p className="text-gray-400 text-2xl leading-relaxed font-medium">
                Our facilities in Perundurai are more than just offices; they are high-performance ecosystems designed to power global business 24/7.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="glass p-6 rounded-3xl border-white/5 text-center min-w-[140px]">
                <div className="text-3xl font-black text-white mb-1 tracking-tighter">15k+</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Sq. Ft Workspace</div>
              </div>
              <div className="glass p-6 rounded-3xl border-white/5 text-center min-w-[140px]">
                <div className="text-3xl font-black text-blue-500 mb-1 tracking-tighter">24/7</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Global Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-6 auto-rows-[220px]">
            {workspacePhotos.map((photo, i) => {
              // Dynamic Bento layout logic for 19 items
              let spanClass = "lg:col-span-3 lg:row-span-2"
              const mod = i % 8
              if (mod === 0) spanClass = "lg:col-span-6 lg:row-span-2"
              else if (mod === 1) spanClass = "lg:col-span-3 lg:row-span-1"
              else if (mod === 2) spanClass = "lg:col-span-3 lg:row-span-1"
              else if (mod === 3) spanClass = "lg:col-span-3 lg:row-span-2"
              else if (mod === 4) spanClass = "lg:col-span-6 lg:row-span-2"
              else if (mod === 5) spanClass = "lg:col-span-3 lg:row-span-2"
              else if (mod === 6) spanClass = "lg:col-span-4 lg:row-span-2"
              else if (mod === 7) spanClass = "lg:col-span-8 lg:row-span-2"

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 0.985, rotate: -0.5 }}
                  className={`relative group rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] ${spanClass}`}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
                  
                  {/* Glass Tag */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="glass px-5 py-2.5 rounded-2xl backdrop-blur-2xl border-white/20 shadow-2xl">
                      <span className="text-white font-black text-[11px] uppercase tracking-[0.25em]">{photo.title}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-12 left-12 right-12">
                    <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      </div>
                      <span className="text-gray-300 font-bold text-xs uppercase tracking-widest">Live from Perundurai HQ</span>
                    </div>
                    <div className="h-1.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-1000 rounded-full" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="section-headline text-white mb-4">Our Team</h2>
            <p className="text-gray-400 text-xl font-bold uppercase tracking-[0.2em] opacity-60">Leaders Who Drive Excellence</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map(({ name, role, avatar, bio }) => (
              <div key={name} className="glass rounded-[3rem] p-12 border border-white/8 text-center hover:border-blue-500/30 transition-all shadow-2xl group flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-[#E8F1F5] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 border-4 border-white/10">
                  <div className="text-[#2D4A53]">
                    <Users size={32} />
                  </div>
                </div>
                <h3 className="font-bold text-white text-2xl mb-4 tracking-tight">{name}</h3>
                <div className="badge bg-blue-500/10 border-blue-500/20 text-blue-400 font-black text-[10px] mb-8 uppercase tracking-[0.15em] px-6 py-2">{role}</div>
                <p className="text-gray-400 text-base leading-relaxed font-medium">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom text-center">
          <div className="mb-20">
            <span className="badge mb-6">Compliance & Trust</span>
            <h2 className="section-headline text-white mb-12">Enterprise <span className="gradient-text">Verification</span></h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {['ISO 27001:2022', 'SOC 2 Type II', 'HIPAA Compliant', 'PCI-DSS v4.0', 'GDPR Certified', 'AWS Advanced Partner', 'Google Cloud Premier', 'Microsoft Solutions Partner'].map(cert => (
              <div key={cert} className="flex items-center gap-4 glass px-8 py-5 rounded-[1.5rem] border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all shadow-xl group">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-all">
                  <CheckCircle size={24} className="text-green-400" />
                </div>
                <span className="text-gray-200 text-lg font-black tracking-tight">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1120] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -mr-64 -mt-64" />
            <h2 className="hero-headline text-white mb-10">Ready to Architect Your <span className="gradient-text">Global Success?</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Join 150+ market leaders who trust Carrezza Global Solutions as their strategic engineering and operations partner.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black">Initiate Consultation <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
