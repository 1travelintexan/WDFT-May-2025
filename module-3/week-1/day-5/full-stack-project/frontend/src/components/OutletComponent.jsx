import Footer from "./Footer";
import { Navbar } from "./Navbar";

export default function OutletComponent({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
