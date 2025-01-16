import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
