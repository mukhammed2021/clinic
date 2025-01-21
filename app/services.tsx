import Link from "next/link";
import ServicesItems from "@/components/services-items";

const servicesItems = [
  {
    id: 1,
    src: "/services/dentistry.png",
    title: "Стоматология",
  },
  {
    id: 2,
    src: "/services/diagnostics.png",
    title: "Диагностика",
  },
  {
    id: 3,
    src: "/services/analysis.png",
    title: "Анализы",
  },
  {
    id: 4,
    src: "/services/vaccination.png",
    title: "Вакцинация",
  },
  {
    id: 5,
    src: "/services/certificates.png",
    title: "Медицинские справки",
  },
  {
    id: 6,
    src: "/services/checkup.png",
    title: "Check-Up",
  },
  {
    id: 7,
    src: "/services/therapy.png",
    title: "Терапия",
  },
  {
    id: 8,
    src: "/services/consultation.png",
    title: "Консультация",
  },
];

export default function Services() {
  return (
    <section className="pb-[5.5rem] sm:pb-44">
      <div className="container !max-w-[80.5rem]">
        <h2 className="mb-[3.125rem] text-center text-[1.6875rem]">
          Популярные услуги
        </h2>
        <ServicesItems servicesItems={servicesItems} />
        <div className="pt-[5.375rem] text-center">
          <Link
            href="/"
            className="inline-block rounded-[.9375rem] bg-[#82a4ff] px-16 py-[.875rem] text-xl font-medium text-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition-shadow hover:shadow-none"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
}
