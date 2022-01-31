import Link from "next/link";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />

      {children}
    </div>
  );
}
