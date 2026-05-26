import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Development', href: '/services/it' },
      { label: 'Software Development', href: '/services/it' },
      { label: 'UI/UX Designing', href: '/services/it' },
      { label: 'Digital Marketing', href: '/services/it' },
      { label: 'Survey Process', href: '/services/bpo' },
      { label: 'US Voice Process', href: '/services/bpo' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Industries', href: '/industries' },
  { label: 'Products', href: '/products' },
  { label: 'Portfolio', href: '/portfolio' },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'Our Process', href: '/process' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-[#0B1120] border-b border-white/[0.03]">
        <div className="container-custom flex justify-between items-center py-2">
          <div className="flex items-center gap-8 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <a href="mailto:info@teamcarrezza.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Mail size={12} className="text-blue-500/50" />
              info@teamcarrezza.com
            </a>
            <a href="tel:+91-9150886338" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <Phone size={12} className="text-blue-500/50" />
              +91 9150886338
            </a>
          </div>
          <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
            <Globe size={12} className="text-blue-500" />
            <span>Global IT & BPO Intelligence</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`sticky top-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#0B1120]/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-0.5'
            : 'bg-transparent py-2'
        }`}
      >
        <div className="container-custom" ref={dropdownRef}>
          <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
            {/* Logo - Left Column */}
            <div className="flex-[2] flex items-center min-w-[220px]">
              <Link to="/" className="flex items-center gap-3 lg:gap-4 group shrink-0">
                <div className="relative w-10 lg:w-12 h-10 lg:h-12 rounded-2xl overflow-hidden p-2 bg-white flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500 border border-white/20">
                  <img
                    src="/logo.png"
                    alt="Carrezza Global Solutions"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-black text-white text-[10px]">CGS</div>'
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col border-l border-white/10 pl-3 lg:pl-4">
                  <span className="font-bold text-white text-sm lg:text-base xl:text-lg tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
                    Carrezza Global
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[7px] lg:text-[8px] xl:text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">Solutions</span>
                    <span className="text-[5px] lg:text-[6px] xl:text-[7px] text-blue-500/80 font-black uppercase tracking-widest border border-blue-500/20 px-1 py-0.25 rounded-sm">Pvt Ltd</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Nav - Middle Column */}
            <div className="hidden lg:flex flex-[5] items-center justify-center gap-0.5 xl:gap-1.5">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className={`relative flex items-center gap-1 px-2 py-2 text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300 group/nav ${
                        (location.pathname.startsWith(item.href) && item.href !== '#') || (activeDropdown === item.label)
                          ? 'text-blue-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={10}
                        className={`transition-transform duration-500 opacity-50 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                      <div className={`absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 transition-all duration-300 origin-left scale-x-0 group-hover/nav:scale-x-100 ${
                        (location.pathname.startsWith(item.href) && item.href !== '#') || (activeDropdown === item.label) ? 'scale-x-100' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative flex items-center gap-1.5 px-2.5 py-2 text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 group/nav ${
                        location.pathname === item.href
                          ? 'text-blue-400'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <div className={`absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500 transition-all duration-300 origin-left scale-x-0 group-hover/nav:scale-x-100 ${
                        location.pathname === item.href ? 'scale-x-100' : ''
                      }`} />
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#0B1120]/95 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.6)] overflow-hidden p-3"
                      >
                        <div className="flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className={`flex items-center justify-between px-6 py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                                location.pathname === child.href
                                  ? 'text-white bg-blue-500/20 shadow-inner'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA & Mobile Toggle - Right Column */}
            <div className="flex-1 flex items-center justify-end gap-4">
              <div className="hidden lg:flex items-center">
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/20 active:scale-95 transition-all whitespace-nowrap"
                >
                  Connect
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-2xl text-gray-400 hover:text-white hover:bg-white/5 transition-all border border-white/5 shadow-xl"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-white/8 overflow-hidden"
            >
              <div className="container-custom py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5"
                        >
                          {item.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-1 flex flex-col gap-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  to={child.href}
                                  className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                          location.pathname === item.href
                            ? 'text-blue-400 bg-blue-500/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-white/8 mt-2">
                  <Link to="/contact" className="btn-primary w-full justify-center text-sm">
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
