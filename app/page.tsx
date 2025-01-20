import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./hero";
import Services from "./services";
import Offers from "./offers";
import Promotions from "./promotions";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}
