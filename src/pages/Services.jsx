import { motion } from "framer-motion";
import servicesHero from "../assets/services-hero.png";

function Services() {
  return (
    <div className="bg-primary text-light">
      {/* ================= HERO ================= */}
      <section className="relative py-36 text-center overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="mt-6 text-4xl md:text-5xl font-heading">
            Structured Engagement Models
          </h1>

          <p className="mt-8 text-lg text-muted leading-relaxed">
            Flexible legal advisory formats aligned with <br />
            business growth, operational clarity, and compliance consistency.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-heading">
            Legal Support Designed for Business Reality
          </h2>

          <p className="mt-8 text-muted text-lg leading-relaxed">
            Forte & Co. provides non-litigation legal drafting, documentation,
            and compliance support through structured engagement models that
            eliminate inefficiencies while maintaining legal clarity.
          </p>
        </div>
      </section>

      {/* ================= MONTHLY RETAINER ================= */}
      <section className="bg-[#0F2438] py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm">
              01
            </span>
            <h2 className="mt-6 text-3xl font-heading">
              Monthly Retainer Model
            </h2>

            <p className="mt-6 text-muted leading-relaxed text-lg">
              Continuous legal support comparable in cost to a single in-house
              employee, while gaining access to a structured legal team.
            </p>

            <ul className="mt-8 space-y-4 text-muted">
              <li>• Ongoing contract drafting & review</li>
              <li>• Compliance guidance</li>
              <li>• Governance documentation</li>
              <li>• Legal risk assessment</li>
              <li>• Structured advisory assistance</li>
            </ul>
          </div>

          <div className="bg-primary/40 border border-white/10 p-12">
            <h3 className="text-xl font-heading text-accent">Ideal For</h3>
            <p className="mt-6 text-muted leading-relaxed">
              Growing businesses that require consistent legal structuring and
              proactive risk mitigation without maintaining a full internal
              legal department.
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              Ideal for startups and scaling businesses that require consistent
              legal structuring across contracts, employment documentation,
              compliance obligations, and vendor relationships.
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              Particularly suited for organisations experiencing operational
              expansion, increasing contractual volume, regulatory oversight, or
              investor scrutiny — where preventive legal clarity becomes
              essential.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECT BASED ================= */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm">
              02
            </span>
            <h2 className="mt-6 text-3xl font-heading">
              Project-Based Engagement
            </h2>

            <p className="mt-6 text-muted leading-relaxed text-lg">
              End-to-end legal support for defined commercial projects or
              transactions with clearly identified scope and deliverables.
            </p>

            <ul className="mt-8 space-y-4 text-muted">
              <li>• SaaS & licensing agreements</li>
              <li>• Joint development agreements</li>
              <li>• Transaction documentation</li>
              <li>• Regulatory compliance structuring</li>
            </ul>
          </div>

          <div className="bg-[#0E2235] border border-white/10 p-12">
            <h3 className="text-xl font-heading text-accent">Ideal For</h3>
            <p className="mt-6 text-muted leading-relaxed">
              Businesses requiring focused legal support for specific
              initiatives without long-term commitment.
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              For businesses undertaking defined commercial initiatives that
              require structured legal documentation and risk allocation
              clarity.
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              Suitable when launching new products, entering strategic
              partnerships, executing joint developments, or navigating
              regulatory approvals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DOCUMENT BASED ================= */}
      <section className="bg-[#0F2438] py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-accent uppercase tracking-widest text-sm">
              03
            </span>
            <h2 className="mt-6 text-3xl font-heading">
              Document-Based Engagement
            </h2>

            <p className="mt-6 text-muted leading-relaxed text-lg">
              Drafting and review of individual or bundled legal documentation
              aligned with business requirements.
            </p>

            <ul className="mt-8 space-y-4 text-muted">
              <li>• Commercial agreements</li>
              <li>• HR & employment documents</li>
              <li>• Corporate policies</li>
              <li>• NDAs & confidentiality frameworks</li>
            </ul>
          </div>

          <div className="bg-primary/40 border border-white/10 p-12">
            <h3 className="text-xl font-heading text-accent">Ideal For</h3>
            <p className="mt-6 text-muted leading-relaxed">
              Companies requiring structured documentation support without
              ongoing engagement.
            </p>
            <p className="mt-6 text-muted leading-relaxed">
              For businesses requiring structured drafting or review of specific
              legal documents without entering long-term engagement
              arrangements.
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              This model supports companies seeking clarity in individual
              agreements, HR documentation, confidentiality frameworks, or
              internal policy structuring.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      {/* ================= COMPARISON SECTION ================= */}
      <section className="bg-primary py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading text-white">
              Engagement Model Comparison
            </h2>
            <p className="mt-6 text-gray-400 text-lg">
              A structured overview to help determine the appropriate engagement
              format based on business requirements.
            </p>
          </div>

          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden md:block mt-20">
            <div className="border border-white/10">
              <div className="grid grid-cols-4 bg-[#0F2438] text-white font-heading">
                <div className="p-6 border-r border-white/10">
                  Key Parameters
                </div>
                <div className="p-6 border-r border-white/10 text-accent bg-primary/30">
                  Monthly Retainer
                </div>
                <div className="p-6 border-r border-white/10">
                  Project-Based
                </div>
                <div className="p-6">Document-Based</div>
              </div>

              {[
                {
                  title: "Engagement Duration",
                  retainer: "Ongoing & continuous",
                  project: "Defined project timeline",
                  document: "Single / bundled scope",
                },
                {
                  title: "Scope of Work",
                  retainer: "Comprehensive & evolving",
                  project: "Limited to identified project",
                  document: "Specific documentation only",
                },
                {
                  title: "Legal Support Model",
                  retainer: "Preventive & advisory-driven",
                  project: "Transaction-focused",
                  document: "Drafting / review-focused",
                },
                {
                  title: "Cost Structure",
                  retainer: "Monthly structured fee",
                  project: "Project-based quotation",
                  document: "Per-document pricing",
                },
              ].map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-t border-white/10 text-gray-300"
                >
                  <div className="p-6 border-r border-white/10 font-medium text-white">
                    {row.title}
                  </div>
                  <div className="p-6 border-r border-white/10">
                    {row.retainer}
                  </div>
                  <div className="p-6 border-r border-white/10">
                    {row.project}
                  </div>
                  <div className="p-6">{row.document}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= MOBILE STACKED CARDS ================= */}
          <div className="md:hidden mt-16 space-y-12">
            {[
              {
                title: "Monthly Retainer",
                highlight: true,
                items: [
                  ["Engagement Duration", "Ongoing & continuous"],
                  ["Scope of Work", "Comprehensive & evolving"],
                  ["Support Model", "Preventive & advisory-driven"],
                  ["Cost Structure", "Monthly structured fee"],
                ],
              },
              {
                title: "Project-Based",
                highlight: false,
                items: [
                  ["Engagement Duration", "Defined project timeline"],
                  ["Scope of Work", "Limited to identified project"],
                  ["Support Model", "Transaction-focused"],
                  ["Cost Structure", "Project-based quotation"],
                ],
              },
              {
                title: "Document-Based",
                highlight: false,
                items: [
                  ["Engagement Duration", "Single / bundled scope"],
                  ["Scope of Work", "Specific documentation only"],
                  ["Support Model", "Drafting / review-focused"],
                  ["Cost Structure", "Per-document pricing"],
                ],
              },
            ].map((model, index) => (
              <div
                key={index}
                className={`border border-white/10 p-8 ${
                  model.highlight ? "bg-primary/30 border-accent" : ""
                }`}
              >
                <h3
                  className={`text-xl font-heading ${
                    model.highlight ? "text-accent" : "text-white"
                  }`}
                >
                  {model.title}
                </h3>

                <div className="mt-6 space-y-4 text-gray-300">
                  {model.items.map(([label, value], i) => (
                    <div key={i}>
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-gray-400">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center border-t border-white/10">
        <h2 className="text-3xl font-heading">
          Discuss the Appropriate Engagement Model
        </h2>

        <div className="mt-10">
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

export default Services;
