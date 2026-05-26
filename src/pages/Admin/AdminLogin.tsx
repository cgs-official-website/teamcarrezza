import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Lock, User, Loader2 } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!auth) {
        throw new Error("Firebase is not configured. Please add your credentials to the .env file.");
      }
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back, Commander!");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Access denied.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -ml-64 -mb-64" />
      
      <div className="max-w-md w-full relative z-10">
        <div className="glass rounded-[3rem] p-12 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 shadow-inner border border-blue-500/20">
              <Lock className="text-blue-400" size={32} />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tighter mb-2">Admin <span className="gradient-text">Terminal</span></h1>
            <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em]">Authorized Access Only</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Identity Key</label>
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email" 
                  placeholder="Admin Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Security Token</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 py-4 text-white focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full btn-primary py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Loading..." : "Initiate Session"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
