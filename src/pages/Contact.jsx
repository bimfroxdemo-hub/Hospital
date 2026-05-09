import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-cyan-50 to-blue-50 text-gray-800 overflow-hidden">

      {/* 🌈 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/30 blur-[120px]" />

      {/* HERO */}
      <section className="py-20 text-center px-5 relative z-7">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold"
        >
          Contact{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Us
          </span>
        </motion.h1>

        <p className="text-gray-500 max-w-xl mx-auto mt-6">
          We are here to help you. Reach out anytime for support or queries.
        </p>
      </section>

      {/* FORM + DETAILS */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-300 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>

            {/* Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-lg">

              <h2 className="text-xl font-semibold mb-6">
                Send Message
              </h2>

              <form className="space-y-5">

                <input
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:border-cyan-500 transition"
                />

                <input
                  placeholder="Email"
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:border-cyan-500 transition"
                />

                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full p-3 rounded-lg border border-gray-200 bg-white/80 focus:outline-none focus:border-cyan-500 transition"
                />

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow-md hover:scale-[1.02] transition">
                  Send Message
                </button>

              </form>

            </div>
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >

            <div>
              <h2 className="text-2xl font-bold mb-3">
                Get in Touch
              </h2>
              <p className="text-gray-500">
                Contact us for appointments, emergency services or general inquiries.
              </p>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-4">

              {[
                { icon: <Phone />, text: "+91 99999 99999" },
                { icon: <Mail />, text: "support@medicare.com" },
                { icon: <MapPin />, text: "Ahmedabad, India" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                >
                  <div className="text-cyan-600">
                    {item.icon}
                  </div>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}

            </div>

            {/* HOURS CARD */}
            <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 shadow">
              <h3 className="font-semibold mb-2 text-cyan-600">
                Working Hours
              </h3>
              <p className="text-sm text-gray-600">
                Mon - Sat: 9:00 AM - 8:00 PM <br />
                Sunday: Emergency Only
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* MAP */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="Ahmedabad Location"
            src="https://www.google.com/maps?q=Ahmedabad,India&output=embed"
            className="w-full h-[380px] border-0"
            loading="lazy"
          ></iframe>

        </div>
      </section>

    </div>
  );
};

export default Contact;