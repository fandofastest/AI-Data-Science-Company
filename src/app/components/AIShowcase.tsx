import { motion } from "motion/react";
import { Brain, Cpu, Database, Zap } from "lucide-react";

export function AIShowcase() {
  const nodes = [
    { icon: Brain, label: "AI Engine", x: 50, y: 20, color: "from-blue-500 to-indigo-600" },
    { icon: Database, label: "Data Lake", x: 20, y: 60, color: "from-indigo-500 to-purple-600" },
    { icon: Cpu, label: "ML Models", x: 80, y: 60, color: "from-purple-500 to-pink-600" },
    { icon: Zap, label: "Analytics", x: 50, y: 80, color: "from-cyan-500 to-blue-600" },
  ];

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-gray-200 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="50%"
          y1="20%"
          x2="20%"
          y2="60%"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="50%"
          y1="20%"
          x2="80%"
          y2="60%"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="20%"
          y1="60%"
          x2="50%"
          y2="80%"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="80%"
          y1="60%"
          x2="50%"
          y2="80%"
          stroke="#06b6d4"
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            className={`relative bg-gradient-to-br ${node.color} p-4 rounded-xl shadow-lg`}
          >
            <node.icon className="w-8 h-8 text-white" />
            <motion.div
              className="absolute inset-0 rounded-xl bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />
          </motion.div>
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
              {node.label}
            </span>
          </div>
        </motion.div>
      ))}

      {/* Pulse Effect */}
      <motion.div
        className="absolute left-1/2 top-1/5 w-32 h-32 rounded-full bg-blue-500/10"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{ scale: [1, 2, 2], opacity: [0.5, 0, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
}
