import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ProductionCenter from "@/components/ProductionCenter";
import Tournesol from "@/components/Tournesol";
import Values from "@/components/Values";
import Commitments from "@/components/Commitments";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <ProductionCenter />
        <Tournesol />
        <Values />
        <Commitments />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
