import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-primary text-light font-body">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
