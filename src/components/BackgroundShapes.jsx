import { useEffect, useState } from "react";
import bgPattern from "../assets/bg-pattern.jpg";
import plus from "../assets/plus.png";

function BackgroundShapes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

      {/* 🌈 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-white to-blue-100" />

      {/* 🖼️ PATTERN OVERLAY */}
      <img
        src={bgPattern}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* 💫 BLOB 1 (mouse move) */}
      <div
        className="absolute top-10 left-10 w-[500px] h-[500px] bg-cyan-400/40 blur-[160px] rounded-full"
        style={{
          transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          transition: "transform 0.2s linear",
        }}
      />

      {/* 💫 BLOB 2 (reverse movement) */}
      <div
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-400/40 blur-[160px] rounded-full"
        style={{
          transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
          transition: "transform 0.2s linear",
        }}
      />

      {/* ✨ FLOAT ICON LEFT */}
      <img
        src={plus}
        alt=""
        className="absolute top-[20%] left-[15%] w-20 opacity-30 animate-pulse"
      />

      {/* ✨ FLOAT ICON RIGHT */}
      <img
        src={plus}
        alt=""
        className="absolute bottom-[25%] right-[20%] w-24 opacity-30 animate-pulse"
      />

    </div>
  );
}

export default BackgroundShapes;