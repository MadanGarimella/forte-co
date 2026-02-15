import { motion } from "framer-motion";
import aboutImg1 from "../assets/about-1.png"; // Add professional image
import aboutImg2 from "../assets/about-2.png"; // Add secondary image
import aboutHero from "../assets/about-bg.png";

function About() {
  return (
    <div className="bg-primary text-light">
      {/* ===== HERO BANNER ===== */}
      <section className="relative py-28 text-center overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading text-light">
            About Forte & Co.
          </h1>

          <p className="mt-6 text-muted text-lg leading-relaxed">
            Structured legal advisory for businesses seeking <br />
            clarity, consistency, and sustainable growth.
          </p>
        </div>
      </section>

      {/* ===== SECTION 1: IMAGE + CONTENT ===== */}
      <section className="bg-light text-primary py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg1}
              alt="Legal Advisory"
              className="w-full shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-md uppercase tracking-widest">
              Who We Are
            </span>

            <h2 className="mt-6 text-3xl font-heading leading-snug">
              Structured Legal Advisory for Growing Businesses
            </h2>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Forte & Co. provides non-litigation legal assistance and legal
              process outsourcing services to startups and companies seeking
              structured documentation, compliance clarity, and scalable legal
              frameworks.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              We function as an extended in-house legal team, enabling
              organisations to focus on growth while maintaining a strong legal
              foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: DARK BAND ===== */}
      <section className="bg-[#0F2438] py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading">Our Advisory Approach</h2>

            <p className="mt-6 text-muted leading-relaxed text-lg">
              Legal risks are best managed proactively. Our engagement model
              emphasises preventive structuring, standardised documentation, and
              operational alignment.
            </p>

            <ul className="mt-8 space-y-4 text-muted">
              <li>• Continuous contract drafting & review</li>
              <li>• Compliance and governance structuring</li>
              <li>• Risk mitigation through documentation clarity</li>
              <li>• Cost-effective legal process outsourcing</li>
            </ul>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg2}
              alt="Business Legal Strategy"
              className="w-full shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 3: VALUE BLOCKS ===== */}
      <section className="bg-light text-primary py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-accent uppercase tracking-widest text-sm">
            Why Forte & Co.
          </span>

          <h2 className="mt-6 text-3xl font-heading">
            Legal Clarity Is Operational Strength
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Preventive Structuring",
                text: "We mitigate legal risks at early stages rather than addressing disputes reactively.",
              },
              {
                title: "Operational Alignment",
                text: "Our advisory integrates with business operations for consistency and scalability.",
              },
              {
                title: "Flexible Engagement",
                text: "Retainer, project-based, and document-specific models aligned with business needs.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 p-10 hover:border-accent transition"
              >
                <h3 className="text-xl font-heading relative inline-block">
                  {item.title}
                  <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-accent"></span>
                </h3>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA BAND ===== */}
      <section className="bg-primary py-24 text-center border-t border-white/10">
        <h2 className="text-3xl font-heading">
          Engage Structured Legal Support
        </h2>

        <div className="mt-8">
          <a
            href="/contact"
            className="bg-accent text-primary px-12 py-4 font-medium tracking-wide hover:opacity-90 transition"
          >
            Request Consultation
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
