import { useEffect, useState } from "react";
import doctor from "../assets/doctor.png";
import bg1 from "../assets/bgimg.jpg";
import bg2 from "../assets/bgimg2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [bg1, bg2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2000ms] ${
              i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
      </div>

      {/* 🔥 OVERLAY (light so bg visible rahe) */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🔥 CENTER CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-heroFade">

        <p className="text-sm mb-4 tracking-widest text-blue-200 uppercase">
          💙 Your Health Our Priority
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
          Expert medical care <br />
          you can rely on
        </h1>

        <p className="text-lg text-white/80 mb-8">
          Experience healthcare you can trust. Our expert doctors provide
          compassionate and high-quality care.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/appointment"
            className="px-6 py-3 bg-cyan-500 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* 🔥 ANIMATIONS */}
      <style>
        {`
          @keyframes heroFade {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-heroFade {
            animation: heroFade 1.2s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;