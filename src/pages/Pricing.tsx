import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'
import { pricingPlans } from '../data'
import { PageHeader } from '../components/ui/Section'

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <div>
      <PageHeader
        badge="Pricing"
        title="Transparent, Flexible"
        highlight="Pricing"
        description="No hidden fees, no surprises. Choose the engagement model that fits your business stage and scale as you grow."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          {/* Toggle */}
          <div className="flex justify-center mb-24">
            <div className="glass rounded-[1.5rem] p-2 border border-white/8 flex items-center gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <button
                onClick={() => setAnnual(false)}
                className={`px-10 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${!annual ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40 scale-105' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-10 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${annual ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/40 scale-105' : 'text-gray-400 hover:text-white'}`}
              >
                Annual <span className="ml-3 text-[10px] font-black bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/20">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass rounded-[3rem] p-12 md:p-16 border transition-all flex flex-col ${
                  plan.badge === 'Most Popular'
                    ? 'border-purple-500/40 shadow-[0_30px_70px_rgba(139,92,246,0.15)] md:-translate-y-8 bg-white/[0.03] z-10 scale-105'
                    : 'border-white/8 hover:border-blue-500/30 shadow-2xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                    <span className="px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-white shadow-2xl border border-white/20"
                      style={{ background: plan.badge === 'Most Popular' ? 'linear-gradient(135deg,#8B5CF6,#EC4899)' : 'linear-gradient(135deg,#06B6D4,#3B82F6)' }}>
                      {plan.badge}
                    </span>
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="font-bold text-white text-3xl mb-4 tracking-tighter">{plan.name}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">{plan.description}</p>
                </div>
                <div className="mb-12">
                  {plan.price.monthly ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl font-black text-white tracking-tighter">${annual ? plan.price.annual?.toLocaleString() : plan.price.monthly?.toLocaleString()}</span>
                        <span className="text-gray-500 font-black text-xs uppercase tracking-widest opacity-60">/month</span>
                      </div>
                      {annual && <div className="text-xs font-black text-green-400 mt-6 flex items-center gap-3 uppercase tracking-widest bg-green-500/5 py-2 px-4 rounded-xl border border-green-500/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Save ${((plan.price.monthly! - plan.price.annual!) * 12).toLocaleString()} / year
                      </div>}
                    </div>
                  ) : (
                    <div className="text-4xl font-black gradient-text tracking-tighter py-2">Custom Package</div>
                  )}
                </div>
                <div className="space-y-5 mb-16 flex-1">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-start gap-4 text-base text-gray-300 font-bold tracking-tight">
                      <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-green-400" />
                      </div>
                      {f}
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} className="flex items-start gap-4 text-base text-gray-600 font-bold tracking-tight opacity-50">
                      <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X size={16} className="text-gray-600" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`w-full py-6 px-10 rounded-2xl font-black text-lg text-center flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95 ${
                    plan.badge === 'Most Popular'
                      ? 'btn-primary shadow-purple-500/20'
                      : 'btn-outline border-2'
                  }`}
                >
                  {plan.cta} <ArrowRight size={22} />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-20 p-10 glass rounded-[2rem] border border-white/5 bg-white/[0.01] text-center max-w-3xl mx-auto">
            <p className="text-gray-500 text-lg font-bold tracking-tight">
              All prices are in USD. Specialized enterprise scaling and custom infrastructure packages are available. <Link to="/contact" className="text-blue-500 hover:text-blue-400 underline underline-offset-8 decoration-blue-500/30 hover:decoration-blue-500 transition-all">Consult with our advisors</Link> for complex requirements.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Standard with Every Tier</span>
            <h2 className="section-headline text-white mb-8">The Carrezza <span className="gradient-text">Guarantee</span></h2>
            <p className="text-gray-400 text-2xl max-w-2xl mx-auto leading-relaxed font-medium">Foundational excellence provided across every engagement, regardless of scale.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Dedicated Project Management', 'Full Transparency Reporting', 'ISO 27001 Data Handling', 'Agile Engineering Process', '100% Code & IP Ownership', 'Premium Support (24/7)', 'SLA Guaranteed Uptime', 'Strategic Onboarding'].map(item => (
              <div key={item} className="glass rounded-[1.5rem] p-8 border border-white/8 flex items-center gap-5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all shadow-xl group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all shadow-inner">
                  <Check size={20} className="text-blue-400" />
                </div>
                <span className="text-gray-300 text-base font-black tracking-tighter uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
