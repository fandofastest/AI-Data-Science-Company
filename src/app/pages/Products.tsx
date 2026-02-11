import { DataPanel } from "../components/DataPanel";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import {
  BarChart3,
  Brain,
  ShoppingCart,
  Eye,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export function Products() {
  const products = [
    {
      name: "NeuralPredict",
      tagline: "Predictive Analytics Platform",
      description: "Enterprise-grade forecasting and predictive analytics powered by advanced machine learning models. Predict demand, identify trends, and make data-driven decisions with confidence.",
      icon: BarChart3,
      gradient: "from-blue-500 to-indigo-600",
      capabilities: [
        "Time series forecasting",
        "Demand prediction",
        "Anomaly detection",
        "Risk assessment",
      ],
      integrations: ["Salesforce", "SAP", "Oracle", "Custom APIs"],
      deployment: ["Cloud", "On-Premise", "Hybrid"],
      accuracy: "99.2%",
    },
    {
      name: "DataFlow AI",
      tagline: "Intelligent Data Pipeline Platform",
      description: "Automated data engineering platform that streamlines ETL processes, data quality management, and real-time data synchronization across your enterprise.",
      icon: Database,
      gradient: "from-indigo-500 to-purple-600",
      capabilities: [
        "Visual pipeline builder",
        "Real-time streaming",
        "Data quality checks",
        "Auto-scaling infrastructure",
      ],
      integrations: ["AWS", "Azure", "GCP", "Snowflake"],
      deployment: ["Cloud", "Multi-Cloud"],
      accuracy: "99.9%",
    },
    {
      name: "SmartPOS Pro",
      tagline: "AI-Powered Point of Sale",
      description: "Next-generation POS system with built-in AI analytics, inventory management, and customer insights. Real-time dashboards for multi-location retail operations.",
      icon: ShoppingCart,
      gradient: "from-cyan-500 to-blue-600",
      capabilities: [
        "Real-time sales analytics",
        "Smart inventory management",
        "Customer behavior tracking",
        "Multi-store synchronization",
      ],
      integrations: ["Stripe", "Square", "QuickBooks", "Shopify"],
      deployment: ["Cloud", "On-Premise"],
      accuracy: "100%",
    },
    {
      name: "VisionAI Suite",
      tagline: "Computer Vision Platform",
      description: "Comprehensive computer vision platform for object detection, image classification, quality control, and visual intelligence applications.",
      icon: Eye,
      gradient: "from-purple-500 to-pink-600",
      capabilities: [
        "Object detection & tracking",
        "Facial recognition",
        "OCR & document processing",
        "Quality inspection",
      ],
      integrations: ["Camera Systems", "Edge Devices", "Cloud Storage"],
      deployment: ["Cloud", "Edge", "Hybrid"],
      accuracy: "98.7%",
    },
    {
      name: "CloudBrain",
      tagline: "Enterprise ML Platform",
      description: "End-to-end machine learning platform for training, deploying, and managing custom AI models at scale. MLOps capabilities built-in.",
      icon: Brain,
      gradient: "from-green-500 to-teal-600",
      capabilities: [
        "AutoML capabilities",
        "Model versioning",
        "A/B testing",
        "Production monitoring",
      ],
      integrations: ["TensorFlow", "PyTorch", "Kubernetes", "Docker"],
      deployment: ["Cloud", "On-Premise", "Hybrid"],
      accuracy: "Custom",
    },
    {
      name: "InsightHub",
      tagline: "Business Intelligence Dashboard",
      description: "Interactive BI platform with drag-and-drop dashboard builder, real-time analytics, and embedded AI insights for every metric.",
      icon: Zap,
      gradient: "from-orange-500 to-red-600",
      capabilities: [
        "Drag-and-drop builder",
        "Real-time updates",
        "AI-powered insights",
        "Custom alerts",
      ],
      integrations: ["SQL Databases", "REST APIs", "Excel", "Google Sheets"],
      deployment: ["Cloud", "On-Premise"],
      accuracy: "100%",
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
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              Production-ready AI platforms designed for enterprise-scale deployments
            </p>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600" asChild>
              <Link to="/contact">
                Request Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <DataPanel
                  title={product.name}
                  subtitle={product.tagline}
                  action={
                    <Badge variant="secondary" className="text-xs">
                      {product.accuracy} Accuracy
                    </Badge>
                  }
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left - Icon & Description */}
                    <div className="lg:col-span-2 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${product.gradient}`}>
                          <product.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        </div>
                      </div>

                      {/* Capabilities */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
                          Key Capabilities
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {product.capabilities.map((capability, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="space-y-6">
                      {/* Integrations */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Integrations</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.integrations.map((integration, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {integration}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Deployment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Deployment Options</h4>
                        <div className="space-y-2">
                          {product.deployment.map((option, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              {option === "Cloud" && <Cloud className="w-4 h-4 text-blue-600" />}
                              {option === "On-Premise" && <Server className="w-4 h-4 text-indigo-600" />}
                              {(option === "Hybrid" || option === "Multi-Cloud" || option === "Edge") && (
                                <Zap className="w-4 h-4 text-purple-600" />
                              )}
                              <span className="text-sm text-gray-600">{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <Button className="w-full" variant="outline" asChild>
                          <Link to="/contact">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DataPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All Products Include
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise features standard across our entire product suite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SOC 2 Compliant", description: "Enterprise security" },
              { icon: Cloud, title: "99.99% Uptime", description: "High availability" },
              { icon: Zap, title: "Real-time Processing", description: "Live data streams" },
              { icon: Server, title: "Scalable Infrastructure", description: "Auto-scaling" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
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
              See Our Products in Action
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a personalized demo with our product specialists
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const Shield = Server;
