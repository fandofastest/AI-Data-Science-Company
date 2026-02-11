import { motion } from "motion/react";

export function Privacy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information that you provide directly to us, including when you create an account, 
      use our services, communicate with us, or participate in any interactive features. This may include 
      your name, email address, company information, and usage data.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to provide, maintain, and improve our services, to process 
      transactions, to send you technical notices and support messages, and to communicate with you about 
      products, services, and events.`,
    },
    {
      title: "3. Data Security",
      content: `We implement appropriate technical and organizational measures to protect the security of your 
      personal information. We are SOC 2 Type II certified and maintain industry-leading security standards 
      including encryption at rest and in transit, regular security audits, and access controls.`,
    },
    {
      title: "4. Data Retention",
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined 
      in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no 
      longer need your information, we will securely delete or anonymize it.`,
    },
    {
      title: "5. Data Sharing and Disclosure",
      content: `We do not sell your personal information. We may share your information with service providers 
      who perform services on our behalf, with your consent, to comply with legal obligations, or to protect 
      our rights and the rights of others.`,
    },
    {
      title: "6. Your Rights and Choices",
      content: `You have the right to access, update, or delete your personal information. You may also have 
      the right to object to or restrict certain processing of your information. To exercise these rights, 
      please contact us at privacy@neuraledge.ai.`,
    },
    {
      title: "7. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of 
      residence. We ensure appropriate safeguards are in place for such transfers, including Standard 
      Contractual Clauses approved by the European Commission.`,
    },
    {
      title: "8. GDPR Compliance",
      content: `If you are located in the European Economic Area (EEA), you have certain rights under the 
      General Data Protection Regulation (GDPR). We are committed to complying with GDPR requirements and 
      protecting your personal data in accordance with applicable data protection laws.`,
    },
    {
      title: "9. Cookies and Tracking",
      content: `We use cookies and similar tracking technologies to collect information about your browsing 
      activities. You can control cookies through your browser settings. Some features of our services may 
      not function properly if you disable cookies.`,
    },
    {
      title: "10. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect 
      personal information from children under 16. If we learn that we have collected personal information 
      from a child under 16, we will take steps to delete such information.`,
    },
    {
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes 
      by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use 
      of our services after such changes constitutes your acceptance of the updated Privacy Policy.`,
    },
    {
      title: "12. Contact Us",
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us 
      at privacy@neuraledge.ai or write to us at NeuralEdge AI, 123 Innovation Drive, San Francisco, CA 94105.`,
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
              Privacy Policy
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
                NeuralEdge AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our services, including our websites, platforms, and applications (collectively, the "Services").
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By using our Services, you agree to the collection and use of information in accordance with 
                this Privacy Policy. If you do not agree with our policies and practices, please do not use 
                our Services.
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

            {/* Compliance Badges */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-4">Certifications & Compliance</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">SOC 2</div>
                    <div className="text-xs text-gray-600">Type II Certified</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">GDPR</div>
                    <div className="text-xs text-gray-600">Fully Compliant</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
                    <div className="text-2xl font-bold text-purple-600 mb-1">ISO 27001</div>
                    <div className="text-xs text-gray-600">Certified</div>
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
