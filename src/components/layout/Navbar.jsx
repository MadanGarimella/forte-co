import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-primary/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Forte & Co."
              className="h-32 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-md tracking-wide font-heading">
            <Link to="/" className="hover:text-accent transition">
              Home
            </Link>

            <Link to="/services" className="hover:text-accent transition">
              Services
            </Link>

            <Link to="/about" className="hover:text-accent transition">
              About
            </Link>

            <Link to="/contact" className="hover:text-accent transition">
              Contact
            </Link>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent text-primary px-5 py-2 text-sm font-medium tracking-wide"
            >
              Book Consultation
            </motion.a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl text-light hover:text-accent transition"
          >
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary z-50 flex flex-col justify-center items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-3xl text-light hover:text-accent transition"
            >
              <FiX />
            </button>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8 text-3xl font-heading text-center"
            >
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition"
              >
                Services
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-accent transition"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-accent text-primary px-8 py-3 text-lg font-medium tracking-wide"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
