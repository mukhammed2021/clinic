import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./hero";
import Services from "./services";
import Offers from "./offers";
import Promotions from "./promotions";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
        <Promotions />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
