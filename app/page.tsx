import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./hero";
import Services from "./services";
import Offers from "./offers";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
        <Offers />
      </main>
      <Footer />
    </div>
  );
}
