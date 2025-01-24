import BreadcrumbSection from "@/components/breadcrumb";
import Enroll from "@/components/enroll";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Reviews from "./reviews";

export default function ReviewsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <BreadcrumbSection breadcrumbPage="Отзывы" />
        <Reviews />
        <Enroll />
      </main>
      <Footer />
    </div>
  );
}
