import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { SolutionCard } from "../components/SolutionCard";
import { KPICard } from "../components/KPICard";
import { FeatureCard } from "../components/FeatureCard";
import { IndustryCard } from "../components/IndustryCard";
import { AIShowcase } from "../components/AIShowcase";
import {
  Brain,
  BarChart3,
  Zap,
  ShoppingCart,
  Code,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Database,
  Cpu,
  Cloud,
  Server,
  Lock,
  Store,
  Building2,
  Plane,
  Landmark,
  Briefcase,
} from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const solutions = [
    {
      icon: Brain,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      features: ["Predictive Models", "Real-time Analytics", "Custom AI Training"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with machine learning algorithms.",
      features: ["Demand Forecasting", "Risk Analysis", "Pattern Recognition"],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Streamline operations with intelligent process automation and workflow optimization.",
      features: ["Process Mining", "RPA Integration", "Workflow Engine"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: ShoppingCart,
      title: "Intelligent POS & Retail Analytics",
      description: "Advanced point-of-sale systems with real-time monitoring and business intelligence.",
      features: ["Sales Analytics", "Inventory Tracking", "Customer Insights"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Code,
      title: "Custom AI Model Development",
      description: "Build bespoke machine learning models tailored to your unique business requirements.",
      features: ["Model Training", "API Integration", "Performance Tuning"],
      gradient: "from-green-500 to-teal-600",
    },
  ];

  const technologies = [
    { icon: Database, title: "Big Data Processing", description: "Handle petabytes of data efficiently" },
    { icon: Cpu, title: "Machine Learning", description: "State-of-the-art ML algorithms" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable AWS & Azure deployment" },
    { icon: Server, title: "Data Warehousing", description: "Enterprise-grade data storage" },
    { icon: Lock, title: "Security & Compliance", description: "SOC 2 & GDPR compliant" },
    { icon: Zap, title: "Real-time Processing", description: "Stream processing at scale" },
  ];

  const industries = [
    {
      title: "Retail",
      description: "AI-powered inventory, sales forecasting, and customer behavior analytics.",
      icon: <Store className="w-8 h-8 text-blue-600" />,
      stats: [
        { label: "Revenue Growth", value: "+32%" },
        { label: "Efficiency Gain", value: "+45%" },
      ],
    },
    {
      title: "Finance",
      description: "Risk analytics, fraud detection, and algorithmic trading solutions.",
      icon: <Landmark className="w-8 h-8 text-indigo-600" />,
      stats: [
        { label: "Risk Reduction", value: "68%" },
        { label: "Fraud Detection", value: "99.2%" },
      ],
    },
    {
      title: "Logistics",
      description: "Route optimization, predictive maintenance, and supply chain intelligence.",
      icon: <Plane className="w-8 h-8 text-purple-600" />,
      stats: [
        { label: "Cost Savings", value: "41%" },
        { label: "On-Time Delivery", value: "97%" },
      ],
    },
    {
      title: "Government",
      description: "Public service optimization, resource allocation, and policy analytics.",
      icon: <Building2 className="w-8 h-8 text-cyan-600" />,
      stats: [
        { label: "Process Speed", value: "+55%" },
        { label: "Cost Efficiency", value: "38%" },
      ],
    },
  ];

  const stats = [
    { icon: Users, label: "Enterprise Clients", value: "500+", trend: 24, trendLabel: "This quarter" },
    { icon: Globe, label: "Countries Served", value: "45", trend: 12, trendLabel: "Global reach" },
    { icon: TrendingUp, label: "Model Accuracy", value: "99.8%", iconColor: "text-green-600" },
    { icon: Shield, label: "Uptime SLA", value: "99.99%", iconColor: "text-blue-600" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Enterprise Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Intelligent AI
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade artificial intelligence, data science services, and intelligent automation 
                systems that drive measurable business outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                  <Link to="/contact">
                    Request Demo <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/solutions">
                    Explore Solutions
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">SOC 2 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">GDPR Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">99.99% Uptime</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Data Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <KPICard key={index} {...stat} />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 shadow-lg"
              >
                <Brain className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Enterprise Clients" },
              { value: "10M+", label: "Data Points Processed Daily" },
              { value: "99.8%", label: "AI Model Accuracy" },
              { value: "45", label: "Countries Worldwide" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and data science services designed to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge infrastructure and industry-leading AI frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <FeatureCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering specialized AI solutions across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={index} {...industry} />
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ enterprise clients leveraging our AI solutions for measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}