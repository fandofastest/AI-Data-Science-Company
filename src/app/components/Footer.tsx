import { Link } from "react-router";
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const solutions = [
    { label: "AI Solutions", path: "/solutions#ai" },
    { label: "Data Engineering", path: "/solutions#data" },
    { label: "Business Intelligence", path: "/solutions#bi" },
    { label: "Automation", path: "/solutions#automation" },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact", path: "/contact" },
  ];

  const legal = [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-none">NeuralEdge</span>
                <span className="text-[10px] text-gray-500 leading-none">AI & Data Science</span>
              </div>
            </Link>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Empowering enterprises with cutting-edge AI solutions, advanced data science services, and intelligent automation systems.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">contact@neuraledge.ai</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © 2026 NeuralEdge AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
