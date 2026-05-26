import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, User } from 'lucide-react'
import { PageHeader } from '../components/ui/Section'

const posts = [
  { id: 1, title: 'How AI Automation is Reshaping Enterprise BPO in 2025', category: 'AI & Automation', date: 'May 2, 2025', readTime: '8 min read', author: 'Arjun Mehta', excerpt: 'Discover how leading enterprises are deploying intelligent automation to transform BPO operations, reduce costs by 60%, and improve CSAT scores.', color: '#8B5CF6' },
  { id: 2, title: 'The Complete Guide to Cloud Migration for Enterprise Applications', category: 'Cloud & DevOps', date: 'Apr 28, 2025', readTime: '12 min read', author: 'Sarah Collins', excerpt: 'A step-by-step framework for planning and executing large-scale cloud migrations with zero downtime and maximum security.', color: '#3B82F6' },
  { id: 3, title: 'Building HIPAA-Compliant Healthcare Software: Key Considerations', category: 'Healthcare Tech', date: 'Apr 20, 2025', readTime: '10 min read', author: 'Priya Nair', excerpt: 'Essential technical and operational requirements for building healthcare applications that meet HIPAA compliance standards in 2025.', color: '#EF4444' },
  { id: 4, title: 'Why Dedicated Offshore Teams Outperform Traditional Outsourcing', category: 'BPO Strategy', date: 'Apr 15, 2025', readTime: '6 min read', author: 'Reza Al-Farsi', excerpt: 'Understanding the key differences between dedicated offshore teams and traditional outsourcing models, and when to choose each.', color: '#10B981' },
  { id: 5, title: 'Microservices Architecture: When to Use It and When to Avoid It', category: 'Software Architecture', date: 'Apr 10, 2025', readTime: '9 min read', author: 'Sarah Collins', excerpt: 'A pragmatic guide to deciding whether microservices architecture is the right choice for your next enterprise software project.', color: '#F59E0B' },
  { id: 6, title: 'The ROI of Digital Transformation: Measuring Success Beyond Cost Savings', category: 'Digital Strategy', date: 'Apr 5, 2025', readTime: '7 min read', author: 'Arjun Mehta', excerpt: 'How to build a comprehensive ROI framework for digital transformation initiatives that captures both quantitative and qualitative value.', color: '#06B6D4' },
]

export default function Blog() {
  return (
    <div>
      <PageHeader
        badge="Blog & Insights"
        title="Insights from Our"
        highlight="Experts"
        description="Thought leadership, technical guides, and industry insights from the Carrezza Global Solutions team."
      />

      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          {/* Featured */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[2.5rem] overflow-hidden border border-white/8 hover:border-blue-500/25 transition-all group shadow-2xl"
            >
              <div className="h-2.5" style={{ background: 'linear-gradient(90deg,#3B82F6,#8B5CF6)' }} />
              <div className="p-10 md:p-16">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <span className="badge">Featured Insights</span>
                  <span className="text-xs font-black text-purple-400 bg-purple-500/10 border border-purple-500/20 px-5 py-2 rounded-full uppercase tracking-widest">{posts[0].category}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tighter group-hover:gradient-text transition-all leading-tight">{posts[0].title}</h2>
                <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-4xl">{posts[0].excerpt}</p>
                <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-white/5">
                  <div className="flex items-center gap-3 text-gray-300 font-bold text-sm tracking-tight"><User size={18} className="text-blue-400" />{posts[0].author}</div>
                  <div className="flex items-center gap-3 text-gray-300 font-bold text-sm tracking-tight"><Clock size={18} className="text-blue-400" />{posts[0].readTime}</div>
                  <div className="text-gray-500 font-black uppercase tracking-widest text-[10px]">{posts[0].date}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-[2rem] overflow-hidden border border-white/8 hover:border-blue-500/30 transition-all group cursor-pointer shadow-xl flex flex-col"
              >
                <div className="h-2 w-full" style={{ background: post.color }} />
                <div className="p-10 flex flex-col flex-1">
                  <span className="text-[10px] font-black px-4 py-1.5 rounded-full border mb-6 inline-block uppercase tracking-widest shadow-inner"
                    style={{ color: post.color, borderColor: `${post.color}40`, background: `${post.color}10` }}>
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight tracking-tight group-hover:text-blue-400 transition-colors flex-1">{post.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-8 line-clamp-3 font-medium">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                    <div className="flex items-center gap-5">
                      <span className="text-gray-300 text-xs font-bold flex items-center gap-2"><User size={14} className="text-blue-400" />{post.author}</span>
                      <span className="text-gray-300 text-xs font-bold flex items-center gap-2"><Clock size={14} className="text-blue-400" />{post.readTime}</span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-all">
                      <ArrowRight size={20} className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
