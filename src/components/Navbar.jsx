import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Info,
  Stethoscope,
  Settings,
  Phone,
  CalendarCheck,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About", path: "/about", icon: <Info size={18} /> },
    { name: "Doctors", path: "/doctors", icon: <Stethoscope size={18} /> },
    { name: "Services", path: "/services", icon: <Settings size={18} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-[#f5f6fb]/70 border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-cyan-600 text-white flex items-center justify-center rounded-lg font-bold shadow-md">
            M
          </div>
          <span className="text-lg font-bold text-gray-800">
            Medi<span className="text-cyan-600">Care</span>
          </span>
        </Link>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8">

          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative flex items-center gap-1 font-medium group transition
                ${
                  location.pathname === item.path
                    ? "text-cyan-600"
                    : "text-cyan-700 hover:text-cyan-900"
                }`}
            >

              {/* ICON */}
              <span className="opacity-80 group-hover:opacity-100 transition">
                {item.icon}
              </span>

              {/* TEXT */}
              {item.name}

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-700 transition-all duration-300
                  ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
              />
            </Link>
          ))}

        </div>

        {/* CTA BUTTON */}
        <Link
          to="/appointment"
          className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-cyan-600 to-blue-400 hover:from-cyan-700 hover:to-cyan-500 transition shadow-md"
        >
          <CalendarCheck size={18} />
          Appointment
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;