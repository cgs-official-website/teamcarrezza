import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { ArrowLeft, CloudUpload, Loader2 } from "lucide-react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone Number is required"),
  collegeCompany: yup.string().required("College / Company is required"),
  qualification: yup.string().required("Qualification is required"),
  experience: yup.string().required("Experience is required"),
  applyingRole: yup.string().required("Applying Role is required"),
  skills: yup.string().required("Skills are required"),
  linkedInUrl: yup.string().url("Must be a valid URL").optional(),
  portfolioUrl: yup.string().url("Must be a valid URL").optional(),
  coverLetter: yup.string().required("Cover Letter is required"),
});

const JobApplication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    const roleFromState = location.state?.role;
    if (roleFromState) {
      setValue("applyingRole", roleFromState);
    }
  }, [location.state, setValue]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      if (!allowedTypes.includes(file.type)) {
        toast.error("Only PDF, DOC, and DOCX files are allowed");
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
    const toastId = toast.loading("Submitting application...");

    try {
      if (!db) {
        throw new Error("Firebase is not configured. Please add your credentials to the .env file.");
      }

      // 1. Upload Resume to Google Drive (via API)
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("candidateName", data.fullName);

      const uploadRes = await fetch("/api/upload-resume", {
        method: "POST",
        body: formData,
      });

      if (!uploadRes.ok) {
        const errorData = await uploadRes.json();
        throw new Error(errorData.error || "Failed to upload resume to Google Drive");
      }

      const { fileUrl, fileId } = await uploadRes.json();

      // 2. Save Data to Firestore
      await addDoc(collection(db, "applicants"), {
        ...data,
        resumeUrl: fileUrl,
        resumeId: fileId,
        status: "New",
        appliedAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully!", { id: toastId });
      navigate("/careers");
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Careers
        </button>

        <div className="glass rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
              Submit Your <span className="gradient-text">Mission Application</span>
            </h1>
            <p className="text-gray-400 text-lg">Join our elite units and help architect the future.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Full Name *</label>
                <input
                  {...register("fullName")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email Address *</label>
                <input
                  {...register("email")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Phone Number *</label>
                <input
                  {...register("phone")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="+1 234 567 890"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">College / Company *</label>
                <input
                  {...register("collegeCompany")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="University Name or Current Employer"
                />
                {errors.collegeCompany && <p className="text-red-400 text-xs mt-1">{errors.collegeCompany.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Qualification *</label>
                <input
                  {...register("qualification")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="e.g. B.S. Computer Science"
                />
                {errors.qualification && <p className="text-red-400 text-xs mt-1">{errors.qualification.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Experience *</label>
                <select
                  {...register("experience")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all appearance-none"
                >
                  <option value="" className="bg-[#0B1120]">Select Experience</option>
                  <option value="Fresher" className="bg-[#0B1120]">Fresher</option>
                  <option value="0-1 Year" className="bg-[#0B1120]">0-1 Year</option>
                  <option value="1-3 Years" className="bg-[#0B1120]">1-3 Years</option>
                  <option value="3-5 Years" className="bg-[#0B1120]">3-5 Years</option>
                  <option value="5+ Years" className="bg-[#0B1120]">5+ Years</option>
                </select>
                {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Applying Role *</label>
                <input
                  {...register("applyingRole")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="e.g. Senior Software Engineer"
                />
                {errors.applyingRole && <p className="text-red-400 text-xs mt-1">{errors.applyingRole.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">LinkedIn URL</label>
                <input
                  {...register("linkedInUrl")}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                  placeholder="https://linkedin.com/in/..."
                />
                {errors.linkedInUrl && <p className="text-red-400 text-xs mt-1">{errors.linkedInUrl.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Portfolio URL</label>
              <input
                {...register("portfolioUrl")}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                placeholder="https://yourportfolio.com"
              />
              {errors.portfolioUrl && <p className="text-red-400 text-xs mt-1">{errors.portfolioUrl.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Core Skills *</label>
              <textarea
                {...register("skills")}
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none"
                placeholder="React, TypeScript, Node.js, Cloud Architecture, etc."
              />
              {errors.skills && <p className="text-red-400 text-xs mt-1">{errors.skills.message}</p>}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Cover Letter / Mission Statement *</label>
              <textarea
                {...register("coverLetter")}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none"
                placeholder="Tell us about your mission and why you're a fit for this unit..."
              />
              {errors.coverLetter && <p className="text-red-400 text-xs mt-1">{errors.coverLetter.message}</p>}
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Resume Upload (PDF/DOC/DOCX) *</label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  onChange={onFileChange}
                  hidden
                  accept=".pdf,.doc,.docx"
                />
                <label
                  htmlFor="resume"
                  className="flex flex-col items-center justify-center w-full aspect-video md:aspect-[3/1] bg-white/5 border-2 border-dashed border-white/10 rounded-[2rem] cursor-pointer hover:bg-white/[0.08] hover:border-blue-500/50 transition-all group"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <CloudUpload className="text-blue-400" size={32} />
                    </div>
                    <p className="mb-2 text-lg text-white font-bold tracking-tight">
                      {resumeFile ? resumeFile.name : "Select your Resume"}
                    </p>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">PDF, DOC, or DOCX (Max 10MB)</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-6 text-xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={24} /> Processing Application...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
