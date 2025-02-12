import Footer from "@/components/footer";
import Header from "@/components/header";
import Sales from "@/components/sales";
import Testimonials from "@/components/testimonials";
import Enroll from "@/components/enroll";

export default function SalesPage() {
  return (
    <div className="wrapper">
      <Header />

      <main>
        <Sales />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
