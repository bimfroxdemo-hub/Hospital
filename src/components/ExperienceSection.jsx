import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { number: 5, suffix: "+", label: "Years Experience" },
  { number: 150, suffix: "+", label: "Projects Completed" },
  { number: 100, suffix: "+", label: "Happy Clients" },
  { number: 24, suffix: "/7", label: "Support" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
      {count}
      {suffix}
    </h3>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-cyan-50 to-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our Experience & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-20"
        >
          We deliver reliable, innovative, and high-quality solutions with
          complete customer satisfaction.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-10">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-xl border border-gray-200 group-hover:border-transparent rounded-3xl p-10 transition duration-500 shadow-md">

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute -top-10 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12 translate-x-0 group-hover:translate-x-full transition duration-1000"></div>
                </div>

                {/* Counter */}
                <Counter value={item.number} suffix={item.suffix} />

                <p className="text-gray-600 mt-2">
                  {item.label}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;