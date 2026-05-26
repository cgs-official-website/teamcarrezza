import { motion } from 'framer-motion'
import { ArrowRight, Smartphone, Layers, Users, Zap, Shield, Bot, Globe } from 'lucide-react'
import { PageHeader } from '../components/ui/Section'
import { futureProducts } from '../data'
import { Link } from 'react-router-dom'

const icons: Record<string, any> = { Smartphone, Layers, Users, Zap, Shield, Bot, Globe }

export default function Products() {
  return (
    <div>
      <PageHeader
        badge="Product Roadmap"
        title="Engineering the"
        highlight="Future of Business"
        description="We are developing a suite of next-generation digital products designed to solve complex enterprise challenges and drive operational efficiency."
      />

      {/* Product Grid */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {futureProducts.map((product) => {
              const Icon = icons[product.icon] || Zap
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -15 }}
                  className="glass rounded-[3rem] p-12 border border-white/10 shadow-2xl relative overflow-hidden group h-full flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
                  
                  <div className="flex items-start justify-between mb-10">
                    <div className="w-20 h-20 rounded-[1.5rem] bg-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <Icon size={36} style={{ color: product.color }} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{product.title}</h3>
                  <p className="text-gray-400 text-xl leading-relaxed mb-10 flex-1 opacity-80">{product.description}</p>
                  
                  <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-blue-400 font-bold tracking-tight">
                      <Bot size={18} /> Phase: Beta Engineering
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-blue-400 group-hover:border-blue-400 transition-all">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="badge mb-8">Our Product Philosophy</span>
              <h2 className="section-headline text-white mb-10">Scalable, Secure, and <span className="gradient-text">Human-Centered</span></h2>
              <div className="space-y-8">
                {[
                  { title: 'User-Centric Design', desc: 'We build interfaces that people love to use, reducing training time and increasing productivity.' },
                  { title: 'Enterprise-Grade Security', desc: 'Data protection is at the core of our development, following global compliance standards.' },
                  { title: 'Seamless Integration', desc: 'Our products are designed to work harmoniously with your existing tech ecosystem.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl opacity-50" />
               <div className="glass rounded-[3rem] p-12 border border-white/10 relative overflow-hidden">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center shadow-inner"><Globe size={26} className="text-blue-400" /></div>
                    <span className="text-white font-black text-2xl tracking-tighter uppercase">Market Ready 2026</span>
                  </div>
                  <p className="text-gray-300 text-2xl font-medium leading-relaxed mb-10 italic">
                    "We are not just building software; we are building competitive advantages for our clients in the new digital economy."
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center py-6 text-xl">Get Early Access</Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0B1120] text-center">
        <div className="container-custom">
          <div className="glass rounded-[4rem] p-20 md:p-32 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] -mr-64 -mt-64" />
            <h2 className="hero-headline text-white mb-10">Want to be an <span className="gradient-text">Early Adopter?</span></h2>
            <p className="text-gray-400 text-2xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">Join our pilot program and get exclusive access to our products before the official global launch.</p>
            <Link to="/contact" className="btn-primary text-xl py-6 px-14 shadow-2xl shadow-blue-500/20 hover:scale-105 transition-transform font-black">Join Beta Program <ArrowRight size={26} className="ml-2" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
