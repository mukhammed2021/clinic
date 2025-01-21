import BreadcrumbSection from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Addresses from "./addresses";
import Enroll from "@/components/enroll";

export default function Address() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Адреса" />
        <Addresses />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
