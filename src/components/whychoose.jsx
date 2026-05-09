import {
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Clock,
  Activity,
  Brain,
} from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-cyan-50 to-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full animate-pulse" />

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          Trusted healthcare with modern innovation
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            icon: <ShieldCheck />,
            title: "Safe & Trusted",
            desc: "International safety standards and verified care system.",
          },
          {
            icon: <Stethoscope />,
            title: "Expert Doctors",
            desc: "Highly experienced specialists across all departments.",
          },
          {
            icon: <HeartPulse />,
            title: "Modern Care",
            desc: "Advanced medical technology for better treatment.",
          },
          {
            icon: <Clock />,
            title: "24/7 Support",
            desc: "Emergency support available anytime you need.",
          },
          {
            icon: <Activity />,
            title: "Fast Diagnosis",
            desc: "Quick, accurate reports and testing facilities.",
          },
          {
            icon: <Brain />,
            title: "Smart AI System",
            desc: "AI-powered healthcare for smarter decisions.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="group relative p-7 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
          >

            {/* HOVER GLOW BACKGROUND */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-2xl" />
            </div>

            {/* ICON */}
            <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition duration-300 shadow-md">
              {f.icon}
            </div>

            {/* TITLE */}
            <h3 className="relative text-xl font-bold mt-5 group-hover:text-cyan-600 transition">
              {f.title}
            </h3>

            {/* DESC */}
            <p className="relative text-gray-600 text-sm mt-2 leading-relaxed">
              {f.desc}
            </p>

            {/* BOTTOM LINE EFFECT */}
            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-cyan-500 group-hover:w-full transition-all duration-500"></div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChoose;