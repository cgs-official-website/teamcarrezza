import { Link } from 'react-router-dom'
import { PageHeader } from '../components/ui/Section'

export default function Terms() {
  return (
    <div>
      <PageHeader badge="Legal" title="Terms &" highlight="Conditions" description="Last updated: May 1, 2025" />
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom max-w-4xl">
          <div className="glass rounded-[3rem] p-12 md:p-20 border border-white/8 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32" />
            <div className="space-y-16 text-gray-400 leading-relaxed font-medium relative z-10">
              {[
                { title: '1. Acceptance of Terms', content: 'By accessing or using the services of Carrezza Global Solutions ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.' },
                { title: '2. Services', content: 'Carrezza Global Solutions provides IT services, BPO services, software development, AI automation, cloud solutions, and related professional services. The specific scope, deliverables, timelines, and pricing for each engagement are detailed in individual Service Agreements or Statements of Work (SOW).' },
                { title: '3. Intellectual Property', content: 'Upon full payment, all custom-developed software, code, designs, and deliverables created specifically for the client become the property of the client. However, Carrezza Global Solutions retains ownership of its proprietary tools, frameworks, methodologies, and pre-existing intellectual property used in delivery.' },
                { title: '4. Confidentiality', content: 'Both parties agree to maintain strict confidentiality of all proprietary information shared during the engagement. This includes business processes, technical specifications, customer data, and financial information. Confidentiality obligations survive termination of the agreement.' },
                { title: '5. Payment Terms', content: 'Payment terms are specified in individual Service Agreements. Generally, fixed-price projects require a 30% deposit upfront with milestone-based payments. Time-and-material engagements are billed bi-weekly or monthly. Late payments incur a 1.5% monthly interest charge.' },
                { title: '6. Limitation of Liability', content: 'Carrezza Global Solutions\' total liability for any claims arising from our services shall not exceed the total fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages.' },
                { title: '7. Termination', content: 'Either party may terminate an engagement with 30 days written notice. Upon termination, the client is responsible for payment of all work completed to date. Carrezza Global Solutions will provide all completed deliverables and assist with a smooth transition.' },
                { title: '8. Governing Law', content: 'These Terms are governed by the laws of the State of New York, USA. Any disputes shall be resolved through binding arbitration under the rules of the American Arbitration Association, unless both parties agree to an alternative dispute resolution method.' },
                { title: '9. Contact', content: 'For questions about these Terms, contact our global compliance team at legal@carrezzaglobal.com.' },
              ].map(({ title, content }) => (
                <div key={title} className="group">
                  <h3 className="text-white font-black text-2xl mb-6 tracking-tighter group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-lg md:text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{content}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-gray-500 font-bold tracking-tight">Looking for our Privacy Policy? <Link to="/privacy" className="text-blue-500 hover:text-blue-400 underline underline-offset-4">View it here</Link></p>
          </div>
        </div>
      </section>
    </div>
  )
}
