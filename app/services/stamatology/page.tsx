import BreadcrumbSection from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Stomatology from "@/components/stamatology";
import Enroll from "@/components/enroll";

export default function StomatologyPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="max-w-[1340px] mx-auto">
        <BreadcrumbSection breadcrumbPage="Услуги / Стоматология" />
        <Stomatology />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
} 