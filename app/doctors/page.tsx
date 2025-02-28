import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Heading from "@/components/heading";
import Testimonials from "@/components/testimonials";
import Search from "./search";
import Doctors from "./doctors";
import Why from "./why";

export default function DoctorsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Врачи" />
        <Heading className="mb-[2.1875rem]">
          <div className="container">Наши специалисты</div>
        </Heading>
        <Search />
        <Doctors />
        <Why />
        <Testimonials />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
