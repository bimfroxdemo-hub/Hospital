import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-cyan-50 to-slate-100 text-gray-700">

      {/* TOP BORDER GLOW */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-extrabold text-cyan-600 mb-4">
              MediCare
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              Providing world-class healthcare with modern technology and expert physiotherapy care.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 hover:bg-cyan-500 hover:text-white transition cursor-pointer">
                f
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 hover:bg-cyan-500 hover:text-white transition cursor-pointer">
                in
              </div>
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-cyan-100 text-cyan-600 hover:bg-cyan-500 hover:text-white transition cursor-pointer">
                x
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-bold mb-5 text-gray-800">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              {["Home", "About", "Doctors", "Services"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-cyan-600 transition hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-bold mb-5 text-gray-800">Services</h3>

            <ul className="space-y-3 text-sm">
              {["Cardiology", "Neurology", "Dental Care", "Emergency"].map((item, i) => (
                <li key={i} className="hover:text-cyan-600 transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-bold mb-5 text-gray-800">Contact</h3>

            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-2 hover:text-cyan-600 transition">
                <Phone size={16} /> +91 99999 99999
              </div>

              <div className="flex items-center gap-2 hover:text-cyan-600 transition">
                <Mail size={16} /> support@medicare.com
              </div>

              <div className="flex items-center gap-2 hover:text-cyan-600 transition">
                <MapPin size={16} /> Ahmedabad, India
              </div>

            </div>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="mt-16 bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <h3 className="text-lg font-semibold">
             Latest Health Insights
          </h3>

          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="px-4 py-2 border rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="px-5 py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition">
              Appointment
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t text-center text-xs text-gray-500">
          © 2026 MediCare. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;