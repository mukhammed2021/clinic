import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonials from "@/components/testimonials";
import Contacts from "./contacts";

export default function ContactsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Контакты" />
        <Contacts />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
