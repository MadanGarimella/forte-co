import { motion } from "framer-motion";

function CaseStudies() {
  return (
    <section className="bg-[#0E2235] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-light">
            Selected Engagements
          </h2>

          <p className="mt-6 text-muted text-lg leading-relaxed">
            Structured legal advisory across technology, healthcare,
            and real estate sectors aligned with operational clarity
            and scalable growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid md:grid-cols-3 gap-12">

          {[
            {
              title: "SYNFOLIX",
              sector: "Tech-Medical Startup",
              description:
                "Structured SaaS agreements, OEM contracts, NDAs, and compliance frameworks supporting scalable deployment within a regulated healthcare environment."
            },
            {
              title: "SATHYASOFTECH-IN",
              sector: "Software Company",
              description:
                "Drafted corporate governance documents, HR agreements, compliance frameworks, and data protection policies supporting product-focused expansion."
            },
            {
              title: "DECCAN HOMES ENTERPRISES",
              sector: "Real Estate & Club Development",
              description:
                "Provided project-based legal structuring, joint development agreements, membership documentation, and governance frameworks for operational clarity."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group border border-white/10 p-12 bg-primary/40 backdrop-blur-sm hover:border-accent hover:-translate-y-2 transition-all duration-300"
            >

              {/* Sector */}
              <span className="text-accent text-sm tracking-widest uppercase">
                {item.sector}
              </span>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-heading text-light relative inline-block">
                {item.title}
                <span className="absolute left-0 -bottom-3 w-16 h-[2px] bg-accent"></span>
              </h3>

              {/* Description */}
              <p className="mt-8 text-muted leading-relaxed text-lg">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="/contact"
            className="border border-accent text-accent px-12 py-4 font-medium tracking-wide hover:bg-accent hover:text-primary transition"
          >
            Discuss Similar Requirements
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default CaseStudies;
