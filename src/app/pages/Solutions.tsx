import { SolutionCard } from "../components/SolutionCard";
import { DataPanel } from "../components/DataPanel";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import {
  Brain,
  BarChart3,
  Database,
  Eye,
  Zap,
  Cloud,
  ShoppingCart,
  TrendingUp,
  Cpu,
  Network,
  GitBranch,
  Server,
  LineChart,
  PieChart,
  Activity,
  Bell,
  Cog,
  ArrowRight,
} from "lucide-react";
import { motion } from "motion/react";

export function Solutions() {
  const aiSolutions = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Custom ML models trained on your data for predictive analytics, classification, and regression tasks.",
      features: [
        "Supervised & Unsupervised Learning",
        "Deep Learning Models",
        "Transfer Learning",
        "AutoML Capabilities",
      ],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends, demand patterns, and business outcomes with high-accuracy prediction models.",
      features: [
        "Time Series Forecasting",
        "Demand Prediction",
        "Churn Analysis",
        "Risk Assessment",
      ],
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced image and video analysis for quality control, security, and visual intelligence.",
      features: [
        "Object Detection",
        "Image Classification",
        "Facial Recognition",
        "OCR & Document Processing",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Cpu,
      title: "NLP Systems",
      description: "Natural language processing for sentiment analysis, chatbots, and text intelligence.",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Named Entity Recognition",
        "Language Translation",
      ],
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const dataSolutions = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and ETL processes for seamless data flow and transformation.",
      features: [
        "ETL Pipeline Design",
        "Data Quality Management",
        "Real-time Streaming",
        "Data Integration",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Server,
      title: "Data Warehousing",
      description: "Enterprise-scale data storage solutions optimized for analytics and business intelligence.",
      features: [
        "Cloud Data Warehouse",
        "Data Lake Architecture",
        "Schema Design",
        "Performance Optimization",
      ],
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      icon: LineChart,
      title: "Business Intelligence Dashboards",
      description: "Interactive dashboards and visualizations for real-time business insights.",
      features: [
        "Custom Dashboard Design",
        "Real-time Analytics",
        "KPI Tracking",
        "Self-Service BI",
      ],
      gradient: "from-indigo-600 to-purple-700",
    },
    {
      icon: GitBranch,
      title: "Data Pipeline Systems",
      description: "Automated data workflows for efficient data processing and distribution.",
      features: [
        "Workflow Orchestration",
        "Data Versioning",
        "Automated Testing",
        "Monitoring & Alerts",
      ],
      gradient: "from-purple-600 to-pink-700",
    },
  ];

  const softwareSolutions = [
    {
      icon: ShoppingCart,
      title: "Smart POS Systems",
      description: "Next-generation point-of-sale with AI-powered analytics and inventory management.",
      features: [
        "Real-time Sales Analytics",
        "Inventory Tracking",
        "Customer Insights",
        "Multi-location Support",
      ],
      gradient: "from-cyan-600 to-blue-700",
    },
    {
      icon: Activity,
      title: "Monitoring Platforms",
      description: "Comprehensive monitoring solutions for system health, performance, and business metrics.",
      features: [
        "Real-time Monitoring",
        "Anomaly Detection",
        "Custom Alerts",
        "Performance Dashboards",
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: Zap,
      title: "Business Automation Software",
      description: "Intelligent automation for repetitive tasks, workflows, and business processes.",
      features: [
        "Process Automation",
        "Workflow Engine",
        "Integration APIs",
        "Custom Rule Builder",
      ],
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const capabilities = [
    { icon: Cloud, title: "Cloud Native", description: "Built for AWS, Azure, and GCP" },
    { icon: Network, title: "API First", description: "RESTful and GraphQL APIs" },
    { icon: Cog, title: "Customizable", description: "Tailored to your needs" },
    { icon: Bell, title: "Real-time", description: "Live data processing" },
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
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive suite of AI, data science, and intelligent automation solutions 
              designed for enterprise-scale challenges
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
              <Link to="/contact">
                Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="ai" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              AI Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Advanced machine learning and artificial intelligence services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Solutions */}
      <section id="data" className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Data Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Enterprise data engineering, warehousing, and business intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions */}
      <section id="automation" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Intelligent business software and automation platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softwareSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <SolutionCard {...solution} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on modern infrastructure and best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-4">
                  <capability.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{capability.title}</h4>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DataPanel
            title="Seamless Integration"
            subtitle="Connect with your existing tech stack"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Data Sources</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    SQL & NoSQL Databases
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    Cloud Storage (S3, Azure Blob)
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    APIs & Webhooks
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    Streaming Data (Kafka, Kinesis)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">BI Tools</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    Tableau
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    Power BI
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    Looker
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2" />
                    Metabase
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Cloud Platforms</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    AWS
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    Azure
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    Google Cloud
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                    On-Premise
                  </li>
                </ul>
              </div>
            </div>
          </DataPanel>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our solutions can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Talk to Sales <ArrowRight className="ml-2 w-5 h-5" />
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
