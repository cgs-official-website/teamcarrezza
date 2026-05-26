import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Briefcase, Heart, Zap, Globe, Shield, Award, Users } from 'lucide-react'
import { PageHeader } from '../components/ui/Section'

import { openings as staticOpenings, JobOpening } from '../data/jobs'
import { db } from '../firebase/config'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

const perks = [
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world with flexible hours.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and mental health benefits.' },
  { icon: Award, title: 'Learning Budget', desc: '$2,000 annual budget for courses, conferences, and certifications.' },
  { icon: Zap, title: 'Fast Career Growth', desc: 'Rapid advancement in a growing global company.' },
  { icon: Shield, title: 'Job Security', desc: 'Stable, profitable company with 12+ years in business.' },
  { icon: Users, title: 'Great Culture', desc: 'Diverse, inclusive team across 15+ nationalities.' },
]

export default function Careers() {
  const [dynamicOpenings, setDynamicOpenings] = React.useState<JobOpening[]>([]);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const q = query(collection(db, "jobs"), orderBy("postedAt", "desc"));
        const snapshot = await getDocs(q);
        const jobs = snapshot.docs.map(doc => ({ ...doc.data() } as JobOpening));
        setDynamicOpenings(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const allOpenings = [...dynamicOpenings, ...staticOpenings];

  return (
    <div>
      <PageHeader
        badge="Careers"
        title="Join the Team Building"
        highlight="Tomorrow's Tech"
        description="We're hiring exceptional talent across engineering, design, operations, and sales. Join a global team that's redefining IT and BPO services."
      />

      {/* Perks */}
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Employee Excellence</span>
            <h2 className="section-headline text-white mb-8">Evolution of <span className="gradient-text">Human Capital</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">We foster a culture of radical innovation, global inclusion, and accelerated career trajectory for the world's most ambitious talent.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-[3rem] p-12 border border-white/8 hover:border-blue-500/30 transition-all shadow-2xl group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-10 shadow-inner group-hover:bg-blue-500/20 group-hover:scale-110 transition-all relative z-10">
                  <Icon size={32} className="text-blue-400" />
                </div>
                <h3 className="font-black text-white mb-6 text-2xl tracking-tighter group-hover:text-blue-400 transition-colors relative z-10">{title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed font-medium relative z-10">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-[#080E1C]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="badge mb-6">Strategic Openings</span>
            <h2 className="section-headline text-white mb-8">Current <span className="gradient-text">Technical Missions</span></h2>
            <p className="text-gray-400 text-2xl max-w-3xl mx-auto leading-relaxed font-medium">Ready to architect the future of global commerce? Select your mission and join our elite engineering and operations units.</p>
          </div>
          <div className="space-y-8">
            {allOpenings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-[3rem] p-10 md:p-14 border border-white/8 hover:border-blue-500/40 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start md:items-center gap-10 relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
                    <Briefcase size={32} className="text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-3xl tracking-tighter mb-2 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <p className="text-gray-500 font-medium text-sm mb-5 group-hover:text-gray-400 transition-colors">{job.slug}</p>
                    <div className="flex flex-wrap gap-5 items-center">
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-3 bg-white/5 px-6 py-2.5 rounded-2xl border border-white/8"><MapPin size={16} className="text-blue-400" />{job.location}</span>
                      <span className="text-xs font-black uppercase tracking-widest text-gray-400 flex items-center gap-3 bg-white/5 px-6 py-2.5 rounded-2xl border border-white/8"><Clock size={16} className="text-blue-400" />{job.type}</span>
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] bg-blue-500/10 px-6 py-2.5 rounded-2xl border border-blue-500/20">{job.dept}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-12 lg:border-l lg:border-white/10 lg:pl-12 relative z-10">
                  <div className="hidden xl:block">
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-2 opacity-60">Exp Requirement</div>
                    <div className="text-gray-200 font-black text-xl tracking-tighter">{job.exp}</div>
                  </div>
                  <Link
                    to={`/careers/job/${job.id}`}
                    className="btn-primary py-5 px-10 text-lg shadow-2xl shadow-blue-500/25 font-black uppercase tracking-widest active:scale-95 transition-transform"
                  >
                    View Details <ArrowRight size={24} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 glass rounded-[4rem] p-16 md:p-24 border border-white/10 shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-all" />
            <h3 className="hero-headline text-white mb-8 tracking-tighter">Stealth Mode <span className="gradient-text">Candidate?</span></h3>
            <p className="text-gray-400 text-2xl mb-12 leading-relaxed font-medium">We're always scouting for exceptional minds who don't fit into standard labels. If you're passionate about engineering the future, we invite you to start a dialogue.</p>
            <Link to="/careers/apply" className="btn-outline py-6 px-14 text-xl border-2 font-black uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all shadow-2xl">Submit Executive CV <ArrowRight size={24} className="ml-3" /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}
