import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Globe, ArrowRight,
  Shield, Award, Clock, CheckCircle
} from 'lucide-react'

const Twitter = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const Linkedin = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const Github = (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;

const services = [
  { label: 'Web Development', href: '/services/it' },
  { label: 'Software Development', href: '/services/it' },
  { label: 'UI/UX Designing', href: '/services/it' },
  { label: 'Digital Marketing', href: '/services/it' },
  { label: 'Survey Process', href: '/services/bpo' },
  { label: 'US Voice Process', href: '/services/bpo' },
]

const products = [
  { label: 'HRM Software', href: '/products' },
  { label: 'CRM Tool', href: '/products' },
  { label: 'Turf Booking App', href: '/products' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Process', href: '/process' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'FAQ', href: '/faq' },
]

const trustBadges = [
  { icon: Shield, label: 'ISO 27001 Certified' },
  { icon: Award, label: 'Top IT Company 2024' },
  { icon: Clock, label: '24/7 Support' },
  { icon: CheckCircle, label: 'Modern Engineering' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#060D1A] border-t border-white/6 overflow-hidden">
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-blue-600/10 -top-64 -left-64 blur-[120px]" />
      <div className="orb w-[400px] h-[400px] bg-purple-600/10 -bottom-32 right-10 blur-[100px]" />

      {/* Newsletter Section */}
      <div className="relative border-b border-white/6">
        <div className="container-custom py-24 md:py-32">
          <div className="glass rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] -mr-32 -mt-32" />
            <div className="max-w-xl text-center lg:text-left relative z-10">
              <span className="badge mb-6">Stay Updated</span>
              <h3 className="hero-headline text-white mb-6">
                Ready to <span className="gradient-text">scale globally?</span>
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed">
                Join our industry network getting exclusive weekly insights on digital transformation and global operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 relative z-10">
              <input
                type="email"
                placeholder="Your professional email"
                className="input-field flex-1 lg:w-96 h-16 px-8 text-lg rounded-2xl bg-white/5 border-white/10 focus:border-blue-500/50"
              />
              <button className="btn-primary h-16 px-10 whitespace-nowrap text-base font-bold shadow-2xl shadow-blue-500/20">
                Subscribe Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <div className="border-b border-white/4 bg-white/[0.01]">
        <div className="container-custom py-10 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 md:gap-5 text-gray-400 group hover:text-white transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/15 group-hover:scale-110 transition-all shadow-inner border border-white/5">
                  <Icon size={20} className="text-blue-500/80 group-hover:text-blue-400 md:hidden" />
                  <Icon size={24} className="text-blue-500/80 group-hover:text-blue-400 hidden md:block" />
                </div>
                <span className="font-black text-[10px] md:text-xs lg:text-sm uppercase tracking-widest leading-tight whitespace-normal break-words max-w-[150px] sm:max-w-none">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-20 lg:gap-12">
          {/* Brand Info - Col Span 3 */}
          <div className="lg:col-span-3 pr-0 lg:pr-12">
            <Link to="/" className="flex items-center gap-6 mb-10 group">
              <div className="w-28 h-12 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/logo.png"
                  alt="Carrezza Global"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <div className="font-black text-white text-2xl leading-none tracking-tighter">CARREZZA GLOBAL</div>
                <div className="text-xs text-blue-500 font-black tracking-[0.3em] mt-1.5 uppercase opacity-80">Solutions</div>
              </div>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
              The premier strategic partner for global enterprises seeking world-class IT engineering and hyper-efficient BPO solutions. Headquartered in Tamil Nadu.
            </p>
            <div className="flex gap-5">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
                { icon: Globe, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all border border-white/8 hover:scale-110 shadow-xl group"
                >
                  <Icon size={22} className="group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs mb-10 uppercase tracking-[0.25em] opacity-50">Services</h4>
            <ul className="space-y-5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 text-base font-medium hover:text-blue-400 transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400 group-hover:scale-150 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs mb-10 uppercase tracking-[0.25em] opacity-50">Products</h4>
            <ul className="space-y-5">
              {products.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 text-base font-medium hover:text-blue-400 transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400 group-hover:scale-150 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black text-xs mb-10 uppercase tracking-[0.25em] opacity-50">Company</h4>
            <ul className="space-y-5">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 text-base font-medium hover:text-blue-400 transition-all flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/20 group-hover:bg-blue-400 group-hover:scale-150 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Col Span 3 */}
          <div className="lg:col-span-3 pl-0 lg:pl-8">
            <h4 className="text-white font-black text-xs mb-10 uppercase tracking-[0.25em] opacity-50">Get In Touch</h4>
            <div className="glass rounded-[2rem] p-8 border border-white/6 mb-8 shadow-2xl">
              <ul className="space-y-8">
                <li>
                  <a href="mailto:info@carrezzaglobal.com" className="flex items-center gap-5 text-gray-400 hover:text-blue-400 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-all shadow-inner">
                      <Mail size={20} className="text-blue-500/80 group-hover:text-blue-400" />
                    </div>
                    <span className="text-base font-bold tracking-tight">info@teamcarrezza.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+91-9150886338" className="flex items-center gap-5 text-gray-400 hover:text-blue-400 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-all shadow-inner">
                      <Phone size={20} className="text-blue-500/80 group-hover:text-blue-400" />
                    </div>
                    <span className="text-base font-bold tracking-tight">+91 91508 86338</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-5 text-gray-400">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shadow-inner">
                      <MapPin size={20} className="text-blue-500/80" />
                    </div>
                    <span className="text-base font-bold leading-relaxed tracking-tight">Perundurai, Erode, Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link
              to="/contact"
              className="btn-primary w-full h-16 justify-center text-base font-black shadow-2xl shadow-blue-500/20 tracking-wide"
            >
              Consult an Expert
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright & Bottom Links */}
      <div className="border-t border-white/6 bg-black/40">
        <div className="container-custom py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-bold tracking-tight">
            © {new Date().getFullYear()} Carrezza Global Solutions. All rights reserved. <span className="text-blue-500/50">Enterprise Verified.</span>
          </p>
          <div className="flex items-center gap-10">
            {legal.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-gray-500 text-sm hover:text-white transition-all font-black uppercase tracking-widest hover:tracking-[0.1em]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
