import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/config";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-hot-toast";
import { 
  Search, Filter, Download, Trash2, LogOut, 
  GraduationCap, Briefcase, Mail, Phone, Linkedin, Globe,
  CheckCircle2, Clock, XCircle, AlertCircle, X, ExternalLink, Copy, User as UserIcon, MapPin
} from "lucide-react";

const AdminDashboard = () => {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [filteredApplicants, setFilteredApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [user, setUser] = useState<any>(null);
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"applicants" | "jobs">("applicants");
  const [jobs, setJobs] = useState<any[]>([]);
  const [isAddingJob, setIsAddingJob] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    dept: "",
    location: "",
    type: "Full-time",
    exp: "",
    slug: "",
    description: "",
    responsibilities: "",
    requirements: ""
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth || !db) {
      toast.error("Firebase is not configured. Redirecting...");
      navigate("/admin");
      return;
    }

    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/admin");
      } else {
        setUser(currentUser);
      }
    });

    const q = query(collection(db, "applicants"), orderBy("appliedAt", "desc"));
    const unsubscribeData = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setApplicants(data);
      setFilteredApplicants(data);
      setLoading(false);
    });

    const jobsQ = query(collection(db, "jobs"), orderBy("postedAt", "desc"));
    const unsubscribeJobs = onSnapshot(jobsQ, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setJobs(data);
    });

    return () => {
      unsubscribeAuth();
      unsubscribeData();
      unsubscribeJobs();
    };
  }, [navigate]);

  useEffect(() => {
    let result = applicants;
    if (searchTerm) {
      result = result.filter(a => 
        a.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        a.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (roleFilter !== "All") {
      result = result.filter(a => a.applyingRole === roleFilter);
    }
    setFilteredApplicants(result);
  }, [searchTerm, roleFilter, applicants]);

  const handleStatusChange = async (e: React.MouseEvent, id: string, newStatus: string) => {
    e.stopPropagation();
    try {
      await updateDoc(doc(db, "applicants", id), { status: newStatus });
      toast.success(`Status updated to ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        await deleteDoc(doc(db, "applicants", id));
        toast.success("Application deleted");
        if (selectedApplicant?.id === id) setSelectedApplicant(null);
      } catch (error) {
        toast.error("Failed to delete application");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const jobData = {
        ...newJob,
        responsibilities: newJob.responsibilities.split('\n').filter(r => r.trim()),
        requirements: newJob.requirements.split('\n').filter(r => r.trim()),
        postedAt: new Date(),
        id: newJob.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now()
      };
      await addDoc(collection(db, "jobs"), jobData);
      toast.success("Job posted successfully");
      setIsAddingJob(false);
      setNewJob({
        title: "",
        dept: "",
        location: "",
        type: "Full-time",
        exp: "",
        slug: "",
        description: "",
        responsibilities: "",
        requirements: ""
      });
    } catch (error) {
      toast.error("Failed to post job");
    }
  };

  const handleDeleteJob = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await deleteDoc(doc(db, "jobs", id));
        toast.success("Job deleted");
      } catch (error) {
        toast.error("Failed to delete job");
      }
    }
  };

  const copyToClipboard = (e: React.MouseEvent, text: string, label: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    toast.success(`${label} copied to clipboard`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-500 font-black uppercase tracking-[0.5em] animate-pulse">Initializing System...</p>
        </div>
      </div>
    );
  }

  const roles = ["All", ...new Set(applicants.map(a => a.applyingRole))];
  
  const stats = {
    total: applicants.length,
    new: applicants.filter(a => a.status === 'New').length,
    shortlisted: applicants.filter(a => a.status === 'Shortlisted').length,
    reviewed: applicants.filter(a => a.status === 'Reviewed').length
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-200 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-white/10 px-8 py-4 flex items-center justify-between backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/5">
            <Briefcase className="text-blue-400" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-black text-white tracking-tighter">Command <span className="gradient-text">Center</span></h2>
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">v2.1.0 // Applicant Intel</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-xs font-black text-white">{user?.email}</span>
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Primary Administrator</span>
          </div>
          <button 
            onClick={handleLogout}
            className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all border border-red-500/20 group"
            title="Terminate Session"
          >
            <LogOut size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-[1600px] mx-auto">
        {/* Statistics Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {[
            { label: 'Total Requests', value: stats.total, icon: Briefcase, color: 'blue' },
            { label: 'New Signals', value: stats.new, icon: Clock, color: 'amber' },
            { label: 'High Priority', value: stats.shortlisted, icon: CheckCircle2, color: 'emerald' },
            { label: 'Processed', value: stats.reviewed, icon: AlertCircle, color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/10 flex items-center gap-4 md:gap-5">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-${stat.color}-500/10 flex items-center justify-center border border-${stat.color}-500/20`}>
                <stat.icon size={20} className={`text-${stat.color}-400 md:hidden`} />
                <stat.icon size={24} className={`text-${stat.color}-400 hidden md:block`} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5 md:mb-1">{stat.label}</p>
                <p className="text-xl md:text-2xl font-black text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab("applicants")}
            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
              activeTab === "applicants" 
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
              : "glass text-gray-500 hover:text-white border border-white/10"
            }`}
          >
            Applicant Pipeline
          </button>
          <button 
            onClick={() => setActiveTab("jobs")}
            className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs transition-all ${
              activeTab === "jobs" 
              ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" 
              : "glass text-gray-500 hover:text-white border border-white/10"
            }`}
          >
            Mission Deployment
          </button>
        </div>

        {activeTab === "applicants" ? (
          <>
            {/* Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-12 bg-white/[0.02] p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-white/5">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Applicants Intelligence</h1>
                <p className="text-sm md:text-base text-gray-400 font-medium">Monitoring {filteredApplicants.length} deployment requests.</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <div className="relative group flex-grow sm:flex-grow-0">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search Identity..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-[#0B1120] border border-white/10 rounded-xl md:rounded-2xl pl-12 pr-6 py-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all w-full sm:w-[250px] md:w-[350px] shadow-inner"
                  />
                </div>

                <div className="relative group">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                  <select 
                    value={roleFilter} 
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="bg-[#0B1120] border border-white/10 rounded-xl md:rounded-2xl pl-12 pr-10 py-3 text-sm text-white focus:border-blue-500/50 outline-none transition-all appearance-none w-full sm:min-w-[180px] shadow-inner"
                  >
                    {roles.map(role => <option key={role} value={role} className="bg-[#0B1120]">{role}</option>)}
                  </select>
                </div>
              </div>
            </div>

        {/* Column-wise Table View (Desktop) / Card View (Mobile) */}
        {filteredApplicants.length === 0 ? (
          <div className="glass rounded-[2rem] md:rounded-[3rem] p-16 md:p-32 border border-dashed border-white/10 text-center">
            <AlertCircle className="text-gray-600 mx-auto mb-6" size={48} />
            <h3 className="text-xl md:text-2xl font-black text-white mb-2">No Active Signals</h3>
            <p className="text-sm md:text-base text-gray-500 font-medium">System is clear.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block glass rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/10">
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">Candidate Identity</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">Target Role</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">Experience / Qual.</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">Submission Date</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest">Status</th>
                      <th className="px-8 py-6 text-[10px] font-black text-gray-500 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredApplicants.map((applicant) => (
                      <tr 
                        key={applicant.id} 
                        onClick={() => setSelectedApplicant(applicant)}
                        className="hover:bg-white/[0.04] transition-all cursor-pointer group"
                      >
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 font-black text-xs">
                              {applicant.fullName.charAt(0)}
                            </div>
                            <div>
                              <p className="text-white font-bold group-hover:text-blue-400 transition-colors">{applicant.fullName}</p>
                              <p className="text-xs text-gray-500">{applicant.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="text-white font-medium">{applicant.applyingRole}</span>
                            <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Operations Dept</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm text-gray-300 font-bold">{applicant.experience}</span>
                            <span className="text-xs text-gray-500 truncate max-w-[200px]">{applicant.qualification}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-sm text-gray-400 font-medium">
                            {new Date(applicant.appliedAt?.seconds * 1000).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <select 
                            value={applicant.status} 
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => handleStatusChange(e as any, applicant.id, e.target.value)}
                            className={`bg-transparent border-none text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer ${
                              applicant.status === 'New' ? 'text-blue-400' :
                              applicant.status === 'Reviewed' ? 'text-purple-400' :
                              applicant.status === 'Shortlisted' ? 'text-emerald-400' :
                              'text-red-400'
                            }`}
                          >
                            <option value="New" className="bg-[#0B1120]">New</option>
                            <option value="Reviewed" className="bg-[#0B1120]">Reviewed</option>
                            <option value="Shortlisted" className="bg-[#0B1120]">Shortlisted</option>
                            <option value="Rejected" className="bg-[#0B1120]">Rejected</option>
                          </select>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <a 
                              href={`https://drive.google.com/uc?export=download&id=${applicant.resumeId}`} 
                              target="_blank" 
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition-all border border-blue-500/20"
                              title="Download Resume"
                            >
                              <Download size={16} />
                            </a>
                            <button 
                              onClick={(e) => handleDelete(e, applicant.id)}
                              className="p-2.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all border border-red-500/20 opacity-0 group-hover:opacity-100"
                              title="Delete Record"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card List View */}
            <div className="lg:hidden space-y-4">
              {filteredApplicants.map((applicant) => (
                <div 
                  key={applicant.id} 
                  onClick={() => setSelectedApplicant(applicant)}
                  className="glass rounded-3xl p-6 border border-white/10 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 font-black text-xs">
                        {applicant.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold">{applicant.fullName}</p>
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{applicant.applyingRole}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest ${
                      applicant.status === 'New' ? 'text-blue-400' :
                      applicant.status === 'Reviewed' ? 'text-purple-400' :
                      applicant.status === 'Shortlisted' ? 'text-emerald-400' :
                      'text-red-400'
                    }`}>
                      {applicant.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <p className="text-[10px] text-gray-500 font-bold">{new Date(applicant.appliedAt?.seconds * 1000).toLocaleDateString()}</p>
                    <div className="flex gap-2">
                      <a 
                        href={`https://drive.google.com/uc?export=download&id=${applicant.resumeId}`} 
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-blue-400 bg-blue-500/5 rounded-lg"
                      >
                        <Download size={14} />
                      </a>
                      <button 
                        onClick={(e) => handleDelete(e, applicant.id)}
                        className="p-2 text-red-400 bg-red-500/5 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    ) : (
      <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">Mission Deployment</h1>
                <p className="text-sm md:text-base text-gray-400 font-medium">Manage active technical missions and global openings.</p>
              </div>
              <button 
                onClick={() => setIsAddingJob(true)}
                className="bg-blue-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20"
              >
                Deploy New Mission
              </button>
            </div>

            {isAddingJob && (
              <div className="glass rounded-[2.5rem] p-8 md:p-12 border border-white/10 mb-12 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter">Mission Configuration</h3>
                  <button onClick={() => setIsAddingJob(false)} className="text-gray-500 hover:text-white"><X size={24} /></button>
                </div>
                <form onSubmit={handleAddJob} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Mission Title</label>
                    <input 
                      required
                      value={newJob.title}
                      onChange={e => setNewJob({...newJob, title: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50" 
                      placeholder="e.g. Senior Systems Architect" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Department</label>
                    <input 
                      required
                      value={newJob.dept}
                      onChange={e => setNewJob({...newJob, dept: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50" 
                      placeholder="e.g. Engineering Operations" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Location</label>
                    <input 
                      required
                      value={newJob.location}
                      onChange={e => setNewJob({...newJob, location: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50" 
                      placeholder="e.g. Remote / Global" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Job Type</label>
                    <select 
                      value={newJob.type}
                      onChange={e => setNewJob({...newJob, type: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 appearance-none"
                    >
                      <option value="Full-time" className="bg-[#0B1120]">Full-time</option>
                      <option value="Part-time" className="bg-[#0B1120]">Part-time</option>
                      <option value="Contract" className="bg-[#0B1120]">Contract</option>
                      <option value="Internship" className="bg-[#0B1120]">Internship</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Exp Requirement</label>
                    <input 
                      required
                      value={newJob.exp}
                      onChange={e => setNewJob({...newJob, exp: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50" 
                      placeholder="e.g. 5+ Years" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Brief Catchphrase</label>
                    <input 
                      required
                      value={newJob.slug}
                      onChange={e => setNewJob({...newJob, slug: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50" 
                      placeholder="e.g. Architecting global scale systems." 
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Mission Description</label>
                    <textarea 
                      required
                      value={newJob.description}
                      onChange={e => setNewJob({...newJob, description: e.target.value})}
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 resize-none" 
                      placeholder="Detailed mission brief..." 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Strategic Responsibilities (One per line)</label>
                    <textarea 
                      required
                      value={newJob.responsibilities}
                      onChange={e => setNewJob({...newJob, responsibilities: e.target.value})}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 resize-none" 
                      placeholder="Handle core infrastructure..." 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Required Expertise (One per line)</label>
                    <textarea 
                      required
                      value={newJob.requirements}
                      onChange={e => setNewJob({...newJob, requirements: e.target.value})}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-blue-500/50 resize-none" 
                      placeholder="Proficiency in Rust..." 
                    />
                  </div>
                  <div className="md:col-span-2 pt-6">
                    <button type="submit" className="w-full bg-blue-500 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/20 hover:bg-blue-600 transition-all">Execute Mission Deployment</button>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map(job => (
                <div key={job.id} className="glass rounded-[2rem] p-8 border border-white/10 hover:border-blue-500/30 transition-all group relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                      <Briefcase size={24} />
                    </div>
                    <button onClick={() => handleDeleteJob(job.id)} className="p-2 text-red-500/50 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter mb-2">{job.title}</h3>
                  <p className="text-xs text-blue-500 font-bold uppercase tracking-widest mb-6">{job.dept}</p>
                  <div className="flex items-center gap-4 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
              ))}
              {jobs.length === 0 && !isAddingJob && (
                <div className="md:col-span-2 lg:col-span-3 glass rounded-[2rem] p-16 border border-dashed border-white/10 text-center">
                  <AlertCircle className="text-gray-600 mx-auto mb-4" size={32} />
                  <p className="text-gray-500 font-black uppercase tracking-widest text-xs">No active missions deployed via dashboard.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Detail Modal: Applicant Dossier */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-[#0B1120]/95 md:bg-[#0B1120]/90" onClick={() => setSelectedApplicant(null)} />
          
          <div className="glass w-full h-full md:h-auto max-w-6xl max-h-screen md:max-h-[92vh] overflow-y-auto rounded-none md:rounded-[3.5rem] border-none md:border md:border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative z-10 animate-in fade-in zoom-in duration-500 flex flex-col">
            
            {/* Dossier Header: Strategic Identity */}
            <div className="sticky top-0 z-20 glass border-b border-white/10 p-6 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 bg-[#0B1120]/80 md:bg-[#0B1120]/50 backdrop-blur-2xl">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left w-full md:w-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center border border-blue-500/30 text-blue-400 relative z-10 shadow-2xl">
                    <UserIcon size={40} className="md:hidden" strokeWidth={1.5} />
                    <UserIcon size={56} className="hidden md:block" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{selectedApplicant.fullName}</h2>
                    <span className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] border ${
                      selectedApplicant.status === 'New' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                      selectedApplicant.status === 'Reviewed' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      selectedApplicant.status === 'Shortlisted' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {selectedApplicant.status}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-6 text-gray-400">
                    <span className="flex items-center gap-2.5 text-xs md:text-sm font-black uppercase tracking-widest text-blue-400">
                      <Briefcase size={14} className="md:hidden" />
                      <Briefcase size={16} className="hidden md:block" /> {selectedApplicant.applyingRole}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden md:block" />
                    <span className="flex items-center gap-2.5 text-xs md:text-sm font-bold">
                      <Clock size={14} className="md:hidden text-gray-500" />
                      <Clock size={16} className="hidden md:block text-gray-500" /> Received: {new Date(selectedApplicant.appliedAt?.seconds * 1000).toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedApplicant(null)}
                className="absolute top-6 right-6 md:static w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all border border-white/10 shadow-lg group"
              >
                <X size={20} className="md:hidden" />
                <X size={28} className="hidden md:block group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Dossier Body: Data Architecture */}
            <div className="p-6 md:p-14 space-y-10 md:y-16">
              
              {/* Row 1: Core Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {[
                  { label: 'Primary Contact', val: selectedApplicant.email, icon: Mail },
                  { label: 'Communications', val: selectedApplicant.phone, icon: Phone },
                  { label: 'Credentials', val: selectedApplicant.qualification, icon: GraduationCap },
                  { label: 'Experience Level', val: selectedApplicant.experience, icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="glass rounded-2xl md:rounded-[2rem] p-5 md:p-8 border border-white/5 hover:border-white/10 transition-all bg-white/[0.01]">
                    <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                      <item.icon size={14} className="text-gray-500 md:hidden" />
                      <item.icon size={18} className="text-gray-500 hidden md:block" />
                      <span className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{item.label}</span>
                    </div>
                    <p className="text-white font-black text-base md:text-lg tracking-tight truncate" title={item.val}>{item.val}</p>
                  </div>
                ))}
              </div>

              {/* Row 2: Deep Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
                
                {/* Main Content: Intelligence Analysis */}
                <div className="lg:col-span-8 space-y-10 md:space-y-16">
                  <section>
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                      <div className="w-1 md:w-1.5 h-6 md:h-8 bg-blue-500 rounded-full" />
                      <h4 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase">Mission Statement</h4>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl md:rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-1000" />
                      <div className="relative glass rounded-2xl md:rounded-[2.5rem] p-6 md:p-12 border border-white/10 bg-[#0B1120]/40 leading-relaxed">
                        <p className="text-gray-300 text-base md:text-xl font-medium whitespace-pre-wrap relative z-10 leading-relaxed md:leading-[1.8]">
                          {selectedApplicant.coverLetter}
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                      <div className="w-1 md:w-1.5 h-6 md:h-8 bg-emerald-500 rounded-full" />
                      <h4 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase">Verified Tech Stack</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {selectedApplicant.skills.split(',').map((skill: string, i: number) => (
                        <div key={i} className="px-4 py-2 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-gray-200 font-black text-[9px] md:text-xs uppercase tracking-widest shadow-lg">
                          {skill.trim()}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Sidebar: Tactical Information */}
                <div className="lg:col-span-4 space-y-8 md:space-y-12">
                  <section className="glass rounded-2xl md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 md:mb-8">Asset Validation</h4>
                      <div className="space-y-4 md:space-y-6">
                        <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/5">
                          <p className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1 md:mb-2">Original Institution</p>
                          <p className="text-white font-bold text-base md:text-lg">{selectedApplicant.collegeCompany}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[9px] md:text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6 md:mb-8">External Intel</h4>
                      <div className="grid grid-cols-1 gap-3 md:gap-4">
                        {selectedApplicant.linkedInUrl && (
                          <a href={selectedApplicant.linkedInUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#0A66C2]/5 text-[#0A66C2] border border-[#0A66C2]/20 hover:bg-[#0A66C2]/10 transition-all font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-2 md:gap-3"><Linkedin size={16} /> LinkedIn Profile</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                        {selectedApplicant.portfolioUrl && (
                          <a href={selectedApplicant.portfolioUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 md:p-5 rounded-xl md:rounded-2xl bg-emerald-500/5 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/10 transition-all font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
                            <span className="flex items-center gap-2 md:gap-3"><Globe size={16} /> Portfolio Asset</span>
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </section>

                  {/* Actions Area */}
                  <section className="flex flex-col gap-3 md:gap-5">
                    <a 
                      href={`https://drive.google.com/uc?export=download&id=${selectedApplicant.resumeId}`} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-3 md:gap-4 bg-blue-500 text-white p-5 md:p-6 rounded-xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-blue-600 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
                    >
                      <Download size={18} /> Access Full CV
                    </a>
                    <button 
                      onClick={(e) => {
                        const nextStatusMap: Record<string, string> = { 'New': 'Reviewed', 'Reviewed': 'Shortlisted', 'Shortlisted': 'Rejected', 'Rejected': 'New' };
                        handleStatusChange(e as any, selectedApplicant.id, nextStatusMap[selectedApplicant.status] || 'New');
                      }}
                      className="w-full flex items-center justify-center gap-3 md:gap-4 bg-white/5 text-white p-5 md:p-6 rounded-xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-white/10 transition-all border border-white/10"
                    >
                      <CheckCircle2 size={18} /> Advance Status
                    </button>
                    <button 
                      onClick={(e) => handleDelete(e, selectedApplicant.id)}
                      className="w-full flex items-center justify-center gap-3 md:gap-4 bg-red-500/5 text-red-400 p-5 md:p-6 rounded-xl md:rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-red-500/10 transition-all border border-red-500/10"
                    >
                      <Trash2 size={18} /> Terminate Record
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
