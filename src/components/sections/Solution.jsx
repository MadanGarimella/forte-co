import { motion } from "framer-motion";
import solutionBg from "../../assets/solution-bg.png";

function Solution() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${solutionBg})` }}
      ></div>

      {/* Dark Overlay with Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading text-light leading-snug">
            Forte & Co. Functions as Your Extended In-House Legal Team.
          </h2>

          <p className="mt-6 text-muted text-lg leading-relaxed">
            We provide ongoing, structured legal assistance aligned with business
            operations. From contract drafting and review to compliance support
            and documentation structuring, our engagement model ensures legal
            clarity without the fixed costs of an internal legal department.
          </p>

          <p className="mt-6 text-muted leading-relaxed">
            Our approach is preventive rather than reactive — enabling businesses
            to mitigate legal risks early, maintain operational consistency,
            and make informed decisions with confidence.
          </p>

          <div className="mt-10">
            <a
              href="/services"
              className="inline-block bg-accent text-primary px-8 py-3 font-medium tracking-wide hover:opacity-90 transition"
            >
              Explore Engagement Models
            </a>
          </div>
        </motion.div>

        {/* Right Structured Points */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {[
            "Continuous Contract Drafting & Review",
            "Structured Legal Documentation",
            "Compliance & Governance Support",
            "Cost-Effective Legal Process Outsourcing",
            "Scalable Advisory for Growing Businesses"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-2 h-2 mt-3 bg-accent rounded-full"></div>
              <p className="text-light text-lg">{item}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Solution;
