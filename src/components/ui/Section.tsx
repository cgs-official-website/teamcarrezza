import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export function Section({ children, className = '', id }: SectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, highlight, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <span className="badge">{badge}</span>
        </div>
      )}
      <h2 className={`section-headline text-white mb-4 ${centered ? 'max-w-3xl mx-auto' : ''}`}>
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-gray-400 text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

interface PageHeaderProps {
  badge?: string
  title: string
  highlight?: string
  description?: string
}

export function PageHeader({ badge, title, highlight, description }: PageHeaderProps) {
  return (
    <div className="relative py-10 md:py-14 lg:py-16 overflow-hidden bg-[#080E1C] border-b border-white/6">
      <div className="orb w-96 h-96 bg-blue-600 -top-48 -left-24" />
      <div className="orb w-80 h-80 bg-purple-600 -bottom-40 right-10" />
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="container-custom relative text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="badge">{badge}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hero-headline text-white mb-6 max-w-4xl mx-auto"
        >
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  )
}
