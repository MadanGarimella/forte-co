import { Link } from "react-router-dom";
import footerBg from "../../assets/footer-bg.png";

function Footer() {
  return (
    <footer className="relative text-gray-300 overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85"></div>

      {/* Content */}
      <div className="relative z-10">

        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-16">

          {/* Column 1 */}
          <div>
            <h3 className="text-white font-heading text-xl">
              Forte & Co.
            </h3>

            <p className="mt-6 leading-relaxed text-gray-400">
              Non-litigation legal advisory and legal process outsourcing
              services for startups and growing businesses seeking
              structured legal clarity.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-heading text-lg">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              <Link to="/" className="hover:text-accent transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-accent transition">
                About
              </Link>
              <Link to="/services" className="hover:text-accent transition">
                Services
              </Link>
              <Link to="/contact" className="hover:text-accent transition">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-heading text-lg">
              Engagement Models
            </h4>

            <div className="mt-6 flex flex-col gap-4 text-gray-400">
              <span>Monthly Retainer</span>
              <span>Project-Based</span>
              <span>Document-Based</span>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-white font-heading text-lg">
              Contact
            </h4>

            <div className="mt-6 space-y-4 text-gray-400">
              <p>📞 +91 7893597609</p>
              <p>📧 forte.legal@outlook.com</p>
              <p>🌐 www.forteandco.in</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Forte & Co. All Rights Reserved.
          <br />
          This website is for informational purposes only and does not constitute legal advice.
        </div>

      </div>

    </footer>
  );
}

export default Footer;
