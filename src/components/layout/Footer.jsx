function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-muted">
        <p>© {new Date().getFullYear()} Forte & Co. All Rights Reserved.</p>
        <p className="mt-2">
          Non-litigation legal advisory and legal process outsourcing services.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
