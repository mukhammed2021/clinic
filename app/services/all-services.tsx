import ServicesItems from "@/components/services-items";

const servicesItems = [
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
  },
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
  },
  {
    src: "/services/dentistry.png",
    title: "Стоматология",
  },
  {
    src: "/services/diagnostics.png",
    title: "Диагностика",
  },
  {
    src: "/services/analysis.png",
    title: "Анализы",
  },
  {
    src: "/services/vaccination.png",
    title: "Вакцинация",
  },
  {
    src: "/services/certificates.png",
    title: "Медицинские справки",
  },
  {
    src: "/services/checkup.png",
    title: "Check-Up",
  },
  {
    src: "/services/therapy.png",
    title: "Терапия",
  },
  {
    src: "/services/consultation.png",
    title: "Консультация",
  },
];

export default function AllServices() {
  return (
    <section className="pb-16 sm:pb-32">
      <div className="container !max-w-[80.5rem]">
        <h2 className="mb-[3.125rem] text-[1.6875rem]">Наши услуги</h2>
        <ServicesItems servicesItems={servicesItems} />
      </div>
    </section>
  );
}
