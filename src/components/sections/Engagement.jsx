import { motion } from "framer-motion";

function Engagement() {
  return (
    <section className="bg-primary py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-light">
            Flexible Engagement Models
          </h2>

          <p className="mt-6 text-muted text-lg">
            Forte & Co. offers structured engagement formats aligned with
            different business needs, growth stages, and operational priorities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {[
            {
              title: "Monthly Retainer Model",
              text: "Continuous legal support comparable in cost to a single in-house employee. Ideal for businesses requiring ongoing contract drafting, compliance assistance, and proactive legal guidance.",
              highlight: "Ongoing & Preventive Support"
            },
            {
              title: "Project-Based Engagement",
              text: "End-to-end legal assistance for defined transactions or initiatives. Suitable for businesses requiring structured legal support for specific commercial projects.",
              highlight: "Defined Scope Engagement"
            },
            {
              title: "Document-Based Engagement",
              text: "Drafting and review of individual or bundled legal documents, including commercial agreements, HR documentation, and internal corporate policies.",
              highlight: "Per-Document Structuring"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 p-10 hover:border-accent transition duration-300 group"
            >

              {/* Highlight Label */}
              <span className="text-accent text-sm tracking-wide">
                {item.highlight}
              </span>

              {/* Title */}
              <h3 className="mt-4 text-xl font-heading text-light relative inline-block">
                {item.title}
                <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-accent"></span>
              </h3>

              {/* Description */}
              <p className="mt-6 text-muted leading-relaxed">
                {item.text}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="/contact"
            className="bg-accent text-primary px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
          >
            Discuss Your Legal Requirements
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Engagement;
