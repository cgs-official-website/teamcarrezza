import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ITServices from './pages/ITServices'
import BPOServices from './pages/BPOServices'
import Industries from './pages/Industries'
import Portfolio from './pages/Portfolio'
import Process from './pages/Process'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Products from './pages/Products'
import Careers from './pages/Careers'
import JobDetail from './pages/JobDetail'
import JobApplication from './pages/JobApplication'
import InternshipApplication from './pages/InternshipApplication'
import AdminLogin from './pages/Admin/AdminLogin'
import AdminDashboard from './pages/Admin/AdminDashboard'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B1120] text-[#E5E7EB] font-['Inter',sans-serif]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/it" element={<ITServices />} />
            <Route path="/services/bpo" element={<BPOServices />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/products" element={<Products />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/job/:id" element={<JobDetail />} />
            <Route path="/careers/apply" element={<JobApplication />} />
            <Route path="/internship/apply" element={<InternshipApplication />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1F2937',
              color: '#E5E7EB',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
            },
          }}
        />
      </div>
    </Router>
  )
}

export default App
