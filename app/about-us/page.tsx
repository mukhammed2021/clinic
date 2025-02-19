import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutUs from "@/components/about-us";
import Testimonials from "@/components/testimonials";
import Enroll from "@/components/enroll";

export default function AboutUsPage() {
  return (
    <div className="wrapper">
      <Header />

      <main>
        <AboutUs />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
