import { motion } from "motion/react";

export function Terms() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using NeuralEdge AI's services, you accept and agree to be bound by the terms 
      and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily use NeuralEdge AI's services for personal or commercial use. 
      This is the grant of a license, not a transfer of title, and under this license you may not: modify or 
      copy the materials; use the materials for any commercial purpose without explicit permission; attempt to 
      decompile or reverse engineer any software contained in NeuralEdge AI's services; remove any copyright 
      or other proprietary notations from the materials.`,
    },
    {
      title: "3. Service Description",
      content: `NeuralEdge AI provides enterprise-grade artificial intelligence solutions, data science services, 
      and intelligent automation systems. Our services include but are not limited to machine learning platforms, 
      predictive analytics, data engineering, business intelligence tools, and custom AI model development.`,
    },
    {
      title: "4. User Accounts",
      content: `To access certain features of our services, you must create an account. You are responsible for 
      maintaining the confidentiality of your account credentials and for all activities that occur under your 
      account. You agree to immediately notify us of any unauthorized use of your account.`,
    },
    {
      title: "5. Service Level Agreement",
      content: `We commit to providing 99.99% uptime for our enterprise services. In the event of service 
      interruptions, eligible customers may receive service credits as outlined in their enterprise agreement. 
      Scheduled maintenance windows will be communicated in advance.`,
    },
    {
      title: "6. Data Ownership and Usage",
      content: `You retain all rights to your data. We do not claim ownership of any data you upload or process 
      through our services. We may use aggregated, anonymized data for service improvement and analytics. Your 
      data is encrypted at rest and in transit, and we maintain strict data isolation between customers.`,
    },
    {
      title: "7. Intellectual Property",
      content: `All intellectual property rights in our services, including software, algorithms, models, and 
      documentation, remain the property of NeuralEdge AI. Custom models developed specifically for your 
      organization remain your property, as outlined in your enterprise agreement.`,
    },
    {
      title: "8. Payment Terms",
      content: `Enterprise customers will be billed according to their subscription agreement. Payment is due 
      within 30 days of invoice date unless otherwise specified. Late payments may result in service suspension. 
      We reserve the right to modify pricing with 60 days notice to existing customers.`,
    },
    {
      title: "9. Prohibited Uses",
      content: `You may not use our services to: violate any applicable laws or regulations; infringe on 
      intellectual property rights; transmit malicious code or viruses; attempt to gain unauthorized access; 
      interfere with service operation; use services for illegal surveillance or privacy violations; develop 
      competing AI services using our infrastructure.`,
    },
    {
      title: "10. Warranties and Disclaimers",
      content: `Our services are provided "as is" without warranties of any kind, either express or implied. 
      We do not warrant that our services will be uninterrupted, secure, or error-free. For enterprise customers, 
      specific warranties may be provided in your service agreement.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `To the maximum extent permitted by law, NeuralEdge AI shall not be liable for any indirect, 
      incidental, special, consequential, or punitive damages, including loss of profits, data, or other 
      intangible losses. Our total liability shall not exceed the amount paid by you for the services in the 
      12 months preceding the claim.`,
    },
    {
      title: "12. Indemnification",
      content: `You agree to indemnify and hold harmless NeuralEdge AI and its affiliates from any claims, 
      damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, 
      your violation of these terms, or your violation of any rights of another party.`,
    },
    {
      title: "13. Data Security and Compliance",
      content: `We maintain SOC 2 Type II certification and comply with GDPR, CCPA, and other applicable data 
      protection regulations. We implement industry-standard security measures including encryption, access 
      controls, regular security audits, and incident response procedures.`,
    },
    {
      title: "14. Service Modifications",
      content: `We reserve the right to modify or discontinue our services at any time with reasonable notice. 
      Major changes to enterprise services will be communicated at least 90 days in advance. We will provide 
      migration assistance for discontinued services.`,
    },
    {
      title: "15. Termination",
      content: `Either party may terminate the service agreement with 30 days written notice. We may suspend 
      or terminate services immediately for violation of these terms, non-payment, or illegal activities. Upon 
      termination, you will have 30 days to export your data before it is permanently deleted.`,
    },
    {
      title: "16. Export Compliance",
      content: `Our services and technology may be subject to export control laws and regulations. You agree 
      to comply with all applicable export laws and regulations, including those of the United States and your 
      local jurisdiction.`,
    },
    {
      title: "17. Governing Law",
      content: `These terms shall be governed by and construed in accordance with the laws of the State of 
      California, United States, without regard to its conflict of law provisions. Any disputes shall be 
      resolved in the courts of San Francisco County, California.`,
    },
    {
      title: "18. Changes to Terms",
      content: `We reserve the right to modify these terms at any time. Material changes will be communicated 
      via email and posted on our website. Continued use of services after changes constitutes acceptance of 
      the modified terms.`,
    },
    {
      title: "19. Contact Information",
      content: `For questions about these Terms of Service, please contact us at legal@neuraledge.ai or write 
      to us at NeuralEdge AI, 123 Innovation Drive, San Francisco, CA 94105, United States.`,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Last Updated: February 11, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12 pb-8 border-b border-gray-200">
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of NeuralEdge AI's services, 
                websites, and applications. Please read these Terms carefully before using our services.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. 
                If you do not agree to these Terms, you may not access or use our services.
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Service Level Commitment */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-4">Service Level Commitments</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">99.99%</div>
                    <div className="text-xs text-gray-600">Uptime SLA</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Enterprise Support</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">&lt; 1hr</div>
                    <div className="text-xs text-gray-600">Critical Response</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
