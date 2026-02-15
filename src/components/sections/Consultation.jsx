import { motion } from "framer-motion";

function Consultation() {
  return (
    <section className="bg-primary py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-light">
            Initiate a Structured Legal Discussion
          </h2>

          <p className="mt-6 text-muted text-lg leading-relaxed">
            Whether you require ongoing legal structuring or support for a
            defined commercial project, Forte & Co. provides responsive,
            business-aligned advisory assistance.
          </p>

          <div className="mt-10 space-y-4 text-lg">
            <p className="text-light">
              📞 +91 7893597609
            </p>
            <p className="text-light">
              📧 forte.legal@outlook.com
            </p>
          </div>

          <p className="mt-8 text-muted text-sm leading-relaxed">
            All consultations are handled with professional discretion and
            confidentiality.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#0E2235] p-12 border border-white/10"
        >
          <form className="space-y-8">

            <div>
              <label className="block text-sm text-muted mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-light transition"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-light transition"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">
                Organisation
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-light transition"
              />
            </div>

            <div>
              <label className="block text-sm text-muted mb-2">
                Brief Description of Requirement
              </label>
              <textarea
                rows="4"
                className="w-full bg-transparent border-b border-white/20 focus:border-accent outline-none py-2 text-light transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-primary py-4 font-medium tracking-wide hover:opacity-90 transition"
            >
              Request Consultation
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Consultation;
