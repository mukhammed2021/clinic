import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import AllServices from "./all-services";

export default function Services() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection />
        <AllServices />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
