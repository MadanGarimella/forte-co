import { motion } from "framer-motion";
import heroBg from "../../assets/hero-bg.png";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/65 via-primary/55 to-primary/30"></div>


      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading leading-tight text-light"
        >
          Structured Legal Support <br />
          for Businesses That Intend to Grow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-muted text-lg md:text-xl"
        >
          Forte & Co. functions as your extended in-house legal team —
          delivering contract drafting, compliance guidance, and structured
          legal documentation without the overhead of a full legal department.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="/contact"
            className="bg-accent text-primary px-6 py-3 font-medium tracking-wide hover:opacity-90 transition"
          >
            Schedule Consultation
          </a>

          <a
            href="/services"
            className="border border-accent text-accent px-6 py-3 font-medium tracking-wide hover:bg-accent hover:text-primary transition"
          >
            Explore Engagement Models
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
