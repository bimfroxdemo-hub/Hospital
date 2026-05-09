import { useState } from "react";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Appointment Booked Successfully ✅");
  };

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Book an <span className="text-cyan-600">Appointment</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Fill the form below to schedule your appointment with our expert doctors.
        </p>
      </section>

      {/* FORM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow space-y-6"
          >

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
                required
              />

              <select
                name="doctor"
                onChange={handleChange}
                className="p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
                required
              >
                <option value="">Select Doctor</option>
                <option>Dr. John Doe (Cardiology)</option>
                <option>Dr. Smith (Neurology)</option>
                <option>Dr. Patel (General)</option>
              </select>
            </div>

            {/* DATE */}
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
              required
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="4"
              placeholder="Additional Message"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-cyan-500"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition"
            >
              Confirm Appointment
            </button>

          </form>

        </div>
      </section>

      {/* EXTRA INFO */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need Help?
        </h2>
        <p className="text-gray-500 mb-4">
          Call us or visit hospital for emergency services
        </p>
        <p className="text-cyan-600 font-semibold">
          +91 99999 99999
        </p>
      </section>

    </div>
  );
};

export default Appointment;