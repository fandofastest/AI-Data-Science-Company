import { Star } from "lucide-react";
import { motion } from "motion/react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
}

export function Testimonial({ quote, author, role, company, rating = 5 }: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Rating */}
      {rating && (
        <div className="flex space-x-1 mb-4">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-gray-700 leading-relaxed mb-4">
        "{quote}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{author}</div>
          <div className="text-xs text-gray-600">
            {role} at {company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
