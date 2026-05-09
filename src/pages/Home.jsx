import Hero from "../components/Hero";
import BackgroundShapes from "../components/BackgroundShapes";
import { motion } from "framer-motion";
import ExperienceSection from "../components/ExperienceSection";

// IMAGES
import bloodpressure from "../assets/heroimg/Blood-Pressure.jpg";
import healthcheckup from "../assets/heroimg/Health-Checkup.jpg";
import labtestservices from "../assets/heroimg/Lab-Test-Services.jpg";
import firstaid from "../assets/heroimg/FirstAid.jpg";
import doctor from "../assets/heroimg/doctor.jpg";
import Prescription from "../assets/heroimg/Prescription&Medication.jpg";
import GeneralConsultation from "../assets/heroimg/General-Consultation.jpg";

// SERVICES
const services = [
  {
    img: GeneralConsultation,
    title: "General Consultation",
    desc: ["Doctor checkup", "Diagnosis", "Treatment advice"],
  },
  {
    img: healthcheckup,
    title: "Health Checkup",
    desc: ["Full body check", "Routine tests", "Health monitoring"],
  },
  {
    img: bloodpressure,
    title: "BP & Diabetes Check",
    desc: ["BP monitoring", "Sugar test", "Tracking"],
  },
  {
    img: labtestservices,
    title: "Lab Tests",
    desc: ["Blood tests", "Reports", "Accuracy"],
  },
  {
    img: Prescription,
    title: "Medication",
    desc: ["Guidance", "Dosage", "Recovery"],
  },
  {
    img: firstaid,
    title: "Emergency Care",
    desc: ["Quick help", "Injury care", "Immediate support"],
  },
];

