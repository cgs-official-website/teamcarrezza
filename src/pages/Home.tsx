import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Play, Star, CheckCircle, Globe, Zap, Shield, Award, Users, TrendingUp, Code2, Headphones, Bot, Cloud, ChevronLeft, ChevronRight, Smartphone, GitBranch, Palette, TestTube, Plug, Layers, BarChart3 } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { stats, itServices, bpoServices, testimonials, portfolioProjects, futureProducts, techStack } from '../data'

// ---- Mini components ----
const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <div ref={ref} className="text-center p-10 glass rounded-[2rem] border border-white/8 hover:border-blue-500/20 transition-all shadow-xl group">
      <div className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">
        {inView ? (
          typeof CountUp === 'function' ? (
            <CountUp end={value} duration={2.5} separator="," />
          ) : (
            <span>{value}</span>
          )
        ) : '0'}{suffix}
      </div>
      <div className="text-gray-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{label}</div>
    </div>
  )
}

const ServiceCard = ({ icon: Icon, title, description, color }: any) => (
  <motion.div
    whileHover={{ y: -10, borderColor: `${color}40` }}
    className="glass rounded-[2.5rem] p-10 border border-white/8 shadow-xl transition-all duration-500 group"
  >
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500" style={{ background: `${color}18` }}>
      <Icon size={28} style={{ color }} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
  </motion.div>
)

const icons: Record<string, any> = { Code2, Bot, Globe, Headphones, Cloud, Zap, Smartphone, GitBranch, Palette, TestTube, Plug, Layers, BarChart3, TrendingUp }

