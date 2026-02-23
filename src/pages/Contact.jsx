import { useState } from "react";
import contactImage from "../assets/contact-side.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form Submitted:", form);

    setLoading(true);
    setSuccess(false);
    setError("");

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // If backend returns 500, this prevents crash
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server Error");
      }

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError("Unable to connect to server.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#EDE8DF] flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full bg-white shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* ================= LEFT PANEL ================= */}
        <div
          className="bg-primary text-white p-16 flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${contactImage})` }}
        >
          <div className="bg-primary/80 p-10">
            <h2 className="text-3xl font-heading">
              Contact Forte & Co.
            </h2>

            <div className="mt-10 space-y-6 text-gray-300">
              <div>
                <p className="text-accent text-sm uppercase tracking-widest">
                  Address
                </p>
                <p className="mt-2">Hyderabad, India</p>
              </div>

              <div>
                <p className="text-accent text-sm uppercase tracking-widest">
                  Email
                </p>
                <p className="mt-2">forte.legal@outlook.com</p>
              </div>

              <div>
                <p className="text-accent text-sm uppercase tracking-widest">
                  Phone
                </p>
                <p className="mt-2">+91 7893597609</p>
              </div>

              <div>
                <p className="text-accent text-sm uppercase tracking-widest">
                  Business Hours
                </p>
                <p className="mt-2">
                  Monday – Saturday <br />
                  9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="p-16 flex flex-col justify-center text-primary">
          <h2 className="text-4xl font-heading">
            Get in Touch
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Feel free to drop us a message. All consultations are handled with
            professional discretion and confidentiality.
          </p>

          <form onSubmit={handleSubmit} className="mt-12 space-y-8">

            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border-b border-gray-300 focus:border-accent outline-none py-3 transition"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border-b border-gray-300 focus:border-accent outline-none py-3 transition"
              />
            </div>

            <div>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full border-b border-gray-300 focus:border-accent outline-none py-3 resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 bg-accent text-primary px-12 py-3 font-medium tracking-wide hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>

            {success && (
              <p className="text-green-600 text-sm">
                Your request has been submitted successfully.
              </p>
            )}

            {error && (
              <p className="text-red-600 text-sm">
                {error}
              </p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;