// ANIMATIONS
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* PARENT STAGGER */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* TEXT ANIMATION */
const text = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* CARD ANIMATION */
const card = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-gray-900">

      <BackgroundShapes />

      {/* FLOATING BLOBS */}
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, -50, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
        className="absolute w-96 h-96 bg-cyan-300/30 blur-3xl rounded-full top-0 left-0"
      />
      <motion.div
        animate={{ x: [0, -120, 120, 0], y: [0, 80, -80, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute w-96 h-96 bg-blue-300/30 blur-3xl rounded-full bottom-0 right-0"
      />

      <div className="relative z-10">
        <Hero />

        {/* ================= SERVICES ================= */}
        <section className="py-28 bg-gradient-to-br  via-cyan-50 to-blue-50">

          <div className="text-center max-w-7xl mx-auto px-6">

            {/* TITLE */}
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-5xl font-extrabold mb-4"
            >
              Premium Medical Services
            </motion.h2>

            <p className="text-gray-500 mb-16 max-w-2xl mx-auto text-lg">
              Modern healthcare with expert doctors & advanced treatment systems.
            </p>

            {/* GRID */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >

              {services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                  className="group relative rounded-3xl overflow-hidden 
              bg-white/50 backdrop-blur-2xl border border-white/40
              shadow-lg hover:shadow-2xl transition-all duration-500"
                >

                  {/* 🌟 GLOW EFFECT */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 to-blue-400/30 blur-2xl" />
                  </div>

                  {/* INNER LIGHT */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition duration-500" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-56 w-full object-cover 
                  group-hover:scale-110 transition duration-700 ease-out"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 text-left relative z-10">

                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition">
                      {item.title}
                    </h3>

                    <div className="space-y-2">
                      {item.desc.map((d, idx) => (
                        <p
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
                            ✓
                          </span>
                          {d}
                        </p>
                      ))}
                    </div>

                    {/* LINE */}
                    <div className="mt-5 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                    {/* BUTTON */}
                    <button className="mt-4 text-cyan-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More →
                    </button>

                  </div>

                </motion.div>
              ))}

            </motion.div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <ExperienceSection />

        {/* ================= ABOUT ================= */}
        <section className="py-32 relative overflow-hidden">

          {/* 🔥 animated background blobs */}
          <motion.div
            animate={{ x: [0, 80, -80, 0], y: [0, -60, 60, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute w-96 h-96 bg-cyan-300/30 blur-3xl rounded-full top-0 left-0"
          />
          <motion.div
            animate={{ x: [0, -100, 100, 0], y: [0, 80, -80, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-96 h-96 bg-blue-300/30 blur-3xl rounded-full bottom-0 right-0"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            {/* 🖼 IMAGE SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              {/* main image */}
              <img
                src={doctor}
                className="rounded-3xl shadow-2xl"
              />

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl"
              >
                <p className="text-cyan-600 font-bold text-lg">10+ Years</p>
                <p className="text-sm text-gray-500">Experience</p>
              </motion.div>

              {/* glow border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-200 to-blue-200 opacity-20 blur-xl"></div>
            </motion.div>

            {/* 🧠 CONTENT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Why Choose <span className="text-cyan-600">Our Clinic?</span>
              </h2>

              <p className="text-gray-500 mb-8">
                We provide modern healthcare with expert doctors, advanced technology,
                and a patient-first approach to ensure the best experience.
              </p>

              {/* 🔥 animated list */}
              <div className="space-y-4 mb-8">

                {[
                  "Highly Experienced Doctors",
                  "Advanced Medical Equipment",
                  "Affordable & Transparent Pricing",
                  "24/7 Emergency Support",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3 group"
                  >

                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-cyan-500 text-white text-sm group-hover:scale-110 transition">
                      ✔
                    </div>

                    <p className="text-gray-700 font-medium">
                      {item}
                    </p>

                  </motion.div>
                ))}

              </div>

              {/* 🔥 CTA button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold overflow-hidden"
              >

                <span className="relative z-10">Learn More</span>

                {/* glow animation */}
                <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition"></span>
              </motion.button>

            </motion.div>

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="py-28 text-center bg-gray-50">
          <h2 className="text-4xl font-bold mb-14">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {["Book", "Consult", "Recover"].map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{t}</h3>
                <p className="text-gray-500">Simple & fast process</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-32 ">

          <div className="max-w-7xl mx-auto px-6">

            {/* HEADER */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Our Premium Facilities
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience modern healthcare with world-class infrastructure and care.
              </p>
            </motion.div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-10">

              {[
                {
                  title: "Modern Equipment",
                  desc: "Advanced machines for accurate diagnosis.",
                  icon: "🩺",
                },
                {
                  title: "Clean Environment",
                  desc: "Safe & hygienic patient-friendly space.",
                  icon: "🧼",
                },
                {
                  title: "24/7 Support",
                  desc: "Always available when you need us.",
                  icon: "⏰",
                },
                {
                  title: "Expert Staff",
                  desc: "Highly trained medical professionals.",
                  icon: "👨‍⚕️",
                },
                {
                  title: "Comfort Area",
                  desc: "Relaxing waiting & treatment space.",
                  icon: "🛋️",
                },
                {
                  title: "Digital Reports",
                  desc: "Instant access to your medical data.",
                  icon: "📄",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -12, rotate: 1 }}
                  className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-400"
                >

                  {/* inner card */}
                  <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center shadow-xl border border-white/30 relative overflow-hidden">

                    {/* glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-0 group-hover:opacity-30 transition blur-xl"></div>

                    {/* icon */}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-cyan-500 text-white text-2xl shadow-lg"
                    >
                      {item.icon}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        </section>


        {/*==================================appointment============================================== */}
        <section className="relative bg-[#f5f7fb] py-28 overflow-hidden">

      {/* FLOATING BG */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full animate-pulse" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12"
      >

        {/* LEFT CONTENT */}
        <div>

          <motion.p variants={text} className="text-cyan-600 font-semibold tracking-widest text-sm mb-2">
            WELCOME TO MEDICLINIC A
          </motion.p>

          <motion.h1 variants={text} className="text-4xl md:text-5xl font-extrabold mb-4">
            Modern Medical Theme
          </motion.h1>

          <motion.p variants={text} className="text-gray-500 max-w-md mb-6">
            Smooth scroll-based animations create a premium user experience.
            Each element appears naturally as you explore the page.
          </motion.p>

          <motion.button
            variants={text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition"
          >
            Know more
          </motion.button>

        </div>

        {/* RIGHT FORM CARD */}
        <motion.div
          variants={card}
          whileHover={{ y: -8 }}
          className="relative flex justify-center"
        >

          {/* CLIP */}
          <div className="absolute -top-6 w-12 h-6 bg-gray-300 rounded-sm shadow" />

          {/* CARD */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">

            <h3 className="text-center font-semibold mb-2">
              Book Appointment
            </h3>

            <p className="text-xs text-gray-400 text-center mb-4">
              Fill details and we will contact you
            </p>

            <div className="space-y-3">

              {["Name", "Email", "Phone", "Address"].map((ph, i) => (
                <motion.input
                  key={i}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder={ph}
                  className="w-full p-2 border rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition"
                />
              ))}

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-3 py-2 bg-cyan-600 text-white rounded-full text-sm shadow hover:bg-cyan-700 transition"
              >
                Book Appointment
              </motion.button>

            </div>

          </div>

        </motion.div>

      </motion.div>
    </section>
        {/* ================= CTA ================= */}
        <section className="py-28 bg-cyan-600 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Better Health?
          </h2>

          <button className="bg-white text-cyan-600 px-8 py-4 rounded-full hover:scale-105 transition">
            Book Appointment
          </button>
        </section>

      </div>
    </div>
  );
};

export default Home;