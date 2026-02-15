import { motion } from "framer-motion";

function Problem() {
  return (
    <section className="bg-primary py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-light leading-snug">
            As Businesses Grow, Legal Complexity Grows With Them.
          </h2>

          <p className="mt-6 text-muted text-lg">
            In early stages, legal requirements are often handled informally. As
            operations scale, this approach leads to inconsistencies, compliance
            gaps, avoidable disputes, and increased exposure to risk.
          </p>
        </motion.div>

        {/* Problem Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Fragmented Documentation",
              text: "Contracts drafted in isolation without standardisation create ambiguity and operational inefficiencies.",
            },
            {
              title: "Reactive Risk Management",
              text: "Legal risks are often addressed only after issues arise, rather than being proactively mitigated.",
            },
            {
              title: "Operational Distraction",
              text: "Founders and core teams spend valuable time managing legal work instead of focusing on growth.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 p-8 hover:border-accent transition"
            >
              <h3 className="text-xl font-heading text-light relative inline-block">
                {item.title}
                <span className="absolute left-0 -bottom-2 w-12 h-[2px] bg-accent"></span>
              </h3>

              <p className="mt-4 text-muted leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
