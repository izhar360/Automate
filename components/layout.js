import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      {children}

      <Footer />
    </div>
  );
}
