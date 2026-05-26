import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { 
  ArrowLeft, 
  CloudUpload, 
  Loader2, 
  Zap, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ShieldCheck,
  CreditCard,
  ArrowRight
} from "lucide-react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  college: yup.string().required("College Name is required"),
  qualification: yup.string().required("Highest Qualification is required"),
  skills: yup.string().required("Core Skills are required"),
  coverLetter: yup.string().required("Statement of Interest is required"),
});

const InternshipApplication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF and Word documents are allowed");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      setResumeFile(file);
    }
  };

  const onSubmit = async (data: any) => {
    if (!resumeFile) {
      toast.error("Please upload your resume");
      return;
    }

    setLoading(true);
    try {
      // Create a FormData to upload to the local API
      const formData = new FormData();
      formData.append("resume", resumeFile);

      const uploadResponse = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) throw new Error("Upload failed");
      const { fileId } = await uploadResponse.json();

      // Save to Firestore
      await addDoc(collection(db, "internship_applications"), {
        ...data,
        resumeId: fileId,
        type: 'Internship Training',
        appliedAt: serverTimestamp(),
        status: "New",
      });

      toast.success("Strategic Mission Initiated!");
      navigate("/careers");
    } catch (error) {
      console.error(error);
      toast.error("Deployment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      <div className="container-custom max-w-6xl">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-400 transition-colors mb-8 md:mb-12 font-black text-[10px] uppercase tracking-widest group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Strategic Advertisement Section */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 border-2 border-blue-500/30 relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.15)]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] -mr-20 -mt-20" />
              
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <Zap size={12} className="text-blue-400 md:hidden" />
                  <Zap size={14} className="text-blue-400 hidden md:block" />
                  <span className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-widest">Early Bird Mission</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight">
                  Elite Internship <span className="gradient-text">Training</span>
                </h2>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
                    <span className="text-gray-500 line-through text-xl md:text-2xl font-bold">₹4,999</span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter italic">₹3,500</span>
                    <span className="text-blue-400 font-black text-xs md:text-sm uppercase tracking-widest">+ GST</span>
                  </div>
                  
                  <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest">Secure Price</span>
                    <span className="text-emerald-400 font-black text-lg md:text-2xl tracking-tighter">₹4,130</span>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3 md:gap-4 text-amber-400 bg-amber-400/5 p-4 rounded-2xl border border-amber-400/20">
                    <Clock size={18} className="flex-shrink-0 md:hidden" />
                    <Clock size={22} className="flex-shrink-0 hidden md:block" />
                    <div>
                      <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-60 mb-0.5">Deadline Countdown</p>
                      <p className="text-xs md:text-sm font-bold">May 15, 2026</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 md:gap-4 text-blue-400 bg-blue-500/5 p-4 rounded-2xl border border-blue-500/10">
                    <AlertCircle size={18} className="flex-shrink-0 md:hidden" />
                    <AlertCircle size={22} className="flex-shrink-0 hidden md:block" />
                    <p className="text-[10px] md:text-xs font-medium leading-relaxed">Secure your deployment target today. Limited slots for the elite program.</p>
                  </div>
                </div>

                <div className="pt-6 md:pt-8 border-t border-white/10 grid grid-cols-2 gap-3 md:gap-4">
                  {[
                    'Live Projects',
                    'Certification',
                    'Mentorship',
                    'Placements'
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 md:gap-3">
                      <CheckCircle2 size={14} className="text-emerald-400 md:hidden" />
                      <CheckCircle2 size={16} className="text-emerald-400 hidden md:block" />
                      <span className="text-[8px] md:text-[9px] font-black text-gray-400 uppercase tracking-widest">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-white/10 flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400 shrink-0">
                <ShieldCheck size={24} className="md:hidden" />
                <ShieldCheck size={32} className="hidden md:block" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-[10px] md:text-xs mb-1">Guaranteed Quality</h4>
                <p className="text-gray-500 text-[9px] md:text-[10px] font-medium leading-relaxed">Training by senior architects with 10+ years of global experience.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Deployment Form */}
          <div className="lg:col-span-7">
            <div className="glass rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-14 border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[80px] -mr-16 -mt-16" />
              
              <div className="mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-2">Registration</h3>
                <p className="text-sm md:text-base text-gray-400 font-medium">Provide your tactical details for recruitment.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      {...register("fullName")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                      placeholder="e.g. John Doe"
                    />
                    {errors.fullName && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.fullName.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Identity</label>
                    <input 
                      {...register("email")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                      placeholder="e.g. name@mission.com"
                    />
                    {errors.email && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.email.message as string}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Phone Link</label>
                    <input 
                      {...register("phone")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.phone.message as string}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Institution</label>
                    <input 
                      {...register("college")}
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                      placeholder="College / University"
                    />
                    {errors.college && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.college.message as string}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Highest Qualification</label>
                  <input 
                    {...register("qualification")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                    placeholder="e.g. B.Tech Computer Science"
                  />
                  {errors.qualification && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.qualification.message as string}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Core Tech Stack</label>
                  <input 
                    {...register("skills")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base"
                    placeholder="e.g. Java, Python, React"
                  />
                  {errors.skills && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.skills.message as string}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Statement of Interest</label>
                  <textarea 
                    {...register("coverLetter")}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 text-white focus:border-blue-500/50 outline-none transition-all text-sm md:text-base resize-none"
                    placeholder="Why join this mission?"
                  />
                  {errors.coverLetter && <p className="text-red-400 text-[10px] font-black uppercase ml-1 mt-1">{errors.coverLetter.message as string}</p>}
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest text-center block mb-4">Resume / Academic CV</label>
                  <div className="relative group border-2 border-dashed border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-center hover:border-blue-500/30 transition-all cursor-pointer bg-white/[0.01]">
                    <input 
                      type="file" 
                      onChange={onFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="relative z-0 space-y-3 md:space-y-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto border border-blue-500/20 group-hover:scale-110 transition-transform">
                        <CloudUpload className="text-blue-400" size={24} />
                      </div>
                      <div className="px-2">
                        <p className="text-white font-bold text-xs md:text-sm truncate">{resumeFile ? resumeFile.name : "Select Asset"}</p>
                        <p className="text-gray-500 text-[8px] md:text-[10px] font-black uppercase tracking-widest mt-1 md:mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full btn-primary py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 md:gap-4 group active:scale-[0.98] transition-all text-xs md:text-sm"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : (
                      <>
                        Initiate Enrollment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 md:gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                  <CreditCard size={16} className="md:hidden" />
                  <CreditCard size={20} className="hidden md:block" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">Secure Processing Enabled</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default InternshipApplication;
