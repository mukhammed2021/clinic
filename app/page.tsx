import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./hero";
import Services from "./services";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
