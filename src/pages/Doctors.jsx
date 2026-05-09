import { Stethoscope, MapPin, Star, Award } from "lucide-react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const doctors = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Dr. John Doe",
    spec: "Cardiologist",
    exp: "12+ Years",
    location: "Ahmedabad",
    rating: 5,
    desc: "Expert in heart surgery, ECG analysis and advanced cardiovascular treatment.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Dr. Sarah Smith",
    spec: "Neurologist",
    exp: "9+ Years",
    location: "Mumbai",
    rating: 5,
    desc: "Specialist in brain disorders, migraine and nervous system care.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Dr. Raj Patel",
    spec: "General Physician",
    exp: "8+ Years",
    location: "Delhi",
    rating: 4,
    desc: "Provides complete family healthcare and preventive treatment.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Dr. Emily Clark",
    spec: "Dentist",
    exp: "6+ Years",
    location: "Pune",
    rating: 5,
    desc: "Cosmetic dentistry, implants and painless dental care expert.",
  },
];

const Doctors = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return doctors.filter((d) =>
      d.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-white">

      {/* HERO */}
      <section className="text-center py-20">
        <Stethoscope className="mx-auto text-cyan-500 mb-3" size={46} />

        <h1 className="text-5xl font-bold">
          Expert <span className="text-cyan-600">Doctors</span>
        </h1>

        <p className="text-gray-500 mt-3">
          Meet our highly qualified medical professionals
        </p>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid md:grid-cols-4 gap-8">

          {filtered.map((doc, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden"
            >

              {/* TOP SECTION */}
              <div className="p-6 text-center">

                {/* IMAGE + BADGE */}
                <div className="relative flex justify-center">
                  <img
                    src={doc.img}
                    className="w-28 h-28 rounded-full object-cover border-4 border-cyan-100 group-hover:scale-105 transition"
                  />

                  <div className="absolute bottom-0 right-[40%] bg-cyan-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Award size={12} /> Top
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-xl font-bold mt-4">{doc.name}</h3>

                <p className="text-cyan-600 text-sm">{doc.spec}</p>

                {/* DETAILS */}
                <div className="flex justify-center gap-4 text-xs text-gray-500 mt-3">
                  <span className="flex items-center gap-1">
                    <Award size={12} /> {doc.exp}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {doc.location}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  {doc.desc}
                </p>


                {/* SOCIAL */}
                <div className="mt-5 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition">

                  <a className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-50 text-cyan-600 hover:bg-cyan-100">
                    <FaLinkedin size={16} />
                  </a>

                  <a className="w-9 h-9 flex items-center justify-center rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100">
                    <FaInstagram size={16} />
                  </a>

                </div>

                {/* BUTTON */}
                <button className="mt-5 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-full hover:shadow-lg transition">
                  Book Appointment
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Doctors;