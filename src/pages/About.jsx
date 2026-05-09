import {
  Users,
  HeartPulse,
  Award,
  Clock,
  Stethoscope,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import aboutheroimg from "../assets/heroimg/aboutheroimg.jpg";
import doctor from "../assets/heroimg/doctor.jpg";
import WhyChoose from "../components/whychoose";
import HealthCheckup from "../assets/heroimg/Health-Checkup.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 text-gray-800 overflow-hidden">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          src={aboutheroimg}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="text-cyan-300">MediCare</span>
          </h1>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Premium healthcare experience with modern technology, expert doctors and compassionate care.
          </p>
        </motion.div>

      </section>

      {/* STORY SECTION */}
     {/* STORY SECTION */}
<section className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center overflow-hidden">

  {/* GLOW BACKGROUND */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full" />

  {/* IMAGE SIDE */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative group"
  >

    {/* MAIN IMAGE */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/40">
      <img
        src={doctor}
        className="w-full h-[440px] object-cover group-hover:scale-105 transition duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>

    {/* FLOATING BADGE */}
    <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full shadow-md text-sm font-semibold text-cyan-700">
      🏥 Trusted Hospital
    </div>

    {/* FLOATING IMAGE 1 */}
    <img
      src={HealthCheckup}
      className="absolute -top-6 -right-6 w-40 h-40 object-cover rounded-2xl shadow-xl border-4 border-white hover:scale-105 transition"
    />

    {/* FLOATING IMAGE 2 */}
    <img
      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
      className="absolute -bottom-6 -left-6 w-44 h-44 object-cover rounded-2xl shadow-xl border-4 border-white hover:scale-105 transition"
    />

  </motion.div>

  {/* TEXT SIDE */}
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative bg-white/50 backdrop-blur-2xl border border-white/40 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition"
  >

    <span className="text-cyan-600 font-semibold tracking-widest text-sm">
      WHO WE ARE
    </span>

    <h2 className="text-4xl font-bold mt-3 leading-tight">
      World-class healthcare with human touch
    </h2>

    <p className="text-gray-600 mt-4 leading-relaxed">
      We are a multi-speciality hospital providing advanced treatment with
      compassion, trust and modern medical technology.
    </p>

    {/* FEATURES */}
    <ul className="mt-8 space-y-4">
      {[
        "Advanced Medical Technology",
        "Expert Doctors Team",
        "24/7 Emergency Care",
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
            <CheckCircle size={16} />
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>

    {/* BUTTON */}
    <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition">
      Explore Services
    </button>

  </motion.div>

</section>

      {/* STATS */}
      <section className="bg-cyan-700 text-white py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8"
        >

          {[
            { icon: <Users />, num: "500+", label: "Doctors" },
            { icon: <HeartPulse />, num: "10K+", label: "Patients" },
            { icon: <Award />, num: "25+", label: "Awards" },
            { icon: <Clock />, num: "24/7", label: "Support" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex justify-center mb-2">{s.icon}</div>
              <h2 className="text-3xl font-bold">{s.num}</h2>
              <p className="text-sm opacity-80">{s.label}</p>
            </motion.div>
          ))}

        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChoose />


      {/* CTA */}
      <section className="bg-cyan-50 py-20 text-center">

        <h2 className="text-3xl font-bold">
          Need Medical Assistance?
        </h2>

        <p className="text-gray-500 mt-2">
          Our expert doctors are available 24/7
        </p>

        <button className="mt-6 bg-cyan-600 text-white px-8 py-3 rounded-full hover:bg-cyan-700 transition shadow-lg">
          Contact Us
        </button>

      </section>

    </div>
  );
};

export default About;