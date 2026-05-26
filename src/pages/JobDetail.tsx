import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Target, 
  Users, 
  Zap,
  ChevronRight
} from 'lucide-react';
import { openings as staticOpenings, JobOpening } from '../data/jobs';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = React.useState<JobOpening | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchJob = async () => {
      // 1. Check static openings
      const staticJob = staticOpenings.find(j => j.id === id);
      if (staticJob) {
        setJob(staticJob);
        setLoading(false);
        return;
      }

      // 2. Check Firestore
      try {
        const q = query(collection(db, "jobs"), where("id", "==", id));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          setJob(snapshot.docs[0].data() as JobOpening);
        }
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0B1120] pt-32 pb-24">
      <div className="container-custom">
        {/* Navigation Breadcrumb */}
        <Link 
          to="/careers" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-12 font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Careers
        </Link>

        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="relative glass rounded-[4rem] p-10 md:p-20 border border-white/10 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent" />
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 relative z-10">
              <div className="space-y-8 max-w-3xl">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] bg-blue-500/10 px-6 py-2.5 rounded-2xl border border-blue-500/20">{job.dept}</span>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] bg-emerald-500/10 px-6 py-2.5 rounded-2xl border border-emerald-500/20">Now Hiring</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                  {job.title}
                </h1>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-blue-400" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-blue-400" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase size={20} className="text-blue-400" />
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-xs">{job.exp} Experience</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to={job.id === 'intern-training' ? "/internship/apply" : "/careers/apply"}
                  state={{ role: job.title }}
                  className="btn-primary py-6 px-12 text-xl shadow-[0_20px_50px_rgba(59,130,246,0.3)] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                >
                  Initiate Application <ArrowRight size={24} className="ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-blue-500 rounded-full" />
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Mission Overview</h2>
              </div>
              <p className="text-gray-400 text-xl leading-relaxed font-medium">
                {job.description}
              </p>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-purple-500 rounded-full" />
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Strategic Responsibilities</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {job.responsibilities.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white transition-all">
                      <ChevronRight size={20} />
                    </div>
                    <p className="text-gray-300 text-lg font-medium leading-relaxed group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-10 bg-emerald-500 rounded-full" />
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Required Expertise</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {job.requirements.map((item, index) => (
                  <div key={index} className="glass rounded-3xl p-8 border border-white/5 flex items-start gap-5 hover:border-emerald-500/30 transition-all group">
                    <CheckCircle2 size={24} className="text-emerald-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 font-bold group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div className="glass rounded-[3rem] p-10 border border-white/10 space-y-12 sticky top-32">
              <div className="space-y-8">
                <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-10">Sector Intel</h3>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Target size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Impact Level</p>
                    <p className="text-white font-black">Strategic Execution</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Users size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Team Unit</p>
                    <p className="text-white font-black">{job.dept}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Zap size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Growth Curve</p>
                    <p className="text-white font-black">Accelerated Trajectory</p>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-white/10 space-y-6 text-center">
                <p className="text-gray-400 text-sm font-medium">Ready to claim your mission?</p>
                <Link
                  to={job.id === 'intern-training' ? "/internship/apply" : "/careers/apply"}
                  state={{ role: job.title }}
                  className="w-full btn-primary py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                >
                  Initiate Now <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
