const Home = () => {
  return (
    <div className="relative min-h-screen text-gray-900 overflow-hidden">

      {/* BACKGROUND (must be first) */}
      <BackgroundShapes />

      {/* CONTENT (must be above background) */}
      <div className="relative z-10">

        <Hero />

        {/* SERVICES */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 text-center">
           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-600 tracking-[0.3em] text-xs font-semibold uppercase mb-3"
          >
            What We Do
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-5"
          >
            Expert Physiotherapy Care
          </motion.h2>

          <motion.p className="text-gray-500 mb-14 max-w-2xl mx-auto text-lg">
            We provide advanced physiotherapy treatments using modern techniques.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-2">
                    {item.title}
                  </h3>

                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✔ Certified therapists</li>
                    <li>✔ Modern equipment</li>
                    <li>✔ Personalized care</li>
                  </ul>
                </div>
              </motion.div>
            ))}

          </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
             <img
            src="https://images.unsplash.com/photo-1588776814546-ec7e9f3c8e6c"
            alt="about"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">
              We Are Ready to Help You
            </h2>

            <p className="text-gray-500 mb-6">
              Advanced physiotherapy with expert care and modern tools.
            </p>

            <ul className="space-y-2 text-gray-600 mb-8">
              <li>✔ Certified experts</li>
              <li>✔ Modern equipment</li>
              <li>✔ 24/7 support</li>
            </ul>

            <button className="px-8 py-4 bg-cyan-500 text-white rounded-full">
              Discover More
            </button>
          </div>
          </div>
        </section>

        {/* DOCTORS */}
        <section className="py-28 bg-cyan-100">
          <div className="max-w-7xl mx-auto px-6 text-center">
               <h2 className="text-5xl font-bold mb-4">
            Professional Therapists
          </h2>

          <p className="text-gray-500 mb-14">
            Meet our expert team
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[1, 2, 3, 4].map((i) => (
              <DoctorCard key={i} i={i} />
            ))}

          </div>
          </div>
        </section>

        {/* BLOG */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Latest Health Insights
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto">
        Expert articles to help you stay pain-free and healthy in daily life
      </p>
    </div>

    {/* LAYOUT */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* LEFT BIG FEATURE POST */}
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">

        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580281657527-47c84c4d3b7f"
            className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-8 text-left">

          <span className="text-cyan-600 text-xs font-bold tracking-widest">
            FEATURED
          </span>

          <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-cyan-600 transition">
            Complete Guide to Back Pain Recovery
          </h3>

          <p className="text-gray-600 mb-5">
            Learn advanced physiotherapy techniques that help you recover faster without medication.
          </p>

          <button className="text-cyan-600 font-semibold hover:text-cyan-800">
            Read Full Article →
          </button>

        </div>
      </div>

      {/* RIGHT SMALL POSTS */}
      <div className="space-y-6">

        {[
          {
            title: "Improve Body Posture in Office",
            img: "https://images.unsplash.com/photo-1588776814546-ec7e9f3c8e6c",
          },
          {
            title: "Safe Exercises After Injury",
            img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
          },
          {
            title: "Daily Stretching Routine",
            img: "https://images.unsplash.com/photo-1580281780460-82d277b0c6c6",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex gap-4 bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition group"
          >

            {/* IMAGE */}
            <div className="w-28 h-24 overflow-hidden rounded-xl flex-shrink-0">
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div>
              <h4 className="font-semibold text-gray-800 group-hover:text-cyan-600 transition">
                {item.title}
              </h4>

              <p className="text-sm text-gray-500 mt-1">
                Quick tips for better health and recovery.
              </p>

              <button className="text-sm text-cyan-600 mt-2 font-medium">
                Read →
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="py-28">
       <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      What Our Patients Say
    </h2>

    <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
      Real feedback from patients who experienced our physiotherapy care
    </p>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {[
        {
          name: "Rahul Mehta",
          text: "Best physiotherapy experience ever. My back pain is completely gone now!",
          role: "IT Engineer",
        },
        {
          name: "Priya Sharma",
          text: "Doctors are very professional and caring. Highly recommended clinic!",
          role: "Teacher",
        },
        {
          name: "Amit Patel",
          text: "I recovered faster than expected. Great modern treatment techniques.",
          role: "Business Owner",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative group bg-white/70 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
        >

          {/* Glow background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-100 to-blue-100 opacity-0 group-hover:opacity-40 transition"></div>

          {/* Content */}
          <div className="relative">

            {/* Quote icon */}
            <div className="text-cyan-500 text-5xl font-bold mb-4">
              “
            </div>

            {/* Text */}
            <p className="text-gray-600 mb-6">
              {item.text}
            </p>

            {/* Rating */}
            <div className="text-yellow-400 mb-4">
              ★★★★★
            </div>

            {/* User */}
            <div className="flex items-center justify-center gap-3">

              <img
                src={`https://i.pravatar.cc/100?img=${i + 20}`}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-cyan-400"
              />

              <div className="text-left">
                <h4 className="font-bold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.role}
                </p>
              </div>

            </div>

          </div>
        </div>
      ))}

    </div>

  </div>
        </section>

      </div>
    </div>
  );
};

export default Home;