export default function Home() {
  const [testimonialIdx, setTestimonialIdx] = useState(0)
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  const prev = () => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setTestimonialIdx(i => (i + 1) % testimonials.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [])

  const clientLogos = ['Accenture', 'Deloitte', 'IBM', 'Oracle', 'SAP', 'Salesforce', 'Microsoft', 'AWS']
  const whyUs = [
    { icon: Shield, title: 'Enterprise Security', desc: 'ISO 27001 certified with SOC2 compliance and end-to-end encryption for total data protection.' },
    { icon: Globe, title: 'Global Delivery', desc: 'Seamless 24/7 operations across USA, UK, India, and UAE time zones with local project managers.' },
    { icon: Zap, title: 'Rapid Deployment', desc: 'Scale your engineering or support capacity in days, not months, with our pre-vetted talent pool.' },
    { icon: Award, title: 'Proven Excellence', desc: 'A decade of delivering high-impact solutions with a consistent 98% client satisfaction score.' },
    { icon: Users, title: 'Expert Teams', desc: 'Gain access to top 1% of technical talent, specialized in AI, cloud architecture, and operations.' },
    { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Our infrastructure and teams are built to grow with you, from startup phase to enterprise scale.' },
  ]

  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative bg-[#080E1C] overflow-hidden py-10 md:py-16 lg:py-20">
        <div className="orb w-[800px] h-[800px] bg-blue-700 -top-64 -left-64 opacity-10 blur-[150px]" />
        <div className="orb w-[700px] h-[700px] bg-purple-700 top-20 right-10 opacity-10 blur-[150px]" />
        <div className="orb w-96 h-96 bg-cyan-600 bottom-0 left-1/3 opacity-5 blur-[120px]" />
        <div className="grid-bg absolute inset-0 opacity-30" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
              <span className="badge py-2 px-6">
                <Star size={14} className="text-yellow-400 mr-2" /> Trusted by 150+ Global Enterprises
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="hero-headline text-white mb-10 leading-[1.05]"
            >
              We Build{' '}
              <span className="gradient-text block sm:inline">
                <TypeAnimation
                  sequence={['Software', 2500, 'Web Apps', 2500, 'Digital Products', 2500, 'BPO Teams', 2500]}
                  repeat={Infinity}
                  speed={40}
                />
              </span>
              <br />
              That Scale Globally
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-400 text-xl md:text-2xl leading-relaxed mb-16 max-w-3xl font-medium"
            >
              Carrezza Global Solutions is your premier strategic partner — delivering high-end software engineering, professional BPO services, and innovative digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-wrap gap-8"
            >
              <Link to="/contact" className="btn-primary text-lg py-5 px-12 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform">
                Start Your Project <ArrowRight size={24} className="ml-2" />
              </Link>
              <Link to="/portfolio" className="btn-outline text-lg py-5 px-12 border-2">
                <Play size={20} className="text-blue-400 mr-2" /> View Our Work
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap gap-12 mt-20"
            >
              {['ISO 27001 Certified', '500+ Projects', '24/7 Operations', '98% Retention'].map(tag => (
                <div key={tag} className="flex items-center gap-3 text-base md:text-lg text-gray-400 font-bold tracking-tight">
                  <CheckCircle size={20} className="text-blue-500" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden 2xl:block absolute right-24 top-1/2 -translate-y-1/2 space-y-10">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass rounded-[2.5rem] p-10 border border-white/10 w-80 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shadow-inner"><Code2 size={26} className="text-blue-400" /></div>
              <span className="text-white font-black text-xl tracking-tighter">IT Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-bold opacity-80 uppercase tracking-widest">Enterprise Engineering</p>
          </motion.div>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="glass rounded-[2.5rem] p-10 border border-white/10 w-80 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center shadow-inner"><Headphones size={26} className="text-purple-400" /></div>
              <span className="text-white font-black text-xl tracking-tighter">BPO Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-bold opacity-80 uppercase tracking-widest">Global Operations</p>
          </motion.div>
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="glass rounded-[2.5rem] p-10 border border-white/10 w-80 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3.5">
                {['M', 'A', 'S', 'K'].map((a, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-black text-white border-4 border-[#080E1C] shadow-xl">{a}</div>
                ))}
              </div>
              <div>
                <div className="text-white font-black text-lg tracking-tight">150+ Clients</div>
                <div className="text-yellow-400 text-sm font-black tracking-widest uppercase mt-0.5">★★★★★ 4.9</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="py-24 border-y border-white/6 bg-[#0B1120] overflow-hidden">
        <div className="container-custom mb-16 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-[0.4em] font-black opacity-60">Architecting Solutions for Industry Leaders</p>
        </div>
        <div className="flex animate-[scroll_45s_linear_infinite] whitespace-nowrap w-max">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="mx-16 inline-flex items-center glass px-12 py-6 rounded-[1.5rem] border border-white/6 hover:border-blue-500/30 transition-all shadow-xl group">
              <span className="text-gray-400 font-black text-2xl tracking-tighter group-hover:text-blue-400 transition-colors opacity-70 group-hover:opacity-100">{logo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="glass rounded-[3rem] p-16 md:p-24 border border-white/8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {stats.map(s => <StatCard key={s.label} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Our Core Capabilities</span>
            <h2 className="section-headline text-white mb-8">
              Integrated <span className="gradient-text">Enterprise Solutions</span>
            </h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">From custom engineering to specialized BPO operations — we are your single strategic partner for global growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {itServices.map((svc) => {
              const IconComp = icons[svc.icon] || Code2
              return <ServiceCard key={svc.id} icon={IconComp} title={svc.title} description={svc.description} color={svc.color} />
            })}
            {bpoServices.map((svc) => {
              const IconComp = icons[svc.icon] || Headphones
              return <ServiceCard key={svc.id} icon={IconComp} title={svc.title} description={svc.description} color={svc.color} />
            })}
          </div>
          <div className="text-center">
            <Link to="/services" className="btn-outline py-5 px-12 text-lg border-2 shadow-xl hover:shadow-blue-500/10">Explore Our Full Service Suite <ArrowRight size={22} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ── */}
      <section className="py-24 border-y border-white/6 bg-[#080E1C] overflow-hidden">
        <div className="container-custom mb-16 text-center">
          <span className="badge mb-6">Technical Excellence</span>
          <h2 className="section-headline text-white mb-8">
            Built with the <span className="gradient-text">World's Best Tech</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto font-medium">We architect high-performance digital ecosystems using a modern, battle-tested technology stack.</p>
        </div>
        <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap w-max hover:[animation-play-state:paused] cursor-pointer items-center">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center">
              <div className="mx-8 inline-flex items-center glass px-10 py-5 rounded-[2rem] border border-white/8 hover:border-blue-500/30 transition-all shadow-xl group">
                <div className="w-3 h-3 rounded-full mr-4 shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ backgroundColor: tech.color }} />
                <span className="text-white font-black text-xl tracking-tight group-hover:text-blue-400 transition-colors">{tech.name}</span>
              </div>
              {i % 4 === 0 && (
                <div className="mx-8 w-16 h-8 opacity-40 hover:opacity-100 transition-opacity">
                  <img src="/logo.png" alt="CGS" className="w-full h-full object-contain brightness-0 invert" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="badge mb-6">Why Carrezza</span>
              <h2 className="section-headline text-white mb-8">
                Your Global <span className="gradient-text">Innovation Partner</span>
              </h2>
              <p className="text-gray-400 text-2xl leading-relaxed mb-12 font-medium">
                We don't just deliver code; we build durable competitive advantages. With 12+ years of expertise and a global presence, we provide the scale and stability your enterprise demands.
              </p>
              <Link to="/about" className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-blue-500/20">Our Strategic Approach <ArrowRight size={22} className="ml-2" /></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass rounded-[2rem] p-10 border border-white/8 hover:border-blue-500/30 transition-all shadow-xl group">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all shadow-inner">
                    <Icon size={28} className="text-blue-400" />
                  </div>
                  <h4 className="font-bold text-white text-xl mb-3 tracking-tight">{title}</h4>
                  <p className="text-gray-400 text-base leading-relaxed opacity-80">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER MESSAGE ── */}
      <section className="section-padding bg-[#0B1120] relative overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-blue-500/5 -bottom-64 -right-64 blur-[120px]" />
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-12 md:p-20 border border-white/8 shadow-2xl relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50" />
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
                <span className="badge mb-8">Leadership Vision</span>
                <h2 className="section-headline text-white mb-8">Building with <span className="gradient-text">Purpose & Precision</span></h2>
                <p className="text-gray-300 text-2xl italic leading-relaxed mb-10 font-medium opacity-90">
                  "We don't just provide services. We build operational engines that help businesses scale with confidence."
                </p>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium mb-10">
                  <p>At Carrezza, we believe that true partnership goes beyond transactional delivery. We are committed to engineering excellence and operational mastery from our headquarters in Tamil Nadu to the global stage.</p>
                </div>
                <Link to="/about" className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-blue-500/20">Read Full Founder Story <ArrowRight size={22} className="ml-2" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Global Impact</span>
            <h2 className="section-headline text-white mb-8">
              Work That <span className="gradient-text">Defines Markets</span>
            </h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Delivering measurable outcomes for the world's most ambitious organizations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {portfolioProjects.slice(0, 3).map(p => (
              <motion.div
                key={p.id}
                whileHover={{ y: -15 }}
                className="glass rounded-[3rem] overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all group shadow-2xl flex flex-col"
              >
                <div className="h-3 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}aa)` }} />
                <div className="p-10 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full border mb-6 inline-block shadow-inner" style={{ color: p.color, borderColor: `${p.color}40`, background: `${p.color}12` }}>{p.category}</span>
                  <h3 className="font-bold text-white text-2xl mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed line-clamp-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-3 pt-8 border-t border-white/5">
                    {p.metrics.map(m => (
                      <span key={m} className="text-[10px] font-black uppercase tracking-widest bg-white/5 text-gray-300 px-4 py-2 rounded-xl border border-white/8 shadow-inner">{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/portfolio" className="btn-outline py-5 px-12 text-lg border-2 shadow-xl hover:shadow-blue-500/10">View Our Global Portfolio <ArrowRight size={22} className="ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-[#080E1C] overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Client Experience</span>
            <h2 className="section-headline text-white mb-8">
              The Partner of <span className="gradient-text">Choice</span>
            </h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIdx}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -20 }}
                transition={{ duration: 0.6 }}
                className="glass rounded-[4rem] p-12 md:p-24 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] -mr-40 -mt-40" />
                <div className="flex gap-2.5 mb-10">
                  {Array.from({ length: testimonials[testimonialIdx].rating }).map((_, i) => (
                    <Star key={i} size={28} className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.4)]" />
                  ))}
                </div>
                <p className="text-gray-100 text-3xl md:text-4xl leading-[1.3] mb-16 italic font-medium tracking-tight">"{testimonials[testimonialIdx].text}"</p>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-3xl shadow-2xl border-4 border-white/10">
                    {testimonials[testimonialIdx].avatar}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="font-black text-white text-2xl tracking-tight mb-1">{testimonials[testimonialIdx].name}</div>
                    <div className="text-blue-400 font-black text-sm uppercase tracking-[0.2em] mb-1.5">{testimonials[testimonialIdx].role} · {testimonials[testimonialIdx].company}</div>
                    <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">{testimonials[testimonialIdx].country}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-6 mt-16">
              <button onClick={prev} className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 border border-white/10 transition-all shadow-2xl group"><ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" /></button>
              <div className="flex gap-4 items-center">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimonialIdx(i)} className={`h-2.5 rounded-full transition-all duration-500 ${i === testimonialIdx ? 'bg-blue-500 w-16 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/10 w-2.5 hover:bg-white/30'}`} />
                ))}
              </div>
              <button onClick={next} className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 border border-white/10 transition-all shadow-2xl group"><ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUTURE PRODUCTS ── */}
      <section className="section-padding bg-[#080E1C] relative overflow-hidden">
        <div className="orb w-[500px] h-[500px] bg-blue-600/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[120px]" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-24">
            <span className="badge mb-6">Coming Soon</span>
            <h2 className="section-headline text-white mb-8">
              Our <span className="gradient-text">Future Products</span>
            </h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              We are currently engineering next-generation tools to solve tomorrow's business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {futureProducts.map((p) => {
              const IconComp = icons[p.icon] || Smartphone
              return (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -10 }}
                  className="glass rounded-[3rem] p-12 border border-white/10 shadow-2xl relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <IconComp size={36} style={{ color: p.color }} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{p.title}</h3>
                  <p className="text-gray-400 text-xl leading-relaxed mb-8 opacity-80">{p.description}</p>
                  <div className="flex items-center gap-3 text-blue-400 font-bold tracking-tight">
                    <Zap size={18} /> Phase: Beta Engineering
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="relative rounded-[4rem] overflow-hidden p-20 md:p-32 text-center shadow-[0_0_100px_rgba(59,130,246,0.15)]" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 30%, #312e81 100%)' }}>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="orb w-[600px] h-[600px] bg-blue-500 -top-64 left-1/4 opacity-10 blur-[150px]" />
            <div className="orb w-[500px] h-[500px] bg-purple-600 -bottom-64 right-1/4 opacity-10 blur-[150px]" />
            <div className="relative z-10">
              <span className="badge mb-8 bg-white/10 text-white border-white/20">Let's Connect</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.95]">Ready to <span className="gradient-text">Architect the Future?</span></h2>
              <p className="text-blue-50/80 text-2xl md:text-3xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Partner with Carrezza Global Solutions to accelerate your digital transformation and achieve operational excellence at scale.</p>
              <div className="flex flex-wrap gap-8 justify-center">
                <Link to="/contact" className="bg-white text-blue-900 font-black text-xl py-6 px-14 rounded-2xl hover:bg-blue-50 transition-all flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95">
                  Schedule Free Strategy Call <ArrowRight size={26} />
                </Link>
                <Link to="/services" className="border-2 border-white/20 text-white font-black text-xl py-6 px-14 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/40">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}