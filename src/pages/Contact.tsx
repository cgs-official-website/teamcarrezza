import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { PageHeader } from '../components/ui/Section'

const offices = [
  { city: 'Perundurai', country: 'India', email: 'info@teamcarrezza.com', phone: '+91 91508 86338', flag: '🇮🇳' },
  // { city: 'New York', country: 'USA', email: 'usa@carrezzaglobal.com', phone: '+1 (234) 567-890', flag: '🇺🇸' },
  // { city: 'London', country: 'UK', email: 'uk@carrezzaglobal.com', phone: '+44 20 1234 5678', flag: '🇬🇧' },
  // { city: 'Dubai', country: 'UAE', email: 'uae@carrezzaglobal.com', phone: '+971 4 123 4567', flag: '🇦🇪' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    toast.success('Message sent! We\'ll contact you within 24 hours.', { duration: 5000 })
  }

  return (
    <div>
      <PageHeader
        badge="Contact Us"
        title="Let's Start a"
        highlight="Conversation"
        description="Ready to transform your business? Our experts are available 24/7 to discuss your project, answer questions, and create a custom solution roadmap."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            {/* Form */}
            <div className="glass rounded-[3rem] p-12 md:p-16 border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32" />
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-24"
                >
                  <div className="w-24 h-24 rounded-3xl bg-green-500/10 flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <CheckCircle size={48} className="text-green-400" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6 tracking-tighter">Transmission Successful!</h3>
                  <p className="text-gray-400 text-xl leading-relaxed max-w-md mx-auto font-medium">Thank you for reaching out. A dedicated solution architect will contact you within 24 business hours to discuss your roadmap.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-12 px-10 py-4 text-lg border-2">Send Another Transmission</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">Initiate Consultation</h3>
                    <p className="text-gray-400 text-lg font-medium">Please provide your details for a technical review.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Email Address *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@company.com" className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Company Name</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Global" className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Phone Contact</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Strategic Domain</label>
                      <select name="service" value={form.service} onChange={handleChange} className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all appearance-none">
                        <option value="" className="bg-[#0B1120]">Select Domain</option>
                        <option className="bg-[#0B1120]">Software Engineering</option>
                        <option className="bg-[#0B1120]">AI & Intelligent Automation</option>
                        <option className="bg-[#0B1120]">Cloud & Infrastructure</option>
                        <option className="bg-[#0B1120]">Mobile Application Architecture</option>
                        <option className="bg-[#0B1120]">BPO & Customer Operations</option>
                        <option className="bg-[#0B1120]">Digital Transformation</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Investment Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="input-field py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all appearance-none">
                        <option value="" className="bg-[#0B1120]">Select Range</option>
                        <option className="bg-[#0B1120]">$10K – $50K</option>
                        <option className="bg-[#0B1120]">$50K – $250K</option>
                        <option className="bg-[#0B1120]">$250K – $1M</option>
                        <option className="bg-[#0B1120]">$1M+</option>
                        <option className="bg-[#0B1120]">Continuous Operations</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-gray-500 text-xs font-black uppercase tracking-[0.3em] block ml-2">Project Vision *</label>
                    <textarea
                      required name="message" value={form.message} onChange={handleChange}
                      placeholder="Describe your technical objectives, operational challenges, or business goals..."
                      rows={6} className="input-field resize-none py-5 px-6 bg-white/5 border-white/10 focus:border-blue-500/50 text-lg transition-all"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-6 text-xl shadow-2xl shadow-blue-500/25 font-black uppercase tracking-widest active:scale-[0.98] transition-transform">
                    Submit Proposal <Send size={24} className="ml-3" />
                  </button>
                  <p className="text-gray-500 text-xs text-center font-bold tracking-tight uppercase opacity-60">Confidentiality Assured • 24hr Strategic Response</p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-bold text-white mb-10 tracking-tighter">Strategic Partnerships</h3>
                <div className="space-y-6">
                  {[
                    'Elite technical consultation (30-minute deep dive)',
                    'Comprehensive solution architecture review',
                    'Zero-obligation feasibility analysis',
                    'Custom resource & budget optimization plan',
                    'Same-day executive response'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-6 py-5 text-gray-300 text-lg font-bold tracking-tight border-b border-white/5 last:border-0 group">
                      <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-all">
                        <CheckCircle size={24} className="text-green-400" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-10 tracking-tighter">Global Presence</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {offices.map(({ city, country, email, phone, flag }) => (
                    <div key={city} className="glass rounded-[2.5rem] p-8 border border-white/8 hover:border-blue-500/30 transition-all shadow-xl group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 blur-2xl -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-all" />
                      <div className="flex items-center gap-5 mb-6">
                        <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110">{flag}</span>
                        <div>
                          <div className="font-bold text-white text-xl tracking-tight leading-none mb-1.5">{city}</div>
                          <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">{country}</div>
                        </div>
                      </div>
                      <div className="space-y-3 relative z-10">
                        <a href={`mailto:${email}`} className="flex items-center gap-4 text-base text-gray-400 hover:text-blue-400 transition-colors font-medium">
                          <Mail size={18} className="text-blue-400/40" />{email}
                        </a>
                        <a href={`tel:${phone}`} className="flex items-center gap-4 text-base text-gray-400 hover:text-blue-400 transition-colors font-medium">
                          <Phone size={18} className="text-blue-400/40" />{phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-[3rem] p-10 md:p-12 border border-white/10 flex items-start gap-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-all" />
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <Clock size={32} className="text-blue-400" />
                </div>
                <div className="relative z-10">
                  <div className="font-bold text-white text-2xl mb-2 tracking-tighter">Omni-Channel Operations</div>
                  <div className="text-gray-400 text-lg font-medium leading-relaxed">24/7 Global Engineering & Operations Support</div>
                  <div className="text-gray-500 text-sm mt-4 leading-relaxed font-bold tracking-tight uppercase opacity-80">Consultation availability: Mon–Fri 0900–1800 EST/GMT/IST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
