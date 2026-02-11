import { Target, Eye, Lightbulb, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";
import { motion } from "motion/react";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of AI and data science to deliver cutting-edge solutions that stay ahead of industry trends.",
    },
    {
      icon: Target,
      title: "Accuracy & Precision",
      description: "Our models achieve industry-leading accuracy rates, ensuring reliable insights for critical business decisions.",
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security with SOC 2 Type II certification and full GDPR compliance across all services.",
    },
    {
      icon: Zap,
      title: "Scalability",
      description: "Infrastructure designed to scale from startup to enterprise, handling millions of transactions seamlessly.",
    },
  ];

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to democratize AI for enterprises" },
    { year: "2020", title: "Series A Funding", description: "$15M raised to expand AI research team" },
    { year: "2022", title: "500+ Enterprise Clients", description: "Achieved major milestone in customer success" },
    { year: "2024", title: "Global Expansion", description: "Operating in 45 countries worldwide" },
    { year: "2026", title: "AI Innovation Leader", description: "Recognized as top 10 AI solution provider" },
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NeuralEdge
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Leading the future of enterprise AI with innovative solutions that transform 
              how businesses leverage data and artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Innovation Meets Intelligence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2018, NeuralEdge emerged from a simple yet powerful vision: to make 
                  enterprise-grade artificial intelligence accessible and actionable for businesses 
                  of all sizes.
                </p>
                <p>
                  Our team of world-class data scientists, ML engineers, and AI researchers have 
                  built solutions that process over 10 million data points daily, serving 500+ 
                  enterprise clients across 45 countries.
                </p>
                <p>
                  From predictive analytics to intelligent automation, we've pioneered solutions 
                  that don't just analyze data—they transform how businesses operate, compete, 
                  and grow in the age of AI.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">200+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Award className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">50+</div>
                    <div className="text-sm text-gray-600">AI Patents</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">99.8%</div>
                    <div className="text-sm text-gray-600">Model Accuracy</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
                    <Shield className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">100%</div>
                    <div className="text-sm text-gray-600">SOC 2 Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower enterprises with intelligent, data-driven solutions that unlock 
                unprecedented insights and drive measurable business outcomes. We believe every 
                organization deserves access to world-class AI technology that's secure, scalable, 
                and tailored to their unique needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global leader in AI-powered business transformation, setting the standard 
                for innovation, accuracy, and enterprise trust. We envision a future where every 
                business decision is informed by intelligent systems that learn, adapt, and 
                optimize continuously.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard {...value} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2 font-mono">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join Our Innovation Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of the AI revolution that's transforming enterprise technology
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
