import {
  HeartPulse,
  Brain,
  Stethoscope,
  Ambulance,
  ShieldPlus,
  Microscope,
  CheckCircle2,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";

/* IMAGES */
import bloodpressure from "../assets/heroimg/Blood-Pressure.jpg";
import healthcheckup from "../assets/heroimg/Health-Checkup.jpg";
import labtestservices from "../assets/heroimg/Lab-Test-Services.jpg";
import firstaid from "../assets/heroimg/FirstAid.jpg";
import doctor from "../assets/heroimg/doctor.jpg";
import Prescription from "../assets/heroimg/Prescription&Medication.jpg";

/* DATA */
const services = [
  {
    id: "blood",
    img: bloodpressure,
    icon: <HeartPulse />,
    title: "Blood Pressure Care",
    desc: "Monitor and manage BP with precision.",
    points: ["BP Monitoring", "Risk Analysis", "Doctor Support", "Medication Plan"],
  },
  {
    id: "checkup",
    img: healthcheckup,
    icon: <Stethoscope />,
    title: "Health Checkup",
    desc: "Full body preventive screening.",
    points: ["Full Screening", "Blood Test", "Reports", "Prevention"],
  },
  {
    id: "lab",
    img: labtestservices,
    icon: <Microscope />,
    title: "Lab Testing",
    desc: "Fast & accurate diagnostics.",
    points: ["Fast Reports", "High Accuracy", "Modern Lab", "Home Sample"],
  },
  {
    id: "firstaid",
    img: firstaid,
    icon: <Ambulance />,
    title: "Emergency First Aid",
    desc: "Immediate medical assistance.",
    points: ["24/7 Help", "Fast Response", "Basic Treatment", "Emergency Care"],
  },
  {
    id: "doctor",
    img: doctor,
    icon: <ShieldPlus />,
    title: "Doctor Consultation",
    desc: "Expert medical advice anytime.",
    points: ["Expert Doctors", "Online/Offline", "Quick Advice", "Follow-up"],
  },
  {
    id: "prescription",
    img: Prescription,
    icon: <Brain />,
    title: "Prescription Care",
    desc: "Safe medication guidance.",
    points: ["Safe Medication", "Doctor Review", "Guidance", "Follow-up"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  const [direction, setDirection] = useState("90deg");

  return (
    <div className="bg-gradient-to-b from-white via-cyan-50 to-white text-gray-800">

      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold">
          Premium <span className="text-cyan-600">Healthcare Services</span>
        </h1>
        <p className="text-gray-500 mt-3">
          Interactive modern medical experience
        </p>
      </section>

      {/* GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 pb-40 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {services.map((s) => (
          <motion.div
            key={s.id}
            variants={item}
            whileHover={{ y: -12, scale: 1.03 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;

              // LEFT or RIGHT direction detection
              if (x < rect.width / 2) {
                setDirection("90deg"); // left → right
              } else {
                setDirection("270deg"); // right → left
              }
            }}
            className="group relative rounded-3xl overflow-hidden border border-cyan-100 shadow-md hover:shadow-2xl transition-all duration-500"
          >

            {/* 🔥 SIDE FILL EFFECT */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                background: `linear-gradient(${direction}, rgba(34,211,238,0.45), rgba(34,211,238,0.15), transparent 80%)`,
              }}
            />

            {/* BASE BG */}
            <div className="absolute inset-0 bg-white group-hover:bg-gradient-to-br group-hover:from-cyan-50 group-hover:to-cyan-200 transition-all duration-700" />

            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={s.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* ✨ GLASS ICON */}
            <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center rounded-2xl 
bg-white/20 backdrop-blur-md border border-white/40 
text-cyan-600 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
group-hover:scale-110 group-hover:bg-cyan-100/40 transition-all duration-500">
              {s.icon}
            </div>

            {/* CONTENT */}
            <div className="p-6 relative z-10">

              <h2 className="text-lg font-bold group-hover:text-cyan-600 transition">
                {s.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {s.desc}
              </p>

              <div className="mt-4 space-y-1">
                {s.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 size={14} className="text-cyan-600" />
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-5 text-cyan-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                View Details →
              </div>

            </div>

          </motion.div>
        ))}
      </motion.section>

    </div>
  );
};

export default Services;