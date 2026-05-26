import { PageHeader } from '../components/ui/Section'

export default function Privacy() {
  return (
    <div>
      <PageHeader badge="Legal" title="Privacy" highlight="Policy" description="Last updated: May 1, 2025" />
      <section className="section-padding bg-[#0B1120]">
        <div className="container-custom max-w-4xl">
          <div className="glass rounded-[3rem] p-12 md:p-20 border border-white/8 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32" />
            <div className="space-y-16 text-gray-400 leading-relaxed font-medium relative z-10">
              {[
                { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This includes name, email address, company name, phone number, and project details. We also automatically collect certain information when you visit our website, including IP address, browser type, pages viewed, and time spent on pages.' },
                { title: '2. How We Use Your Information', content: 'We use the information we collect to provide, maintain, and improve our services; respond to your inquiries and fulfill your requests; send administrative and promotional communications (with your consent); analyze usage patterns to improve user experience; comply with legal obligations; and protect against fraudulent or illegal activity.' },
                { title: '3. Data Sharing and Disclosure', content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and business, provided they agree to maintain confidentiality. We may disclose information when required by law or to protect our rights and safety.' },
                { title: '4. Data Security', content: 'We implement industry-standard security measures including SSL/TLS encryption, access controls, regular security audits, and employee training to protect your personal information. We are ISO 27001 certified and maintain SOC 2 Type II compliance.' },
                { title: '5. Data Retention', content: 'We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce agreements. You may request deletion of your data at any time by contacting us.' },
                { title: '6. Your Rights', content: 'Depending on your location, you may have rights including: access to your personal data, correction of inaccurate data, deletion of your data, portability of your data, objection to processing, and withdrawal of consent. To exercise these rights, contact privacy@carrezzaglobal.com.' },
                { title: '7. Cookies', content: 'We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Essential cookies cannot be disabled as they are necessary for the website to function.' },
                { title: '8. Contact Us', content: 'If you have questions about this Privacy Policy, please contact our Data Protection Officer at privacy@carrezzaglobal.com or write to us at Carrezza Global Solutions, 123 Business Avenue, New York, NY 10001, USA.' },
              ].map(({ title, content }) => (
                <div key={title} className="group">
                  <h3 className="text-white font-black text-2xl mb-6 tracking-tighter group-hover:text-blue-400 transition-colors">{title}</h3>
                  <p className="text-lg md:text-xl leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{content}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-gray-500 font-bold tracking-tight">For any legal inquiries, please contact our global compliance team at <a href="mailto:legal@carrezzaglobal.com" className="text-blue-500 hover:text-blue-400 underline underline-offset-4">legal@carrezzaglobal.com</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
